<template>
  <div @scroll="testScrol" v-if="sliders && count">
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
                  type="search"
                  class="form-control"
                  placeholder="Type your location"
                  v-model="search"
                  @keyup="locationSearch"
                  list="locations"
                  autocomplete="off"
                />
                <datalist id="locations">
                  <option
                    v-for="(location, index) in getLocationResult"
                    :key="index"
                    v-html="location"
                    @click="getOptionValue(location)"
                  ></option>
                </datalist>
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  style="background: #00c89e; border: 1px solid #00c89d"
                  @click="searchProperty(search)"
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
          v-for="propertyCount in count"
          :key="propertyCount.count"
          :peropertyCount="propertyCount"
        />
      </div>
    </section>
    <hero-slider :sliders="sliders" :placement="'home'" />
  </div>
  <div v-else>
     <skeleton />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import HeroSlider from "../components/HeroSlider.vue";
import PeropertyCount from "../components/PropertyCount.vue";
import Skeleton from '../components/Skeleton';
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
    };
  },
  components: {
    HeroSlider,
    PeropertyCount,
    Skeleton
  },
  computed: {
    ...mapState(["asset"]),
    ...mapGetters("HomePage", ["getLocationResult", "sliders", "count"]),
  },
  methods: {
    ...mapActions("HomePage", ["searchDropDown", "searchProperty", "index"]),
    locationSearch() {
      if (this.search.length > 2) this.searchDropDown(this.search);
    },
  },
  mounted() {
    this.index();
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