<template>
     <hero-slider :sliders="slider"/>
</template>

<script>
import HeroSlider from '../components/HeroSlider.vue'
export default {
   data(){
      return{
         slider:[
            {
               id:1,
               img:'/hero/hero-1.jpg',
               name:'Balaji Symphony',
               type:'rent',
               price:'65'
            },
            {
               id:2,
               img:'/hero/hero-2.jpg',
               name:'Balaji Symphony 2',
               type:'Buy',
               price:'45'
            },
            {
               id:3,
               img:'/hero/hero-3.jpg',
               name:'Balaji Symphony 3',
               type:'rent',
               price:'65'
            }
         ]
      }
   },
   components:{
      HeroSlider
   }

}
</script>

<style>

</style>