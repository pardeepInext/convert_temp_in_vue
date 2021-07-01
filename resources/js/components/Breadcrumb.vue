<template>
  <section
    class="breadcrumb-section spad set-bg"
    :style="{ backgroundImage: `url('${asset}assets/img/${breadcrumb.img}` }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text">
            <h4>{{ breadcrumb.name }}</h4>
            <div class="bt-option">
              <router-link :to="{ name: 'home' }">
                  <i class="fa fa-home"></i> Home
                </router-link>
                <i class="bi bi-caret-right-fill"></i>
              <span>{{ breadcrumb.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["breadcrumb"],
  computed: {
    ...mapState(["asset"]),
  },
};
</script>

<style>
</style>