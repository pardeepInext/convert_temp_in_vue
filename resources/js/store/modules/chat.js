import axios from "../axios";
let token = localStorage.getItem('token') ? localStorage.getItem('token') : "";
let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
const state = {
    conversations: {},
    messages: {},
    fetchMessages: [],
    isChatLoading: false,
}

const mutations = {
    CONVERSATION: (state, payload) => state.conversations = payload,
    MESSAGES: (state, payload) => state.message = payload,
    IsChatLoading: (state, payload) => state.isChatLoading = payload,
    FetchMessages(state, payload) {
        Array.prototype.push.apply(state.fetchMessages, payload);
    }
}

const actions = {
    async fetchConversation({ commit }) {
        let id = (token != "") ? user.id : 0;
        axios.get(`api/conversation`, {
            headers: { 'Authorization': `Bearer ${token}` },
            params: {
                current_user: id
            }
        })
            .then(res => commit('CONVERSATION', res.data))
            .catch(err => console.error(`error in conversation ajax: ${err.response.data.message}`));
    },
    async fetchChat({ commit }, payload) {
        commit('IsChatLoading', true);
        await axios.get(`api/message?page=${payload.page}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            params: payload
           })
            .then((res) => {
                commit('MESSAGES', res.data.messages);
                commit('IsChatLoading', false);
                commit('FetchMessages', res.data.messages.data);
            })
            .catch((err) => console.error(`error in chat ajax: ${err.response.data.message}`))
    },
    async sendMessage({ commit }, payload) {
        axios.post(`api/message`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
                //'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {

            })
            .catch(err => console.log(err));
    }
}

const getters = {
    conversations: (state) => state.conversations,
    messages: (state) => state.message,
    fetchMessages: (state) => state.fetchMessages,
}

const Chat = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default Chat;