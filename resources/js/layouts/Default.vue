<template>
  <Header />
   <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="isLoading? 'skeleton' : Component" :key="$route.path" />
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
         isLoading:false,
       }
  },
  components: {
    Header,
    Footer,
    Skeleton
  },
  computed:{
      //  isLoading:{
      //    get(){
      //      return this.isLoading
      //    },
      //    set(newValue){
      //      return this.isLoading = newValue;
      //    }
      //  }
  },
  mounted() {
    let _this = this;
    this.$router.beforeEach(function(){
        _this.isLoading = true;
        console.log("hello");
    });
    this.$router.afterEach(function(){
         _this.isLoading = false;
         console.log("Bye");
    });
  },
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
@import url("../../css/app.css");
</style>