<template>
  <div>
    <breadcrumb :breadcrumb="breadcrumb" />
    <section class="about-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-text">
              <div class="at-title">
                <h3>Welcom to Aler REAL</h3>
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of
                  type.
                </p>
              </div>
              <div class="at-feature">
                <div class="af-item">
                  <div class="af-icon">
                    <img
                      :src="`${asset}assets/img/chooseus/chooseus-icon-1.png`"
                      alt=""
                    />
                  </div>
                  <div class="af-text">
                    <h6>Find your future home</h6>
                    <p>
                      We help you find a new home by offering a smart real
                      estate.
                    </p>
                  </div>
                </div>
                <div class="af-item">
                  <div class="af-icon">
                    <img
                      :src="`${asset}assets/img/chooseus/chooseus-icon-2.png`"
                      alt=""
                    />
                  </div>
                  <div class="af-text">
                    <h6>Experienced agents</h6>
                    <p>Find an agent who knows your market best</p>
                  </div>
                </div>
                <div class="af-item">
                  <div class="af-icon">
                    <img
                      :src="`${asset}assets/img/chooseus/chooseus-icon-3.png`"
                      alt=""
                    />
                  </div>
                  <div class="af-text">
                    <h6>Buy or rent homes</h6>
                    <p>
                      Millions of houses and apartments in your favourite cities
                    </p>
                  </div>
                </div>
                <div class="af-item">
                  <div class="af-icon">
                    <img
                      :src="`${asset}assets/img/chooseus/chooseus-icon-4.png`"
                      alt=""
                    />
                  </div>
                  <div class="af-text">
                    <h6>List your own property</h6>
                    <p>Sign up now and sell or rent your own properties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="about-pic set-bg"
              :style="{
                backgroundImage: `url('${asset}assets/img/about-us.jpg')`,
              }"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  data() {
    return {
      breadcrumb: {
        name: "About",
        img: "breadcrumb-bg.jpg",
      },
    };
  },
  computed: {
    ...mapState(["asset"]),
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style>
</style>