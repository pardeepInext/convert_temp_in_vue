<template>
  <div v-if="property">
    <section class="property-details-section">
      <div class="property-pic-slider">
        <hero-slider
          :sliders="property.images"
          :placement="'propertydetails'"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="pd-text">
              <div class="row">
                <div class="col-lg-6">
                  <div class="pd-title">
                    <a href="#" class="heart-icon"
                      ><i class="bi bi-suit-heart"></i
                    ></a>
                    <div
                      class="label"
                      :class="property.status == 'rent' ? 'c-red' : ''"
                    >
                      For {{ property.status }}
                    </div>
                    <div class="pt-price">
                      &#36; {{ property.price
                      }}<span v-if="property.status == 'rent'">/month</span>
                    </div>
                    <h3>{{ property.title }}</h3>
                    <p>
                      <span class="icon_pin_alt"></span>
                      {{ property.location.addess }}
                    </p>
                  </div>
                </div>
                <div class="col-lg-6"></div>
              </div>
              <div class="pd-board">
                <div class="tab-board">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Overview
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Feature
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div class="tab-details">
                        <ul class="left-table">
                          <li>
                            <span class="type-name">Property Type</span>
                            <span class="type-value">{{
                              property.type.toUpperCase()
                            }}</span>
                          </li>
                          <li v-if="property.property_id">
                            <span class="type-name">Property ID</span>
                            <span class="type-value"
                              >#{{ property.property_id }}</span
                            >
                          </li>
                          <li>
                            <span class="type-name">Price</span>
                            <span class="type-value">
                              &#36; {{ property.price
                              }}<span v-if="property.status == 'rent'"
                                >/month</span
                              ></span
                            >
                          </li>
                          <li>
                            <span class="type-name">Year Built</span>
                            <span class="type-value">{{
                              property.year_built
                            }}</span>
                          </li>
                          <li>
                            <span class="type-name">Contract type</span>
                            <span class="type-value">{{
                              property.status
                            }}</span>
                          </li>
                          <li>
                            <span class="type-name">Agent</span>
                            <span class="type-value">TBA</span>
                          </li>
                        </ul>
                        <ul class="right-table">
                          <li>
                            <span class="type-name">Home Area</span>
                            <span class="type-value"
                              >{{ property.size }}{{ property.prefix }}</span
                            >
                          </li>
                          <li>
                            <span class="type-name">Rooms</span>
                            <span class="type-value">{{ property.size }}</span>
                          </li>
                          <li>
                            <span class="type-name">Bedrooms</span>
                            <span class="type-value">{{
                              property.bedrooms
                            }}</span>
                          </li>
                          <li>
                            <span class="type-name">Bathrooms</span>
                            <span class="type-value">{{
                              property.bathrooms
                            }}</span>
                          </li>
                          <li>
                            <span class="type-name">Garages</span>
                            <span class="type-value">{{
                              property.garages
                            }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="tab-details">
                        <h4 class="text-center my-4">Property Features</h4>
                        <ul class="left-table">
                          <li
                            v-for="feature in property.features"
                            :key="feature.id"
                          >
                            <span class="type-name">
                              <img
                                :src="`${asset}assets/img/icons/${featuresImg(
                                  feature.feature
                                )}.png`"
                                alt=""
                                width="60"
                                height="60"
                              />
                            </span>
                            <span class="type-value">{{
                              feature.feature.toUpperCase()
                            }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pd-widget">
                <h4>Floor plans</h4>
                <img
                  :src="`${asset}assets/img/property/details/floor-plan.jpg`"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="property-sidebar">
              <div class="single-sidebar">
                <div class="section-title sidebar-title">
                  <h5>Posted By</h5>
                </div>
                <div class="top-agent">
                  <div class="ta-item">
                    <div
                      class="ta-pic set-bg"
                      data-setbg="img/property/details/sidebar/ta-1.jpg"
                      :style="{
                        backgroundImage: `url('${profileImage(
                            property.postedBy.provider_id,
                            property.postedBy.proifie_image,
                            property.postedBy.img,
                        )}')`,
                      }"
                    ></div>
                    <div class="ta-text">
                      <h6>
                        <a href="#">{{ property.postedBy.name }}</a>
                      </h6>
                      <div class="ta-num">
                        {{
                          property.postedBy.email
                            ? property.postedBy.email
                            : "No Email available"
                        }}
                      </div>
                      <div class="float-end pe-2">
                        <button type="button" class="btn btn-sm btn-primary">
                          <i class="fas fa-comment-dots"></i>
                          Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-sidebar">
                <div class="section-title sidebar-title">
                  <h5>EMI calculator</h5>
                </div>
                <form class="calculator-form" @submit.prevent="calculateEMI">
                  <div class="filter-input">
                    <p>Sale Price ${{ property.price }}</p>
                  </div>
                  <div class="filter-input">
                    <p>Loan Amount {{ loanAmount }}</p>
                    <input
                      type="range"
                      class="custom-range"
                      id="customRange1"
                      :min="0"
                      :max="property.price"
                      v-model="loanAmount"
                    />
                  </div>
                  <div class="filter-input">
                    <p>Term(year)</p>
                    <select name="" id="" class="form-control" v-model="term">
                      <option value="3">3 Years</option>
                      <option value="4">4 Years</option>
                      <option value="5">5 Years</option>
                      <option value="6">20 Years</option>
                    </select>
                  </div>
                  <div class="filter-input">
                    <p>Interest Rate in {{ interest }}%</p>
                    <input
                      type="range"
                      class="custom-range"
                      :min="0"
                      :max="20"
                      v-model="interest"
                    />
                  </div>
                  <button type="submit" class="site-btn">Calculate</button>
                  <div
                    class="section-title sidebar-title"
                    v-if="emi > 0"
                    :style="{ position: absolute }"
                  >
                    <h5>EMI IS <span class="pt-price">&#36;</span>{{ emi }}</h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import noUiSlider from "nouislider";
import HeroSlider from "../components/HeroSlider.vue";
export default {
  components: { HeroSlider },
  data() {
    return {
      loanAmount: 0,
      interest: 0,
      term: 3,
      emi: 0,
    };
  },
  computed: {
    ...mapState("Property", ["property"]),
    ...mapState(["asset"]),
  },
  methods: {
    ...mapActions("Property", ["fetchproperty"]),
    calculateEMI() {
      let principle = Number(this.loanAmount);
      let rate = Number(this.interest);
      let tenure = Number(this.term);
      let interestAmount = (principle * rate * tenure) / 100;
      let months = tenure * 12;
      this.emi = Math.round((interestAmount + principle) / months);
    },
    featuresImg: (value) => value.replace(" ", "_"),
    profileImage(prover_id, proifie_image, img) {
      return typeof prover_id == "string" ? img : proifie_image;
    },
  },
  mounted() {
    this.fetchproperty(this.$route.params.id);
  },
};
</script>

<style lang="css" scoped>
.property-pic-slider {
  width: 100%;
}
</style>>
