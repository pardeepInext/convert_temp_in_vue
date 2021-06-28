<template>
    <Header/>
    <router-view />
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: "App",
  components:{
          Header
  },
  mounted(){
   
  }
};
</script>

<style>
</style>