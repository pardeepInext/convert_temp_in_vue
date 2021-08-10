<template>
  <div>
    <breadcrumb :breadcrumb="breadcrumb" />
    <section class="search-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="section-title">
              <h4>Where would you rather live?</h4>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="change-btn">
              <div class="cb-item" v-for="cbItem in cbItems" :key="cbItem">
                <label
                  :for="`cb-${cbItem}`"
                  :class="propertyFetch.status == cbItem ? 'active' : ''"
                >
                  For {{ cbItem }}
                  <input
                    type="radio"
                    :id="`cb-${cbItem}`"
                    v-model="propertyFetch.status"
                    :value="cbItem"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <select
              name=""
              id=""
              class="form-control float-end"
              style="width: 30%"
              v-model="propertyFetch.type"
            >
              <option selected value="">--Select Property Type--</option>
              <option
                :value="propertyType"
                v-for="propertyType in propertyTypes"
                :key="propertyType"
              >
                {{ propertyType.toUpperCase() }}
              </option>
            </select>
          </div>
        </div>
        <div class="search-form-content">
          <form class="filter-form" @submit.prevent="searchFilter">
            <div class="number-wrap my-2">
              <div class="quantity">
                <input
                  type="number"
                  step="1"
                  placeholder="No Of Bedrooms"
                  class="sm-width filter-input"
                  v-model="propertyFetch.bedroom"
                />
                <div class="quantity-nav">
                  <div
                    class="quantity-button quantity-up"
                    @click="
                      propertyFetch.bedroom = Number(propertyFetch.bedroom) + 1
                    "
                  >
                    +
                  </div>
                  <div
                    class="quantity-button quantity-down"
                    @click="
                      propertyFetch.bedroom =
                        propertyFetch.bedroom > 1
                          ? Number(propertyFetch.bedroom) - 1
                          : propertyFetch.bedroom
                    "
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="quantity">
                <input
                  type="number"
                  step="1"
                  v-model="propertyFetch.bathroom"
                  placeholder="No Of Bathroom"
                  class="sm-width filter-input ms-2"
                />
                <div class="quantity-nav">
                  <div
                    class="quantity-button quantity-up"
                    @click="
                      propertyFetch.bathroom =
                        Number(propertyFetch.bathroom) + 1
                    "
                  >
                    +
                  </div>
                  <div
                    class="quantity-button quantity-down"
                    @click="
                      propertyFetch.bathroom =
                        propertyFetch.bathroom > 1
                          ? Number(propertyFetch.bathroom) - 1
                          : propertyFetch.bathroom
                    "
                  >
                    -
                  </div>
                </div>
              </div>
              <div class="quantity">
                <input
                  type="number"
                  step="1"
                  v-model="propertyFetch.garage"
                  placeholder="No Of Garage"
                  class="sm-width filter-input ms-2"
                  id="garage"
                />
                <div class="quantity-nav">
                  <div
                    class="quantity-button quantity-up"
                    @click="
                      propertyFetch.garage = Number(propertyFetch.garage) + 1
                    "
                  >
                    +
                  </div>
                  <div
                    class="quantity-button quantity-down"
                    @click="
                      propertyFetch.garage > 1
                        ? (propertyFetch.garage =
                            Number(propertyFetch.garage) - 1)
                        : propertyFetch.garage
                    "
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div class="room-size-range-wrap sm-width">
              <div class="price-text">
                <label for="roomsizeRange"
                  >Size:[{{ propertyFetch.size[0] }}-{{
                    propertyFetch.size[1]
                  }}]sqft</label
                >
                <div ref="size"></div>
              </div>
              <div id="roomsize-range" class="slider"></div>
            </div>
            <div class="price-range-wrap sm-width">
              <div class="price-text">
                <label for="priceRange"
                  >Price:[{{ propertyFetch.price[0] }}-{{
                    propertyFetch.price[1]
                  }}]$</label
                >
                <div ref="price"></div>
              </div>
              <div id="price-range" class="slider"></div>
            </div>
            <button type="submit" class="search-btn sm-width">Search</button>
          </form>
        </div>
      </div>
    </section>
    <section class="property-section spad">
      <div class="container" id="property-list">
        <div v-if="getProperties">
          <div v-if="propertyList.length > 0" class="row">
            <property
              v-for="property in propertyList"
              :key="property.id"
              :property="property"
            />
            <div class="col-lg-12">
              <div class="loadmore-btn">
                <button
                  v-if="
                    getProperties.data.meta.current_page !=
                    getProperties.data.meta.last_page
                  "
                  @click="loadMoreProperty"
                  :disabled="propertiesLoading"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="propertiesLoading"
                  ></i>
                  Load More
                </button>
              </div>
            </div>
          </div>
          <div class="row section-title" v-else>
            <h4>No Property Available</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Breadcrumb from "../components/Breadcrumb.vue";
import Property from "../components/Property";
import noUiSlider from "nouislider";
import axios from "../store/axios";
export default {
  data() {
    return {
      breadcrumb: {
        name: "Property",
        img: "breadcrumb-bg.jpg",
      },
      propertyFetch: {
        page: 1,
        userId:'', 
        status: "rent",
        bedroom: "",
        bathroom: "",
        garage: "",
        price: [],
        size: [],
        feature: [],
        type: "",
      },
      property: [],
      moreOption: false,
      cbItems: ["rent", "sale"],
      sliderOption: {
        start: [326300, 601800],
        connect: "lower",
        connect: true,
        step: 100,
        cssPrefix: "noUi-",
        range: {
          min: 0,
          max: 1000000,
        },
      },
    };
  },
  components: {
    Breadcrumb,
    Property,
  },
  computed: {
    ...mapState(['currentUserId','asset']),
    ...mapState(["propertyFeatures", "propertyTypes"]),
    ...mapState("Property", ["propertiesLoading"]),
    ...mapGetters("Property", ["getProperties"]),
    ...mapGetters("HomePage", ["getSearchProperty"]),
    propertyList() {
      this.getProperties.data.data.forEach((data) => this.property.push(data));
      return this.property;
    },
    priceSliderOption() {
      return this.maxPrice ? this.maxPrice : "test";
    },
  },
  methods: {
    ...mapActions(["titleCase"]),
    ...mapActions("Property", ["fetchproperties"]),
    loadMoreProperty() {
      this.propertyFetch.page = this.getProperties.data.meta.current_page + 1;
      this.fetchproperties(this.propertyFetch);
    },
    searchFilter() {
      this.propertyList.length = 0;
      this.propertyFetch.page = 1;
      this.fetchproperties(this.propertyFetch);
    },
    calcPercent: (value, percent) =>
      Math.round(parseInt(value) / 100) * percent,
  },
  async mounted() {
    let maxData = {};
    let _this = this;
    this.propertyFetch.userId = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).id : '';
    
    this.fetchproperties(this.propertyFetch);
     //ajax for getting max slider values
    await axios
        .get(`${this.asset}api/propery/maxvalue/`)
      .then((res) => (maxData = res.data))
      .catch((err) => {
        console.log(err);
      });

    //slider init
    noUiSlider.create(this.$refs.price, {
      start: [
        _this.calcPercent(maxData.price, 20),
        _this.calcPercent(maxData.price, 50),
      ],
      connect: "lower",
      connect: true,
      step: _this.calcPercent(maxData.price, 10),
      cssPrefix: "noUi-",
      range: {
        min: 0,
        max: parseInt(maxData.price),
      },
    });
    noUiSlider.create(this.$refs.size, {
      start: [
        _this.calcPercent(maxData.size, 20),
        _this.calcPercent(maxData.size, 50),
      ],
      connect: "lower",
      connect: true,
      step: _this.calcPercent(maxData.size, 10),
      cssPrefix: "noUi-",
      range: {
        min: 0,
        max: parseInt(maxData.size),
      },
    });

    //updating value of slider
    this.$refs.price.noUiSlider.on(
      "update",
      (values) => (this.propertyFetch.price = values)
    );
    this.$refs.size.noUiSlider.on(
      "update",
      (values) => (this.propertyFetch.size = values)
    );
  },
};
</script>

<style scoped>
.loadmore-btn button {
  display: inline-block;
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 30px;
  background: #103230;
  border: none;
}
.loadmore-btn button:hover,
.loadmore-btn button:active {
  background: #1b5451;
}
.filter-input {
  clear: none;
  margin-right: 20px;
  height: 46px;
  background: #ffffff;
  border-radius: 0;
  border: 1px solid #e1e1e1;
  line-height: 43px;
  margin-bottom: 20px;
}
.quantity {
  position: relative;
  margin-right: 20px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.quantity input {
  width: 45px;
  height: 42px;
  line-height: 1.65;
  float: left;
  display: block;
  padding: 0;
  margin: 0;
  padding-left: 20px;
  border: 1px solid #eee;
}

.quantity input:focus {
  outline: 0;
}

.quantity-nav {
  float: left;
  position: relative;
  height: 42px;
}

.quantity-button {
  position: relative;
  cursor: pointer;
  border-left: 1px solid #eee;
  width: 20px;
  text-align: center;
  color: #333;
  font-size: 13px;
  font-family: "Trebuchet MS", Helvetica, sans-serif !important;
  line-height: 1.7;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.quantity-button.quantity-up {
  position: absolute;
  height: 50%;
  top: 0;
  border-bottom: 1px solid #eee;
}

.quantity-button.quantity-down {
  position: absolute;
  bottom: -1px;
  height: 50%;
}

#garage {
  margin-bottom: 7px;
}
</style>

