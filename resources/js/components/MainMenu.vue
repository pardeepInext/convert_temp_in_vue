<template>
  <li v-if="menu.hasChild">
    <a
      href="javascript:void(0);"
      :data-bs-toggle="(placement == 'mobile')? 'collapse': ''"
      :data-bs-target ="(placement == 'mobile')? '#mobile-menu': ''"
      class="main-menu"
      >{{ menu.name }}
      <ul
        class="dropdown"
        id="mobile-menu"
      >
        <li v-for="childMenu in menu.childMenus" :key="childMenu.name">
          <router-link
            class="main-menu"
            exact
            :to="{ path: childMenu.href }"
            >{{ childMenu.name }}</router-link
          >
        </li>
      </ul>
    </a>
  </li>

  <li v-else>
    <router-link
      tag="li"
      class="nav-link main-menu"
      :to="{ path: menu.href }"
      exact
    >
      {{ menu.name }}
    </router-link>
  </li>
</template>
<script>
export default {
  name: "MainMenu",
  props: ["menu", "placement"],
  data() {
    return {
      ismobileMenuClick: false,
      mobileMenu: this.ismobileMenuClick
        ? { display: "" }
        : { display: "block" },
    };
  },
  methods: {
    collapseMobileMenu() {
      if (this.placement == "mobile") {
        this.ismobileMenuClick = !this.ismobileMenuClick;
      }
    },
  },
};
</script>

<style scoped>
    .main-menu{
      text-decoration: none;
    }
</style>>
