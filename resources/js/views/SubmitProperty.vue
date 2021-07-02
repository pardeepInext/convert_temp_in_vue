<template>
  <breadcrumb :breadcrumb="breadcrumb" />
  <!-- Property Submit Section Begin -->
  <section class="property-submit-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="property-submit-form">
            <form @submit.prevent="addProperty" ref="submitForm">
              <div class="pf-title">
                <h4>Title</h4>
                <input
                  type="text"
                  placeholder="Your Title*"
                  v-model="propertySubmit.title"
                  name="title"
                />
              </div>
              <div class="pf-location">
                <h4>Property Location</h4>
                <div class="location-inputs">
                  <input type="text" placeholder="Address" autocomplete="off" v-model="propertySubmit.location.address" />
                  <input
                    type="search"
                    list="countries"
                    :class="locationErr.country ? 'invalid' : ''"
                    v-model="propertySubmit.location.country"
                    placeholder="country"
                    @keyup="getCountry(propertySubmit.location.country.trim())"
                    autocomplete="off"
                    autofill="off"
                  />
                  <span class="text-danger" v-if="locationErr.country">
                    Please type valid country name
                  </span>
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
                    placeholder="state"
                    list="states"
                    :class="locationErr.state ? 'invalid' : ''"
                    v-model="propertySubmit.location.state"
                    @keyup="getState(propertySubmit.location.state.trim())"
                    autocomplete="off"
                  />
                  <span class="text-danger" v-if="locationErr.state">
                    Please type valid state name
                  </span>
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
                    placeholder="city"
                    list="cities"
                    :class="locationErr.state ? 'invalid' : ''"
                    v-model="propertySubmit.location.city"
                    @keyup="getCity(propertySubmit.location.city.trim())"
                    autocomplete="off"
                  />
                  <span class="text-danger" v-if="locationErr.city">
                    Please type valid city name
                  </span>
                  <datalist id="cities">
                    <option
                      v-for="state in locationStates"
                      :data-value="state.id"
                      :key="state.id"
                      :value="state.name"
                    />
                  </datalist>

                  <input type="text" placeholder="Posta Code / Zip"  tocomplete="off" />
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
                    <input
                      type="radio"
                      :id="propertyType"
                      name="type"
                      :value="propertyType"
                      v-model="propertySubmit.type"
                    />
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
                      name="status"
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
                  <input
                    type="text"
                    placeholder="Price"
                    v-model="propertySubmit.prices"
                    name="price"
                  />
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
                      <input
                        type="checkbox"
                        :id="feature"
                        name="feature[]"
                        v-model="propertySubmit.features"
                        :value="feature"
                      />
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
                    name="image"
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
                    <p class="text-danger" v-if="imageErr">
                      <strong>Invalid Image type</strong>
                    </p>
                    <img
                      v-else
                      :src="imagePreviewUrl != '' ? imagePreviewUrl : ''"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="pf-property-details">
                <h4>Property details</h4>
                <div class="property-details-inputs">
                  <input
                    type="text"
                    placeholder="Property ID"
                    name="property_id"
                    v-model="propertySubmit.propertyid"
                  />
                  <input
                    type="text"
                    placeholder="Area Size ( Only digits )"
                    name="size"
                    v-model="propertySubmit.areasize"
                  />
                  <input
                    type="text"
                    placeholder="Size Prefix"
                    name="prefix"
                    v-model="propertySubmit.prifix"
                  />
                  <input
                    type="text"
                    placeholder="Bedrooms"
                    name="bedrooms"
                    v-model="propertySubmit.bedroom"
                  />
                  <input
                    type="text"
                    placeholder="Bathrooms"
                    name="bathrooms"
                    v-model="propertySubmit.bathroom"
                  />
                  <input
                    type="text"
                    placeholder="Garages"
                    name="garages"
                    v-model="propertySubmit.garages"
                  />
                  <input
                    type="text"
                    placeholder="Year Built"
                    name="year_built"
                    v-model="propertySubmit.yearbuilt"
                  />
                  <input
                    type="text"
                    name="tour_url"
                    placeholder="Virtual Tour Video URL"
                    v-model="propertySubmit.virtualurl"
                  />
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
      propertyFeatureVal: "",
      locationErr: {
        country: false,
        state: false,
        city: false,
      },
      imageType: ["image/png", "image/jpeg", "image/gif"],
      imageErr: false,
      propertySubmit: {
        location: {
          address:"",
          country: "",
          state: "",
          city: "",
        },
        featuredImage: {},
        features: [],
        price: "",
        title: "",
        type: "",
        status: "",
        propertyid: "",
        areasize: "",
        prifix: "",
        bathroom: "",
        bedroom: "",
        garages: "",
        yearbuilt: "",
        virtualurl: "",
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
    ...mapActions("Property", ["fetchCountries", "fetchStates", "fetchCities","insertProperty"]),
    getCountry(value) {
      if (value.length > 1) this.fetchCountries(value);
    },
    getState(value) {
      if (value.length > 1)
        this.fetchStates({
          state: value,
          country: this.propertySubmit.location.country,
        });
    },
    getCity(value) {
      if (value.length > 1)
        this.fetchCities({
          city: value,
          state: this.propertySubmit.location.state,
        });
    },
    addProperty() {
      this.locationErr.country = this.dataListValidation(
        this.countries,
        this.propertySubmit.location.country
      )
        ? false
        : true;

      this.locationErr.state = this.dataListValidation(
        this.locationStates,
        this.propertySubmit.location.state
      )
        ? false
        : true;

      this.locationErr.city = this.dataListValidation(
        this.cities,
        this.propertySubmit.location.city
      )
        ? false
        : true;
      this.imageValidation();
      if (
        !this.imageErr &&
        !this.locationErr.country &&
        !this.locationErr.state &&
        !this.locationErr.city
      ) {
        let formData = new FormData(this.$refs.submitForm);
        formData.append('location', JSON.stringify(this.propertySubmit.location));
        this.insertProperty(formData);
      }
    },
    imagePreview(e) {
      this.propertySubmit.featuredImage = e.target.files[0];
      this.imageValidation();
      const imagePreview = new FileReader();
      imagePreview.addEventListener(
        "load",
        () => (this.imagePreviewUrl = imagePreview.result)
      );
      imagePreview.readAsDataURL(e.target.files[0]);
    },
    dataListValidation(list, input) {
      if (typeof list != "undefined") {
        const listArr = [];
        list.forEach((item) => listArr.push(item.name));
        return listArr.includes(input) ? true : false;
      }
    },
    imageValidation() {
      const extension = ["image/png", "image/jpeg", "image/gif"];
      this.imageErr = extension.includes(this.propertySubmit.featuredImage.type)
        ? false
        : true;
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

.valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  /* background-image: url(
    "data:image/svg + xml,
    %3csvgxmlns='http://www.w3.org/2000/svg'viewBox='0 0 8 8'%3e%3cpathfill='%23198754'd='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e"
  ); */
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  /* background-image: url(
    data:image/svg + xml,
    %3csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 12 12"width="12"height="12"fill="none"stroke="%23dc3545"%3e%3ccirclecx="6"cy="6"r="4.5"/%3e%3cpathstroke-linejoin="round"d="M5.8 3.6h.4L6 6.5z"/%3e%3ccirclecx="6"cy="8.2"r=".6"fill="%23dc3545"stroke="none"/%3e%3c/svg%3e
  ); */
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>>

