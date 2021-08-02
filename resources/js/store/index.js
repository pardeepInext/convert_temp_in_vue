import { createStore } from 'vuex';
import Blog from './modules/blogs';
import Property from './modules/property';
import Auth from './modules/auth';
import ProfileEdit from './modules/profile_edit';
import HomePage from './modules/homepage';
import Chat from './modules/chat';

let asset = document.querySelector('meta[name="asset"]').content;

const store = createStore({
    state: {
        asset: asset,
        token: '',
        user: {},
        currentUserId: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : '',
        socials: [
            { href: "javascript.void(0);", icon: "bi bi-facebook" },
            { href: "javascript.void(0);", icon: "bi bi-youtube", class: 'youtube' },
            { href: "javascript.void(0);", icon: "bi bi-twitter", class: 'twitter' },
            { href: "javascript.void(0);", icon: "bi bi-instagram", class: 'instagram' },
        ],
        propertyStatus: ["rent", "sale"],
        propertyTypes: [
            "apartment",
            "house",
            "office",
            "villa",
            "store",
            "resturent",
        ],
        propertyFeatures: [
            [
                "air conditioning",
                "barbeque",
                "dryer",
                "gym"
            ],
            [
                "laundry",
                "lawn",
                "microwave",
                'outdoorShower'
            ],
            [
                'refrigerator',
                'sauna',
                'swimming pool',
                'tv cable'
            ],
            [
                'washer',
                'Wifi',
                'window coverings',
                'villa'
            ]
        ],
    },
    mutations: {

    },
    getters: {
        token: (state) => state.token = localStorage.getItem("token") ? localStorage.getItem("token") : false,
        user: (state) => state.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},

    },
    actions: {
        scrollToTop: () => window.scrollTo(0, 200),
        titleCase: (txt) => txt,
        profileImage(provider_id, proifie_image, img) {
            return typeof provider_id == "string" ? img : proifie_image;
        }
    },
    modules: {
        Blog,
        Property,
        Auth,
        ProfileEdit,
        HomePage,
        Chat
    }
});

export default store;