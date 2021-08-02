<template>
  <div class="app">
    <Header />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" :key="$route.path" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
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

.dashboard-app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #f5f6fe;
  padding-top: 56px;
  overflow-x: hidden;
}
</style>
