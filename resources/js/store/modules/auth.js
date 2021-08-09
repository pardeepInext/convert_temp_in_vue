import axios from '../axios';
import router from '../../router/index';
import { gapi, loadClientAuth2, loadAuth2, loadGapiInsideDOM } from 'gapi-script';
import facebookLogin from 'facebook-login';
const state = {
     isLogin: false,
     loginError: {},
     isRegister: false,
     isAuth: false,
     registerError: {},
     isFacebookLogin: false,
     isGoogleLogin: false,
}

const mutations = {
     Is_Login: (state, payload) => state.isLogin = payload,
     Is_Register: (state, payload) => state.isRegister = payload,
     Login_Error: (state, payload) => state.loginError = payload,
     Register_Error: (state, payload) => state.registerError = payload,
     Is_Auth: (state, payload) => state.isAuth = payload,
     Is_FacebookLogin: (state, payload) => state.isFacebookLogin = payload,
     Is_GoogleLogin: (state, payload) => state.Is_GoogleLogin = payload
}

const actions = {
     async socialLogin({ commit, dispatch }, provider) {
          provider == 'google' ? dispatch('googleLogin', provider) : dispatch('facebookLogin', provider);
     },
     async login({ commit, dispatch }, data) {
          commit('Is_Login', true);
          await axios.post('api/login', data)
               .then(res => {
                    res.data.success ? dispatch('afterAuth', { token: res.data.token, user: res.data.user }) : commit('Login_Error', res.data.errors);
                    commit('Is_Login', false);
               })
               .catch((err) => console.log(err));
     },
     async register({ commit }, data) {
          commit('Is_Register', true);
          await axios.post('api/register', data)
               .then(res => {
                    res.data.success ? this.afterAuth(res.data.token) : commit('Register_Error', res.data.errors);
                    commit('Is_Register', false);
               })
               .catch(err => console.log(err));
     },
     afterAuth({ commit }, payload) {
          localStorage.setItem('token', payload.token);
          localStorage.setItem('user', JSON.stringify(payload.user));
          commit('Is_Auth', true)
          payload.user.role_id == 1 ? router.push({ name: 'home' }) : router.push({ name: 'dashboard' });
     },
     async logout({ commit, dispatch }, id) {
          axios.delete(`api/logout/${id}`)
               .then(res => res.success ? dispatch('afterLogout') : '')
               .then(res => dispatch('afterLogout'))
               .catch(err => console.log(err));

     },
     afterLogout({ commit }) {
          if (localStorage.getItem('token')) {
               localStorage.removeItem('token');
          }
          if (localStorage.getItem('user')) {
               localStorage.removeItem('user');
          }
          commit('Is_Auth', false)
          router.push({ name: 'login' })
     },
     async googleLogin({ dispatch, commit }, payload) {
          commit('Is_GoogleLogin', true);
          let googleCientId = "792301159599-14g22n0nse0g5t6hcft7r97jforbemn1.apps.googleusercontent.com";
          let accesstoken = "";
          let auth2 = await loadAuth2(gapi, googleCientId).then(resp => console.log(resp)).catch(err => console.log(err));
          await gapi.auth2.getAuthInstance().signIn().then(success => dispatch('afterSocialLogin', { token: success.xc.access_token, provider: payload }))
               .then(err => console.log(err));
          commit('Is_GoogleLogin', false);
     },
     async facebookLogin({ dispatch, commit }, payload) {
          const api = facebookLogin({ appId: '790958838264301' });
          commit('Is_FacebookLogin', true);
          await api.login().then(resp => dispatch('afterSocialLogin', { token: resp.authResponse.accessToken, provider: payload }))
               .catch((err) => console.log(err));
          commit('Is_FacebookLogin', false);
     },
     async afterSocialLogin({ commit, dispatch }, payload) {
          await axios.post('api/sociallogin', payload)
               .then(res => {
                    res.data.success ? dispatch('afterAuth', { token: res.data.token, user: res.data.user }) : commit('Login_Error', res.data.errors);
               })
               .catch(err => console.log(err));

     }
}

const getters = {
     getLoginErrors: (state) => state.loginError,
     getIsLogin: (state) => state.isLogin,
}

const Auth = {
     namespaced: true,
     state,
     mutations,
     actions,
     getters
}

export default Auth;