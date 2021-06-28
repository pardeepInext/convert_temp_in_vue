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
    <div id="mobile-menu-wrap"></div>
    <div class="om-widget">
      <ul>
        <li><i class="bi bi-envelope"></i> Aler.support@gmail.com</li>
        <li>
          <i class="bi bi-phone"></i> 125-711-811
          <span>125-668-886</span>
        </li>
      </ul>
      <a href="javascript:void(0);" class="hw-btn">Submit property</a>
    </div>
    <div class="om-social">
      <social-menu
        v-for="social in socials"
        :social="social"
        :key="social.icon"
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
              <a href="javascript:void(0);" class="hw-btn">Submit property</a>
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
export default {
  data() {
    return {
      responsiveClass: false,
      socials: [
        { href: "javascript.void(0);", icon: "bi bi-facebook" },
        { href: "javascript.void(0);", icon: "bi bi-youtube" },
        { href: "javascript.void(0);", icon: "bi bi-twitter" },
        { href: "javascript.void(0);", icon: "bi bi-instagram" },
      ],
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
              name: "Property Grid",
              href: "/property",
              hasChild: false,
            },
            {
              name: "Property List",
              href: "",
              hasChild: false,
            },
            {
              name: "Property Detail",
              href: "",
              hasChild: false,
            },
            {
              name: "Property Comperison",
              href: "",
              hasChild: false,
            },
            {
              name: "Property Submit",
              href: "",
              hasChild: false,
            },
          ],
        },
        {
          name: "Agents",
          href: "",
          hasChild: false,
        },
        {
          name: "About",
          href: "",
          hasChild: false,
        },
        {
          name: "Blog",
          href: "",
          hasChild: false,
        },
        {
          name: "Contact",
          href: "",
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
    asset: () => window.asset,
  },
  methods: {
    responsiveBtn() {
      this.responsiveClass = !this.responsiveClass;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.main-menu,
a {
  text-decoration: none;
}
</style>