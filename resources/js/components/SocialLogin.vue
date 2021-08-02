<template>
  <button
    class="
      btn btn-danger btn-block
      continue
      facebook-button
      d-flex
      justify-content-center
      align-items-center
      my-1
      text-center
    "
    @click="socialLogin('facebook')"
    :disabled="isFacebookLogin"
  >
    <i class="fab fa-facebook ml-2"></i>
    <span class="ml-5 px-4">Continue with facebook</span>
    <i class="fas fa-circle-notch fa-spin" v-if="isFacebookLogin"></i>
  </button>
  <button
    class="
      btn btn-danger btn-block
      continue
      google-button
      d-flex
      justify-content-center
      align-items-center
      text-center
    "
    @click="socialLogin('google')"
    :disabled="isGoogleLogin"
  >
    <i class="fab fa-google ml-2"></i>
    <span class="ml-5 px-4">Continue with Google</span>
    <i class="fas fa-circle-notch fa-spin" v-if="isGoogleLogin"></i>
  </button>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("Auth", ["isSocialLogin","isGoogleLogin","isFacebookLogin"]),
  },
  methods: {
    ...mapActions("Auth", ["socialLogin"]),
  },
};
</script>

<style scoped>
.continue {
  height: 48px;
  font-size: 13px;
  background-color: #00c89e;
  border: none;
  width: 100%;
}

.facebook-button {
  background-color: #39559f;
}

.facebook-button:hover {
  background-color: #39559f;
}

.facebook:focus {
  color: #fff;
  background-color: #4285f4;
  border-color: #4285f4;
  box-shadow: none;
}

.google-button {
  background-color: #4285f4;
}

.google-button:hover {
  background-color: #4285f4;
}
</style>>
