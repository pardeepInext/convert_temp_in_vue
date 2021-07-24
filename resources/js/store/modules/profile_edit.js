import axios from '../axios';
import router from '../../router/index';
const state = {
   isforgotPassword: false,
   forgotError: '',
   user: {},
}

const mutations = {
   Is_ForgotPassword: (state, payload) => state.isforgotPassword = payload,
   Forgot_Error: (state, payload) => state.forgotError = payload,
   User: (state, payload) => state.user = payload,
}

const actions = {
   async forgotPassword({ commit }, payload) {
      commit('Is_ForgotPassword', true);
      await axios.post('api/forgotpassword', payload)
         .then((res) => res.data.success ? router.push({ name: 'sendvarificationlink', params: { id: res.data.user } }) : commit('Forgot_Error', res.data.errors.userInput[0]))
         .catch(err => console.log(err));
      commit('Is_ForgotPassword', false);
   },
   async confirmUser({ commit }, payload) {
      await axios.get(`api/confirm/${payload}`)
         .then(res => commit('User', res.data.data))
         .catch(err => console.log(err));

   },
}


const getters = {
   getUser: state => state.user,
}


const ProfileEdit = {
   namespaced: true,
   state,
   mutations,
   actions,
   getters
}

export default ProfileEdit;