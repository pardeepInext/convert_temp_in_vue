<template>
  <center>
    <h1>Not Found!</h1>
    <p>
      <router-link :to="{name:'home'}" class="home-link">Go home?</router-link>
    </p>
  </center>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
center {
  margin: 15vw;
}

h1 {
  color: var(--border);
  font-size: 2em;
}

.home-link {
  color: #6ca0d6;
  font-size: 13px;
  text-decoration: none;
}
</style>