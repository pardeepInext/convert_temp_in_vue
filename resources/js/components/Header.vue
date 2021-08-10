<template>
  <div
    class="offcanvas-menu-overlay"
    :class="responsiveClass ? 'active' : ''"
  ></div>
  <div
    class="offcanvas-menu-wrapper"
    :class="responsiveClass ? 'show-offcanvas-menu-wrapper' : ''"
  >
    <div
      class="canvas-close"
      @click="() => (responsiveClass = !responsiveClass)"
    >
      <i class="bi bi-x"></i>
    </div>
    <div class="logo">
      <router-link :to="{ name: 'home' }">
        <img :src="`${asset}assets/img/logo.png`" alt="" />
      </router-link>
    </div>
    <div id="mobile-menu-wrap">
      <div class="slicknav_menu">
        <nav class="slicknav_nav slicknav_hidden">
          <ul>
            <main-menu
              v-for="mainMenu in mainMenus"
              :key="mainMenu.name"
              :menu="mainMenu"
              placement="mobile"
            ></main-menu>
          </ul>
        </nav>
      </div>
    </div>
    <div class="om-widget">
      <ul>
        <li><i class="bi bi-envelope"></i> Aler.support@gmail.com</li>
        <li>
          <i class="bi bi-phone"></i> 125-711-811
          <span>125-668-886</span>
        </li>
      </ul>
      <router-link class="hw-btn" :to="{ name: 'login' }">Login</router-link>
    </div>
    <div class="om-social">
      <social-menu
        v-for="social in socials"
        :social="social"
        :key="social.icon"
        placement="mobile"
      />
    </div>
  </div>
  <header class="header-section">
    <div class="hs-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <router-link :to="{ name: 'home' }">
                <img :src="`${asset}assets/img/logo.png`" alt="" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="ht-widget">
              <ul>
                <li><i class="bi bi-envelope"></i> Aler.support@gmail.com</li>
                <li>
                  <i class="bi bi-phone"></i> 125-711-811
                  <span>125-668-886</span>
                </li>
              </ul>
              <!-- <button
                class="hw-btn logout"
                v-if="token || isAuth"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Logout
              </button> -->
              <router-link class="hw-btn" v-if="token || isAuth" :to="{name:'profile'}">Profile</router-link>
              <router-link class="hw-btn" :to="{ name: 'login' }" v-else
                >Login</router-link
              >
              <!-- <div class="collapse" id="collapseExample"   v-if="token || isAuth">
                <a href="javascript:void(0);" @click="logout(user.id)">Logout</a>
              </div> -->
            </div>
          </div>
        </div>
        <div class="canvas-open" @click="responsiveBtn">
          <i class="bi bi-list"></i>
        </div>
      </div>
    </div>
    <div class="hs-nav">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <nav class="nav-menu">
              <ul>
                <main-menu
                  v-for="mainMenu in mainMenus"
                  :key="mainMenu.name"
                  :menu="mainMenu"
                  placement="main"
                ></main-menu>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <div class="hn-social">
              <social-menu
                v-for="social in socials"
                :social="social"
                :key="social.icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SocialMenu from "./SocialMenu.vue";
import MainMenu from "./MainMenu.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      responsiveClass: false,
      mainMenus: [
        {
          name: "Home",
          href: "/",
          hasChild: false,
        },
        {
          name: "Properties",
          href: "property",
          hasChild: true,
          childMenus: [
            {
              name: "Property",
              href: "/properties",
              hasChild: false,
            },
            {
              name: "Property Submit",
              href: "/property-submit",
              hasChild: false,
            },
          ],
        },
        {
          name: "About",
          href: "/about",
          hasChild: false,
        },
        {
          name: "Blog",
          href: "/blogs",
          hasChild: false,
        },
        {
          name: "Contact",
          href: "/contactus",
          hasChild: false,
        },
      ],
    };
  },
  components: {
    SocialMenu,
    MainMenu,
  },
  computed: {
    ...mapState(["asset", "socials"]),
    ...mapState('Auth',['isAuth']),
    ...mapGetters(['token','user']),
  },
  methods: {
    responsiveBtn() {
      this.responsiveClass = !this.responsiveClass;
    },
    ...mapActions("Auth", ["logout"]),
  },
  mounted() {},
};
</script>

<style scoped>
.slicknav_nav ul,
.slicknav_nav ul li ul {
  list-style: none;
}
.logout {
  outline: none;
  border: none;
}
</style>