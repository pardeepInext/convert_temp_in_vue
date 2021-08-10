import axios from '../axios';
import { Notify, Block } from "notiflix";
import { Modal } from "bootstrap";
import router from '../../router/index';
const urlPrifix = 'api/admin';
const state = {
    properties: {},
    propertyDetails: {},
    newslatter: {},
    contactUs: {},
    user: {},
    userDetails: {},
    isUserAdding: false,
    addingUserError: {},
}

const mutations = {
    Properties: (state, payload) => state.properties = payload,
    PropertyDetails: (state, payload) => state.propertyDetails = payload,
    NewsLatter: (state, payload) => state.newslatter = payload,
    ContactUs: (state, payload) => state.contactUs = payload,
    Users: (state, payload) => state.user = payload,
    UserDetails: (state, payload) => state.userDetails = payload,
    IsUserAdding: (state, payload) => state.isUserAdding = payload,
    AddingUserError: (state, payload) => state.addingUserError = payload,
}

const actions = {
    async fetchProperties({ commit }, data = {}) {
        let page = data.hasOwnProperty("page") ? data.page : 1;
        Block.pulse('#property-table');
        await axios.get(`${urlPrifix}/property?page=${page}`, { params: data })
            .then(res => {
                commit('Properties', res.data);
                Block.remove('#property-table');
            })
            .catch((err) => {
                Notify.failure("Something went wrong! please refresh page.");
                Block.remove('#property-table')

            });
    },
    async propertyDetail({ commit }, id) {
        await axios.get(`${urlPrifix}/property/${id}`)
            .then(res => commit('PropertyDetails', res.data.data))
            .catch(err => Notify.failure("Something went wrong in fetching details"));
    },
    async fetchNewslatter({ commit }, data = {}) {
        Block.pulse('#newslatter-table');
        let page = data.hasOwnProperty("page") ? data.page : 1;
        await axios.get(`${urlPrifix}/newsLatter?page=${page}`, { params: data })
            .then(res => {
                commit('NewsLatter', res.data)
                Block.remove('#newslatter-table')
            })
            .catch(err => {
                Notify.failure("Something went wrong in fetching newslatter");
                Block.remove('#newslatter-table');
            });

    },
    async fetchContactUs({ commit }, data = {}) {
        Block.pulse('#contactus-table');
        let page = data.hasOwnProperty("page") ? data.page : 1;
        await axios.get(`${urlPrifix}/contactus?page=${page}`, { params: data })
            .then(res => {
                commit('ContactUs', res.data)
                Block.remove('#contactus-table')
            })
            .catch(err => {
                Notify.failure("Something went wrong in fetching contactus");
                Block.remove('#contactus-table');
            });

    },
    async fetchUser({ commit }, data = {}) {
        Block.dots('#users-table');
        commit('Users', {});
        let page = data.hasOwnProperty("page") ? data.page : 1;
        await axios.get(`${urlPrifix}/users?page=${page}`, { params: data })
            .then(res => {
                commit('Users', res.data)
                Block.remove('#users-table')
            })
            .catch(err => {
                Notify.failure("Something went wrong in fetching user");
                Block.remove('#users-table');
            });

    },
    async fetchUserDetails({ commit }, id) {
        Block.hourglass('#userdetails');
        new Modal(document.getElementById('userModal')).show();
        await axios.get(`${urlPrifix}/user/${id}`)
            .then(res => {
                commit("UserDetails", res.data);
                Block.remove('#userdetails');
            })
            .catch(err => {
                Notify.failure(`Something went wrong in fetching userdetail ${err.message}`);
                Block.remove('#userdetails');
            });
    },
    async addUser({ commit }, data) {
        commit("IsUserAdding", true);
        commit("AddingUserError", {});
        await axios.post(`${urlPrifix}/users`,data)
            .then(res => {
                if (res.data.success) {
                    Notify.success("User is added successfully")
                    router.push({ name: 'users' })
                } else {
                    commit("AddingUserError", res.data.errors);
                }
                commit("IsUserAdding", false);
            })
            .catch(err => Notify.failure(`Something went wrong in fetching userdetail ${err.message}`));
    }


}

const getters = {
    properties: (state) => state.properties,
    propertyDetails: (state) => state.propertyDetails,
    newslatter: (state) => state.newslatter,
    contactUs: (state) => state.contactUs,
    user: (state) => state.user,
    userDetails: (state) => state.userDetails,
    isUserAdding: (state) => state.isUserAdding,
    addingUserError: (state) => state.addingUserError,
}

const Admin = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default Admin;