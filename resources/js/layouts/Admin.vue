<template>
  <div class="app">
    <Header />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title">{{ title }}</h1>
          <router-view v-slot="{ Component }">
            <transition name="scale" mode="out-in">
              <component :is="Component" :key="$route.path" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../components/admin/Header";
export default {
  data() {
    return {
      title: "",
    };
  },
  components: {
    Header,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.title = to.meta.title;
      },
    },
  },
};
</script>

<style scoped>
@import url("../../css/admin/admin.css");
.scale-enter-active,
.scale-leave-active {
  transition: all 0.8s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.dashboard-app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #f5f6fe;
  padding-top: 56px;
  overflow-x: hidden;
}
</style>
