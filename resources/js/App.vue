<template>
  <Header />
  <breadcrumb  v-if="breadcrumb" :breadcrumb="breadcrumb" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <Footer />
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Breadcrumb from './components/Breadcrumb.vue';
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Breadcrumb,
  },
  data() {
    return {
      isViewLoading: false,
      breadcrumb:{},
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Aler";
        this.breadcrumb = to.meta.breadcrumb; 
      },
    },
  },
  mounted() {},
};
</script>
<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
