<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="fs-about">
            <div class="fs-logo">
              <router-link :to="{ path: '/' }">
                <img :src="`${asset}assets/img/f-logo.png`" alt="" />
              </router-link>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              aliquip ex ea
            </p>
            <div class="fs-social">
              <social-menu
                v-for="social in socials"
                :social="social"
                :key="social.icon"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6">
        </div>
        <div class="col-lg-2 col-sm-6">
          <div class="fs-widget">
            <h5>Links</h5>
            <ul>
              <li>
                <router-link :to="{ name: 'contactus' }">Contact</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'property-submit' }"
                  >Add property for Sell</router-link
                >
              </li>
              <li><router-link to="">My Properties</router-link></li>
              <li><router-link :to="{ name: 'register' }">Register</router-link></li>
              <li><router-link :to="{ name: 'login' }">Login</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="fs-widget">
            <h5>Newsletter</h5>
            <p>Deserunt mollit anim id est laborum.</p>
            <form action="#" class="subscribe-form">
              <input
                type="text"
                placeholder="Email"
                v-model="newslatterEmail"
              />
              <button
                type="button"
                class="site-btn"
                @click="newsLatter(newslatterEmail)"
                :disabled="isNewslatteloading"
              >
                Subscribe
                <i class="fas fa-sync fa-spin" v-if="isNewslatteloading"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="copyright-text">
        <p class="text-white">
          Copyright {{ year }} &copy; All rights reserved | Design & Developed
          <i class="fa fa-heart" aria-hidden="true"></i> by
          <a href="javascript:void(0);" target="_blank">Pardeep Kumar</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SocialMenu from "./SocialMenu.vue";
import { Notify, Loading } from "notiflix";
import Notiflix from "notiflix";
import axios from "../store/axios";
export default {
  components: {
    SocialMenu,
  },
  data() {
    return {
      newslatterEmail: "",
      status: false,
    };
  },
  computed: {
    ...mapState(["asset", "socials"]),
    year: () => new Date().getFullYear(),
    isNewslatteloading: {
      get() {
        return this.status;
      },
      set(value) {
        return (this.status = value);
      },
    },
  },
  methods: {
    async newsLatter() {
      this.isNewslatteloading = true;
      await axios
        .post("api/newslatter/subscribe", { email: this.newslatterEmail })
        .then((res) => {
          if (res.data.success) {
            Notify.success(res.data.message);
            this.newslatterEmail = "";
          } else {
            Notify.failure(res.data.errors.email[0]);
          }
          this.isNewslatteloading = false;
        })
        .catch((err) => {
          Notify.failure("Something went wrong!please try again.");
          this.isNewslatteloading = false;
        });
    },
  },
};
</script>

<style  scoped>
.notiflix-notify .success {
  background: #00c89e !important;
}
</style>
