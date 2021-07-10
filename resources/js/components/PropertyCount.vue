<template>
  <div
    class="cs-item set-bg"
    :style="{
      backgroundImage: `url('${asset}assets/img/categories/${peropertyCount.img}')`,
    }"
  >
    <div class="cs-text">
      <h5>{{ peropertyCount.name }}</h5>
      <span>{{ peropertyCount.count }} property</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:['peropertyCount'],
  computed:{
   ...mapState(["asset"]),
  }
};
</script>

<style>
</style>