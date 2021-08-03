import axios from '../axios';
import { Notify } from "notiflix";
const urlPrifix = 'api/admin';
const state = {
    properties: {},
    propertyDetails: {},
    newslatter: {},
}

const mutations = {
    Properties: (state, payload) => state.properties = payload,
    PropertyDetails: (state, payload) => state.propertyDetails = payload,
    NewsLatter: (state, payload) => state.newslatter = payload,
}

const actions = {
    async fetchProperties({ commit }, data = {}) {
        let page = data.hasOwnProperty("page") ? data.page : 1;
        await axios.get(`${urlPrifix}/property?page=${page}`, { params: data })
            .then(res => commit('Properties', res.data))
            .catch((err) => Notify.failure("Something went wrong! please refresh page."));
    },
    async propertyDetail({ commit }, id) {
        await axios.get(`${urlPrifix}/property/${id}`)
            .then(res => commit('PropertyDetails', res.data.data))
            .catch(err => Notify.failure("Something went wrong in fetching details"));
    },
    async fetchNewslatter({ commit }, data = {}) {
        let page = data.hasOwnProperty("page") ? data.page : 1;
        await axios.get(`${urlPrifix}/newsLatter?page=${page}`, { params: data })
            .then(res => commit('NewsLatter', res.data))
            .catch(err => Notify.failure("Something went wrong in fetching newslatter"));
    }


}

const getters = {
    properties: (state) => state.properties,
    propertyDetails: (state) => state.propertyDetails,
    newslatter: (state) => state.newslatter,
}

const Admin = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default Admin;