import axios from '../axios';
import Router from '../../router/index';
import alertify from 'alertifyjs'
const states = {
    countries: [],
    countryMatch: false,
    locationStates: {},
    cities: {},
    submitError: {},
    submitLoading: false,
    submitSuccess: false,
};

const mutations = {
    GET_COUNTRIES: (states, payload) => states.countries = payload,
    Country_Match_Flag: (states, payload) => states.countryMatch = payload,
    GET_STATES: (states, payload) => states.locationStates = payload,
    GET_CITIES: (states, payload) => states.cities = payload,
    GET_SUBMIT_ERROR: (states, payload) => states.submitError = payload,
    SUBMIT_LOADING: (states, payload) => states.submitLoading = payload,
    SUBMIT_SUCCESS: (states, payload) => states.submitSuccess = payload,
};

const actions = {
    async fetchCountries({ commit }, name) {
        commit('Country_Match_Flag', false);
        await axios.post('api/countries', { name: name })
            .then(resp => { commit('GET_COUNTRIES', resp.data); commit('Country_Match_Flag', true); })
            .catch(err => console.log(err));
    },
    async fetchStates({ commit }, data) {
        await axios.post('api/states', data)
            .then((res) => {
                commit('GET_STATES', res.data);
            })
            .catch(err => console.log(err));
    },
    async fetchCities({ commit }, data) {
        await axios.post('api/city', data)
            .then((res) => commit('GET_CITIES', res.data))
            .catch(err => console.log(err));
    },
    async insertProperty({ commit }, data) {
        commit('SUBMIT_LOADING', true)
        await axios.post('api/propery', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((resp) => {
                commit('SUBMIT_LOADING', false);
                if (resp.status == 203) commit('GET_SUBMIT_ERROR', resp.data);
                if (resp.status == 200) commit('SUBMIT_SUCCESS', resp.data.success);
            })
            .catch((error) => commit('SUBMIT_LOADING', false));

    }

};

const Property = {
    namespaced: true,
    states,
    mutations,
    actions
}

export default Property;