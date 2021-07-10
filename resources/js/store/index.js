import { createStore } from 'vuex';
import Blog from './modules/blogs';
import Property from './modules/property';

let asset = document.querySelector('meta[name="asset"]').content;

const store = createStore({
    state: {
        asset: asset,
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
    actions: {
        scrollToTop: () => window.scrollTo(0, 200),
        titleCase: (txt) => txt,
    },
    modules: {
        Blog,
        Property
    }
});

export default store;