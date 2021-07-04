<template>
  <div>
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
      <div class="cs-item-list">
        <div
          class="cs-item set-bg"
          :style="{
            backgroundImage: `url('${asset}assets/img/categories/cat-1.jpg')`,
          }"
        >
          <div class="cs-text">
            <h5>Apartment</h5>
            <span>230 property</span>
          </div>
        </div>
        <div
          class="cs-item set-bg"
          :style="{
            backgroundImage: `url('${asset}assets/img/categories/cat-2.jpg')`,
          }"
        >
          <div class="cs-text">
            <h5>Villa</h5>
            <span>230 property</span>
          </div>
        </div>
        <div
          class="cs-item set-bg"
          :style="{
            backgroundImage: `url('${asset}assets/img/categories/cat-3.jpg')`,
          }"
        >
          <div class="cs-text">
            <h5>House</h5>
            <span>230 property</span>
          </div>
        </div>
        <div
          class="cs-item set-bg"
          :style="{
            backgroundImage: `url('${asset}assets/img/categories/cat-4.jpg')`,
          }"
        >
          <div class="cs-text">
            <h5>Restaurent</h5>
            <span>230 property</span>
          </div>
        </div>
        <div
          class="cs-item set-bg"
          :style="{
            backgroundImage: `url('${asset}assets/img/categories/cat-1.jpg')`,
          }"
        >
          <div class="cs-text">
            <h5>Office</h5>
            <span>230 property</span>
          </div>
        </div>
      </div>
    </section>
    <hero-slider :sliders="slider" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeroSlider from "../components/HeroSlider.vue";
export default {
  data() {
    return {
      slider: [
        {
          id: 1,
          img: "/hero/hero-1.jpg",
          name: "Balaji Symphony",
          type: "rent",
          price: "65",
        },
        {
          id: 2,
          img: "/hero/hero-2.jpg",
          name: "Balaji Symphony 2",
          type: "Buy",
          price: "45",
        },
        {
          id: 3,
          img: "/hero/hero-3.jpg",
          name: "Balaji Symphony 3",
          type: "rent",
          price: "65",
        },
      ],
    };
  },
  components: {
    HeroSlider,
  },
  computed: {
    ...mapState(["asset"]),
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
button:active,
button:hover {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  border: 1px solid #00c89d;
}
</style>