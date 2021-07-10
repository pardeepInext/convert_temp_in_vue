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
        <div class="search-form-content">
          <form action="#" class="filter-form">
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
                      propertyFetch.bedroom = Number(propertyFetch.bedroom) - 1
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
                        Number(propertyFetch.bathroom) - 1
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
                      propertyFetch.garage = Number(propertyFetch.garage) - 1
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
            <button type="button" class="search-btn sm-width">Search</button>
          </form>
        </div>
        <div class="more-option">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-heading active">
                <a
                  data-bs-toggle="collapse"
                  href="#collapseOne"
                  @click="() => (moreOption = !moreOption)"
                >
                  <i
                    class="bi"
                    :class="moreOption ? 'bi-plus-lg' : 'bi-dash-lg'"
                  ></i>
                  More Search Options
                </a>
              </div>
              <div id="collapseOne" class="collapse">
                <div class="card-body">
                  <div class="mo-list">
                    <div
                      class="ml-column"
                      v-for="propertyFeature in propertyFeatures"
                      :key="propertyFeature"
                    >
                      <label
                        :for="feature"
                        v-for="feature in propertyFeature"
                        :key="feature"
                        >{{ feature }}
                        <input type="checkbox" :id="feature" :value="feature" v-model="propertyFetch.feature" />
                        <span class="checkbox"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="property-section spad">
      <div class="container">
        <div class="row" v-if="getProperties">
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
                <i class="fas fa-spinner fa-spin" v-if="propertiesLoading"></i>
                Load More
              </button>
            </div>
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
export default {
  data() {
    return {
      breadcrumb: {
        name: "Property",
        img: "breadcrumb-bg.jpg",
      },
      propertyFetch: {
        page: 1,
        status: "rent",
        bedroom: "",
        bathroom: "",
        garage: "",
        price: [],
        size: [],
        feature:[],
      },
      property: [],
      moreOption: false,
      cbItems: ["rent", "sale"],
      sliderOption: {
        start: [20, 80],
        connect: "lower",
        connect: true,
        step: 10,
        cssPrefix: "noUi-",
        range: {
          min: 0,
          max: 100,
        },
      },
    };
  },
  components: {
    Breadcrumb,
    Property,
  },
  computed: {
    ...mapState(["propertyFeatures"]),
    ...mapState("Property", ["propertiesLoading"]),
    ...mapGetters("Property", ["getProperties"]),
    propertyList() {
      this.getProperties.data.data.forEach((data) => this.property.push(data));
      return this.property;
    },
  },
  methods: {
    ...mapActions(["titleCase"]),
    ...mapActions("Property", ["fetchproperties"]),
    loadMoreProperty() {
      this.propertyFetch.page = this.getProperties.data.meta.current_page + 1;
      this.fetchproperties(this.propertyFetch);
    },
  },
  mounted() {
    this.fetchproperties(this.propertyFetch);

    //init slider
    noUiSlider.create(this.$refs.price, this.sliderOption);
    noUiSlider.create(this.$refs.size, this.sliderOption);

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

