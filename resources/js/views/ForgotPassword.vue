<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card">
      <div
        class="
          p-3
          border-bottom
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <h5>Forgot Password</h5>
      </div>
      <div class="p-3 px-4 py-4 border-bottom">
        <span class="text-danger fw-bold" v-if="forgotError">{{ forgotError }}</span>
        <input type="text" class="form-control mb-2" placeholder="Please enter your Email" v-model="nameEmail" />
        <button
          type="button"
          class="btn btn-danger btn-block continue"
          :disabled="isforgotPassword"
          @click="forgotPassword({userInput:nameEmail})"
        >
          Continue
          <i class="fas fa-circle-notch fa-spin" v-if="isforgotPassword"></i>
        </button>
      </div>
        <span class="line my-2"></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
       nameEmail:'',

    };
  },
  computed: {
    ...mapState("ProfileEdit", ["isforgotPassword","forgotError"]),
  },
  methods: {
    ...mapActions("ProfileEdit", ["forgotPassword"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.container {
  height: 100%;
}

.card {
  width: 400px;
  border: none;
}

.form-control {
  border: 2px solid #bdc1d2;
  font-size: 13px;
  height: 48px;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #00c89e;
  outline: 0;
  box-shadow: none;
}

.form {
  position: relative;
  margin-bottom: 25px;
}

.form a {
  position: absolute;
  right: 8px;
  bottom: 10px;
  color: #6ca0d6;
  font-size: 13px;
  text-decoration: none;
  z-index: 10;
  background-color: #fff;
  padding: 5px;
}

.continue {
  height: 48px;
  font-size: 13px;
  background-color: #00c89e;
  border: none;
  width: 100%;
}

.line-text {
  color: #cecece;
}

.line {
  background-color: #eeeff6;
  width: 166px;
  height: 2px;
}

.member a {
  color: #00c89e;
  font-size: 14px;
}

.member span {
  font-size: 13px;
  font-weight: 400;
  color: #6ca0d6;
}
</style>