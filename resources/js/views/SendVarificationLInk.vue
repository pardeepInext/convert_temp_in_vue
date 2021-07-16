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
        <h5>Reset Your Passwrod</h5>
      </div>
      <div class="p-3 px-4 py-4 border-bottom row">
        <div class="col-md-9">
          <p>
            Send link on Email on
            <span class="fw-bold">{{ getUser.email }}</span>
          </p>
        </div>
        <div class="col-md-3">
          <figure class="figure text-center">
            <img
              :src="getUser.proifie_image"
              class="figure-img img-fluid rounded"
              alt="..."
            />
            <figcaption class="figure-caption" v-if="getUser.role">
              <h4>{{ getUser.name }}</h4>
              {{ getUser.role.name }}
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="align-items-center mt-3 mb-3 d-flex justify-content-center">
          <router-link class="access-link" :to="{name:'forgotpassword'}">No longer have access to this?</router-link>
        <div class="d-flex">
          <button
            class="btn btn-danger btn-sm continue mx-1 not-you"
            @click="$router.push({name:'forgotpassword'})"
          >
            Not You
           </button>
          <button
            type="button"
            class="btn btn-danger btn-sm continue"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("ProfileEdit", ["user"]),
    ...mapGetters("ProfileEdit", ["getUser"]),
  },
  methods: {
    ...mapActions("ProfileEdit", ["confirmUser"]),
  },
  mounted() {
    this.confirmUser(this.$route.params.id);
  },
};
</script>

<style scoped>
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

.access-link {
  color: #6ca0d6;
  font-size: 13px;
  text-decoration: none;
}
.not-you{
    background-color:#e4e6eb;
    color:black
}
</style>>
