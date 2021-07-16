<template>
  <div @scroll="testScrol">
    <section
      class="blog-hero-section set-bg"
      :style="{ backgroundImage: `url('${asset}assets/img/blog/bh-bg.jpg')` }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="bh-text" style="width: 64%">
              <h4>Search Property</h4>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type your requirement"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  v-model="search"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  style="background: #00c89e; border: 1px solid #00c89d"
                >
                  <i class="bi bi-search"></i>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="categories-section">
      <div class="cs-item-list" ref="propertycount">
        <peroperty-count
          v-for="propertyCount in propertyCounts"
          :key="propertyCount"
          :peropertyCount="propertyCount"
        />
      </div>
    </section>
    <hero-slider :sliders="slider" :placement="'home'" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeroSlider from "../components/HeroSlider.vue";
import PeropertyCount from "../components/PropertyCount.vue";
import { Loader, LoaderOptions } from "google-maps";
export default {
  data() {
    return {
      search: "",
      service: null,
      searchResults: {},
      slider: [
        {
          id: 1,
          image: "/hero/hero-1.jpg",
          name: "Balaji Symphony",
          type: "rent",
          price: "65",
        },
        {
          id: 2,
          image: "/hero/hero-2.jpg",
          name: "Balaji Symphony 2",
          type: "Buy",
          price: "45",
        },
        {
          id: 3,
          image: "/hero/hero-3.jpg",
          name: "Balaji Symphony 3",
          type: "rent",
          price: "65",
        },
      ],
      propertyCounts: [
        {
          name: "Apartment",
          count: "230",
          img: "cat-1.jpg",
        },
        {
          name: "Villa",
          count: "145",
          img: "cat-2.jpg",
        },
        {
          name: "House",
          count: "245",
          img: "cat-3.jpg",
        },
        {
          name: "Restaurent",
          count: "300",
          img: "cat-4.jpg",
        },
        {
          name: "Office",
          count: "400",
          img: "cat-5.jpg",
        },
      ],
    };
  },
  metaInfo() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCj7x4x98mJgF9SHxXTREmLcGuAiqHYl_4&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.MapsInit(), // will declare it in methods
        },
      ],
    };
  },
  watch: {
    search(newValue) {
      if (newValue) {
        this.service.getPlacePredictions(
          {
            input: this.location,
            types: ["(cities)"],
          },
          this.displaySuggestions
        );
      }
    },
  },
  components: {
    HeroSlider,
    PeropertyCount,
  },
  computed: {
    ...mapState(["asset"]),
  },
  methods: {
    MapsInit() {
      this.service = new window.google.maps.places.AutocompleteService();
    },
    displaySuggestions(predictions, status) {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        this.searchResults = [];
        return;
      }
      this.searchResults = predictions.map(
        (prediction) => prediction.description
      );
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCj7x4x98mJgF9SHxXTREmLcGuAiqHYl_4&callback=initMap",
      "async",
      "defer"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style scropped>
.categories-section {
  margin-bottom: 10px;
}
input {
  font-size: 14px;
  color: #999999;
  font-weight: 500;
  width: 100%;
  height: 50px;
  border: 1px solid #cccccc;
}

input:focus,
button:focus,
button:active {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  /* border: 1px solid #00c89d; */
}
</style>