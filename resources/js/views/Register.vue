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
        <h5>Sign Up</h5>
      </div>
      <div class="p-3 px-4 py-4 border-bottom">
        <form @submit.prevent="register(registerCred)">
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Email"
            v-model="registerCred.email"
          />
          <span class="text-danger fw-bold" v-if="registerError.email">{{ registerError.email[0] }}</span>
          <input
            type="text"
            class="form-control mb-2"
            placeholder="name"
            v-model="registerCred.name"
          />
          <span class="text-danger fw-bold" v-if="registerError.name">{{ registerError.name[0] }}</span>
          <div class="form">
            <input
              :type="isPasswordShow? 'text':'password'"
              class="form-control"
              placeholder="Password"
              v-model="registerCred.password"
            />
            <a href="javascript:void(0)" @click="passwordHideShow">{{ isPasswordShow? 'Hide':'Show' }}</a>
          </div>
          <span class="text-danger fw-bold" v-if="registerError.password">{{ registerError.password[0] }}</span>
          <button type="submit" class="btn btn-danger btn-block continue" :disabled="isRegister">
            Continue
              <i class="fas fa-circle-notch fa-spin" v-if="isRegister"></i>
          </button>
        </form>
        <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
          <span class="line"></span> <small class="px-2 line-text">OR</small>
          <span class="line"></span>
        </div>
          <social-login />
      </div>
      <div
        class="
          p-3
          d-flex
          flex-row
          justify-content-center
          align-items-center
          member
        "
      >
        <span>Already member? </span>
         <router-link class="text-decoration-none ml-2" :to="{ name: 'login' }"
          >SIGNIN</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SocialLogin from '../components/SocialLogin.vue';
export default {
  data() {
    return {
      registerCred: {
        name: "",
        email: "",
        password: "",
      },
      isPasswordShow:false,
    };
  },
  components:{
         SocialLogin
  },
  computed:{
      ...mapState('Auth',['registerError','isRegister'])
  },
  methods: {
    ...mapActions("Auth", ["socialLogin","register"]),
    passwordHideShow(){
      this.isPasswordShow = !this.isPasswordShow
    }
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