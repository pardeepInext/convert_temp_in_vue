<template>
  <a :href="social.href"><i :class="social.icon"></i></a>
</template>

<script>
export default {
   name: "SocialMenu",
   props:['social']
}
</script>

<style>

</style>