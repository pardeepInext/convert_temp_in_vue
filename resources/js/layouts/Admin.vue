<template class="app">
  <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
</template>

<script>
import Header from "../components/admin/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
@import url("../../css/admin/portal.css");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
