import axios from '../axios';
const states = {
    blogsData: {},
    blog: {},
    isBlogFetch: true,
    lastPage:"",
    currentPage:"",
};

const mutations = {
    BLOGS: (states, paylod) => states.blogsData = paylod,
    SET_LOADING: (states, payload) => states.isBlogFetch = payload,
    SET_BLOG: (states, payload) => states.blog = payload,
    Last_Page: (states,payload) => states.lastPage = payload,
    Current_Page: (states,payload) => states.currentPage = payload,
};


const actions = {
    async blogs({ commit }, page = 1) {
        commit('SET_LOADING', true);
        await axios.get(`api/blogs?page=${page}`)
            .then(res => {
                commit('Last_Page',res.data.meta.last_page)
                commit('Current_Page',res.data.meta.current_page)
                commit('BLOGS', res.data.data);
                commit('SET_LOADING', false)
            })
            .catch((err) => console.log(err));
    },
    async fetchBlog({ commit }, id) {
        commit('SET_LOADING', true);
        await axios.get(`api/blog/${id}`)
            .then(res => {
                commit('SET_BLOG', res.data.data);
                commit('SET_LOADING', false);
            })
            .catch((err)=> console.log(err));
    }

};

const Blog = {
    namespaced: true,
    states,
    mutations,
    actions
}

export default Blog;