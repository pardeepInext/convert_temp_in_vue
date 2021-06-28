<template>
  <li v-if="menu.hasChild">
    <a href="javascript:void(0);"
      >{{ menu.name }}
      <ul class="dropdown">
        <router-link
          v-for="childMenu in menu.childMenus"
          class="main-menu"
          active-class="active"
          exact
          :key="childMenu.name"
          :to="{ path: menu.href }"
          tag="li"
          >{{ childMenu.name }}</router-link
        >
      </ul>
    </a>
  </li>

  <li v-else><router-link
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
  props: ["menu"],
};
</script>

<style>
</style>