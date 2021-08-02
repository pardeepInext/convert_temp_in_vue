<template>
  <div
    class="cs-item set-bg"
    :style="{
      backgroundImage: `url('${asset}assets/img/categories/${peropertyCount.img}')`,
    }"
  >
    <div class="cs-text" ref="counter">
      <h5>{{ peropertyCount.name }}</h5>
      <span>{{ counter }} property</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["peropertyCount"],
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    ...mapState(["asset"]),
  },
  methods: {
    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    animateCounter() {
      if (this.isInViewport(this.$refs.counter)) {
        let that = this;
        this.counter = 0;
        const target = Number(this.peropertyCount.count);
        setInterval(function () {
          if (that.counter < target) that.counter++;
        }, 40);
      } else {
        this.counter = 0;
      }
    },
  },
  mounted() {
    let that = this;
    document.addEventListener("scroll", that.animateCounter);
  },
  unmounted() {
    let that = this;
    document.removeEventListener("scroll", that.animateCounter);
  },
};
</script>

<style>
</style>