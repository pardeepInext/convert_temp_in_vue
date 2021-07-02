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
          <div class="fs-widget">
            <h5>Help</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Knowledgebase</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6">
          <div class="fs-widget">
            <h5>Links</h5>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Create Property</a></li>
              <li><a href="#">My Properties</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="fs-widget">
            <h5>Newsletter</h5>
            <p>Deserunt mollit anim id est laborum.</p>
            <form action="#" class="subscribe-form">
              <input type="text" placeholder="Email" />
              <button type="submit" class="site-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div class="copyright-text">
        <p>
          Copyright {{ year }} &copy; All rights reserved | This template is
          made with <i class="fa fa-heart" aria-hidden="true"></i> by
          <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import SocialMenu from "./SocialMenu.vue";
export default {
  components: {
    SocialMenu,
  },
  computed: {
    ...mapState(["asset", "socials"]),
    year: () => new Date().getFullYear(),
  },
};
</script>

<style>
</style>