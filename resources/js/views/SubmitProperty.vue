<template>
  <breadcrumb :breadcrumb="breadcrumb" />
  <!-- Property Submit Section Begin -->
  <section class="property-submit-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="property-submit-form">
            <form @submit.prevent="addProperty">
              <div class="pf-title">
                <h4>Title</h4>
                <input type="text" placeholder="Your Title*" v-model="propertySubmit.title"/>
              </div>
              <div class="pf-location">
                <h4>Property Location</h4>
                <div class="location-inputs">
                  <input type="text" placeholder="Address" />
                  <input type="text" placeholder="Neighborhood" />
                  <input
                    type="search"
                    list="countries"
                    v-model="propertySubmit.location.country"
                    placeholder="country"
                    @keyup="getCountry(propertySubmit.location.country.trim())"
                    autocomplete="off"
                  />
                  <datalist id="countries">
                    <option
                      v-for="country in countries"
                      :data-value="country.id"
                      :key="country.id"
                      :value="country.name"
                    />
                  </datalist>
                  <input
                    type="search"
                    placeholder="Please select country  first"
                    list="states"
                    v-model="propertySubmit.location.state"
                    @keyup="getState(propertySubmit.location.state.trim())"
                  />
                  <datalist id="states">
                    <option
                      v-for="state in locationStates"
                      :data-value="state.id"
                      :key="state.id"
                      :value="state.name"
                    />
                  </datalist>
                  <input
                    type="search"
                    placeholder="Please select states first"
                    list="cities"
                    v-model="propertySubmit.location.city"
                    @keyup="getCity(propertySubmit.location.city.trim())"
                  />
                  <datalist id="cities">
                    <option
                      v-for="state in locationStates"
                      :data-value="state.id"
                      :key="state.id"
                      :value="state.name"
                    />
                  </datalist>

                  <input type="text" placeholder="Posta Code / Zip" />
                </div>
              </div>
              <div class="pf-type">
                <h4>Property type</h4>
                <div class="type-item">
                  <label
                    :for="propertyType"
                    v-for="propertyType in propertyTypes"
                    :key="propertyType"
                  >
                    <!-- to change property type in Titlecase -->
                    {{
                      propertyType.charAt(0).toUpperCase() +
                      propertyType.slice(1)
                    }}
                    <input type="radio" :id="propertyType" name="property-type" :value="propertyType" v-model="propertySubmit.type"/>
                    <span class="checkbox"></span>
                  </label>
                </div>
              </div>
              <div class="pf-status">
                <h4>Property status</h4>
                <div class="status-item">
                  <label
                    v-for="propertyStatus in propertyStatus"
                    :for="propertyStatus"
                    :key="propertyStatus"
                    >For {{ propertyStatus }}
                    <input
                      type="radio"
                      :id="propertyStatus"
                      name="property-status"
                      v-model="propertySubmit.status"
                      :value="propertyStatus"
                    />
                    <span class="checkbox"></span>
                  </label>
                </div>
              </div>
              <div class="pf-feature-price">
                <h4>Featured Price</h4>
                <div class="fp-inputs">
                  <input type="text" placeholder="Price" v-model="prices" />
                </div>
              </div>
              <div class="pf-feature">
                <h4>Property Features</h4>
                <div class="features-list">
                  <div
                    class="feature-item"
                    v-for="propertyFeature in propertyFeatures"
                    :key="propertyFeature"
                  >
                  <label
                    :for="feature"
                    v-for="feature in propertyFeature"
                    :key="feature"
                    >{{ feature }}
                    <input type="checkbox" :id="feature" v-model="propertySubmit.features" :value="feature"/>
                    <span class="checkbox"></span>
                  </label>
                  </div>
                </div>
              </div>
              <div class="pf-feature-image">
                <h4>Featured Image</h4>
                <div class="row">
                  <input
                    type="file"
                    class="d-none"
                    ref="featuredImage"
                    @change="imagePreview"
                    name="feature-image"
                  />
                  <div class="col-lg-6">
                    <button
                      type="button"
                      class="site-btn"
                      @click="$refs.featuredImage.click()"
                    >
                      Add Image
                    </button>
                  </div>
                  <div class="col-lg-6">
                    <img
                      :src="imagePreviewUrl != '' ? imagePreviewUrl : ''"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="pf-property-details">
                <h4>Property details</h4>
                <div class="property-details-inputs">
                  <input type="text" placeholder="Property ID"  v-model="propertySubmit.propertyid" />
                  <input type="text" placeholder="Area Size ( Only digits )" v-model="propertySubmit.areasize" />
                  <input type="text" placeholder="Size Prefix"  v-model="propertySubmit.prifix"/>
                  <input type="text" placeholder="Bedrooms" v-model="propertySubmit.bedroom" />
                  <input type="text" placeholder="Bathrooms" v-model="propertySubmit.bathroom" />
                  <input type="text" placeholder="Garages" v-model="propertySubmit.garages" />
                  <input type="text" placeholder="Year Built" v-model="propertySubmit.yearbuilt" />
                  <input type="text" placeholder="Virtual Tour Video URL" v-model="propertySubmit.virtualurl"/>
                </div>
                <button type="submit" class="site-btn">Submit Property</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Property Submit Section End -->
</template>

<script>
import { mapActions, mapState } from "vuex";
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  data() {
    return {
      breadcrumb: {
        name: "Property Submit",
        img: "breadcrumb-bg.jpg",
      },
      imagePreviewUrl: "",
      propertyFeatureVal:"",
      propertySubmit: {
        location: {
          country: "",
          state: "",
          city: "",
        },
        featuredImage: {},
        features:[],
        price:"",
        title:"",
        type:'',
        status:"",
        propertyid:"",
        areasize:"",
        prifix:"",
        bathroom:"",
        bedroom:"",
        garages:"",
        yearbuilt:"",
        virtualurl:"",

      },
    };
  },
  components: {
    Breadcrumb,
  },
  computed: {
    ...mapState(["propertyStatus", "propertyTypes", "propertyFeatures"]),
    ...mapState("Property", [
      "countries",
      "locationStates",
      "cities",
      "countryMatch",
    ]),
  },
  methods: {
    ...mapActions("Property", ["fetchCountries", "fetchStates", "fetchCities"]),
    getCountry(value) {
      if (value.length > 2) this.fetchCountries(value);
    },
    getState(value) {
      if (value.length > 2)
        this.fetchStates({
          state: value,
          country: this.propertySubmit.location.country,
        });
    },
    getCity(value) {
      if (value.length > 2)
        this.fetchCities({
          city: value,
          state: this.propertySubmit.location.state,
        });
    },
    addProperty() {
      console.log(this.propertySubmit);
    },
    imagePreview(e) {
      this.propertySubmit.featuredImage = e.target.files;
      const imagePreview = new FileReader();
      imagePreview.addEventListener(
        "load",
        () => (this.imagePreviewUrl = imagePreview.result)
      );
      imagePreview.readAsDataURL(e.target.files[0]);
    },
  },
};
</script>
<style scoped>
.select {
  width: calc(33.33% - 20px);
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  height: 46px;
  background: transparent;
  color: #666666;
  padding-left: 20px;
  font-size: 14px;
  border: none;
  border: 1px solid #e1e1e1;
}
.fetured-image-drop {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>>

