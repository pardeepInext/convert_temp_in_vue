import axios from '../axios';
import router from '../../router/index';
import { Notify } from "notiflix";
const state = {
    locationResult: {},
    searchProperty: {},
    sliders: {},
    count: {},
}

const mutations = {
    Location_Search: (state, payload) => state.locationResult = payload,
    Search_Property: (state, payload) => state.searchProperty = payload,
    slider: (state, payload) => state.sliders = payload,
    count: (state, payload) => state.count = payload,
}

const actions = {
    async index({ commit }) {
        await axios.get("api/homepage")
            .then(res => {
                commit('slider', res.data.slider);
                /* making count with image */
                const img = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg', 'cat-5.jpg'];
                const countData = [];
                res.data.count.forEach((count, index) => {
                    countData.push({ name: count.type, count: count.count, img: img[index] });
                });
                commit('count', countData);
            })
            .catch(err => {
                Notify.failure("Something went wrong! please refresh page.")
            });
    },
    async searchDropDown({ commit }, search) {
        await axios.get(`api/searchlocation?search=${search}`)
            .then(res => commit("Location_Search", res.data))
            .catch(err => console.log(err));

    },
    async searchProperty({ commit }, search) {
        let index = search.lastIndexOf("(");
        let column = search.substring(index + 1).slice(0, -1);
        let value = search.split(" ")[0];
        axios.get('api/propery/search/', {
            params: {
                column: column,
                value: value,
            }
        })
            .then(res => {
                router.push({ name: 'properties' });
            })
            .catch(err => console.log(err));

    }

}

const getters = {
    getLocationResult: (state) => state.locationResult,
    getSearchProperty: (state) => state.searchProperty,
    sliders: state => state.sliders,
    count: (state) => state.count,
}

const HomePage = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default HomePage;