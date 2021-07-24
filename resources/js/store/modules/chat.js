import axios from "../axios";
let token = localStorage.getItem('token') ? localStorage.getItem('token') : "";
let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
const state = {
    conversations: {},
    messages:{},
}

const mutations = {
    CONVERSATION: (state, payload) => state.conversations = payload,
    MESSAGES:(state,payload) => state.message = payload,
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
    async fetchChat({ commit },payload)
    {
         await axios.get(`api/message`,{
               headers: { 'Authorization': `Bearer ${token}` },
               params:{
                   user_1: payload.user_1,
                   user_2: payload.user_2
               }
           })
           .then((res)=> commit('MESSAGES',res.data.messages))
           .catch((err)=>console.error(`error in chat ajax: ${err.response.data.message}`))
    }
}

const getters = {
    conversations: (state) => state.conversations,
    messages : (state) => state.message,
}

const Chat = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default Chat;