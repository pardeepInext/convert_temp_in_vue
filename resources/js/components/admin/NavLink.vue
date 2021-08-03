<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="{name:menu.routeName}"  active-class="active"
          exact>
      <span class="nav-icon">
        <i :class="menu.iconClass"></i>
      </span>
      <span class="nav-link-text">{{ menu.name }}</span>
    </router-link>
  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["menu"],
  computed: {
    ...mapState(["asset"]),
  },
};
</script>

<style scoped>
.nav-icon {
  font-size: 23px;
}
</style>