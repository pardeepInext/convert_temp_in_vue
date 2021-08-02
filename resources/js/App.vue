<template>
  <component :is="layout" />
</template>
<script>
import Admin from "./layouts/Admin";
import Default from "./layouts/Default";
import { Notify } from "notiflix";
import { mapState } from 'vuex';
export default {
  name: "App",
  components: {
    Admin,
    Default,
  },
  data() {
    return {
      layout: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Aler";
        this.layout = to.meta.layout;
      },
    }
  },
  mounted() {
    Notify.init({
      success: {
        background: "#00C89E",
      },
    });
  },
};
</script>
<style>
</style>
