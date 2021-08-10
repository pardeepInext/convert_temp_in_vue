import axios from "../axios";
let token = localStorage.getItem('token') ? localStorage.getItem('token') : "";
let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
import Notiflix from 'notiflix'
const state = {
    conversations: {},
    isConversationLoading: false,
    messages: {},
    fetchMessages: [],
    isChatLoading: false,
}

const mutations = {
    CONVERSATION: (state, payload) => state.conversations = payload,
    IsConversationLoading: (state, payload) => state.isConversationLoading = payload,
    MESSAGES: (state, payload) => state.message = payload,
    IsChatLoading: (state, payload) => state.isChatLoading = payload,
    FetchMessages(state, payload) {
        Array.prototype.push.apply(state.fetchMessages, payload);
    }
}

const actions = {
    async fetchConversation({ commit }) {
        commit("IsConversationLoading", true);
        let id = (token != "") ? user.id : 0;
        axios.get(`api/conversation`, {
            headers: { 'Authorization': `Bearer ${token}` },
            params: {
                current_user: id
            }
        })
            .then(res => {
                commit("IsConversationLoading", false);
                commit('CONVERSATION', res.data);
            })
            .catch(err => console.error(`error in conversation ajax: ${err.response.data.message}`));
    },
    async fetchChat({ commit }, payload) {
        commit('IsChatLoading', true);
        Notiflix.Block.hourglass(".chat-container")
        await axios.get(`api/message?page=${payload.page}`, {
            headers: { 'Authorization': `Bearer ${token}` },
            params: payload
        })
            .then((res) => {
                commit('MESSAGES', res.data.messages);
                commit('IsChatLoading', false);
                commit('FetchMessages', res.data.messages.data);
                Notiflix.Block.remove(".chat-container");
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
    isConversationLoading: (state) => state.isConversationLoading,
    messages: (state) => state.message,
    isChatLoading: (state) => state.isChatLoading,
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