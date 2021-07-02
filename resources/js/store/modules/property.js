import axios from '../axios';
const states = {
    countries: [],
    countryMatch: false,
    locationStates: {},
    cities: {},
};

const mutations = {
    GET_COUNTRIES: (states, payload) => states.countries = payload,
    Country_Match_Flag: (states, payload) => states.countryMatch = payload,
    GET_STATES: (states, payload) => states.locationStates = payload,
    GET_CITIES: (states, payload) => states.cities = payload,
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
        // let formData = new FormData();
        // Object.entries(data).forEach((property) => {
        //     if(property[0] == 'location'){
        //         formData.append(property[0], JSON.stringify(property[1]))
        //     }else{
        //         formData.append(property[0], property[1])
        //     }
        // });

        await axios.post('api/propery', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err));

    }

};

const Property = {
    namespaced: true,
    states,
    mutations,
    actions
}

export default Property;