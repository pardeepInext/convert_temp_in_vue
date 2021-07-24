import axios from '../axios';
import router from '../../router/index';
const state = {
    locationResult: {},
    searchProperty: {}
}

const mutations = {
    Location_Search: (state, payload) => state.locationResult = payload,
    Search_Property: (state, payload) => state.searchProperty = payload,
}

const actions = {
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
               // commit('Search_Property', res);
                router.push({ name: 'properties' });
            })
            .catch(err => console.log(err));

    }
}

const getters = {
    getLocationResult: (state) => state.locationResult,
    getSearchProperty: (state) => state.searchProperty,
}

const HomePage = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default HomePage;