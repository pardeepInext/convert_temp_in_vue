<template>
  <Header />
   <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" id="content" />
    </transition>
  </router-view>
  <Footer />
</template>
<script>
import Header from "../components/Header";
import Skeleton from '../components/Skeleton';
import Footer from "../components/Footer";
export default {
  data(){
       return {
         loading:false,
       }
  },
  components: {
    Header,
    Footer,
    Skeleton
  },
  computed:{
       isLoading:{
         get(){
           return this.loading
         },
         set(newValue){
           return this.loading = newValue;
         }
       }
  },
  methods:{

  },
  mounted() {
    let _this = this;
    this.$router.beforeEach(function(){
        _this.isLoading = true;
    });
    this.$router.afterEach(function(){
         _this.isLoading = false;
    });
  },
};
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@import url("../../css/app.css");
</style>