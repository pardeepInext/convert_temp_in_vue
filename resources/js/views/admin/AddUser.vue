<template>
  <div class="app-card app-card-orders-table shadow-sm mb-5">
    <div class="app-card-body">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12 auth-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-auth-body mx-auto">
              <div class="auth-form-container text-start mx-auto">
                <form
                  class="auth-form auth-signup-form"
                  @submit.prevent="addUser(user)"
                >
                  <div class="email mb-3">
                    <label class="sr-only" for="signup-email">Your Name</label>
                    <input
                      id="signup-name"
                      name="signup-name"
                      type="text"
                      class="form-control signup-name"
                      placeholder="Full name"
                      v-model="user.name"
                    />
                    <span
                      class="text-danger fw-bold"
                      v-if="addingUserError.name"
                      >{{ addingUserError.name[0] }}</span
                    >
                  </div>
                  <div class="email mb-3">
                    <label class="sr-only" for="signup-email">Your Email</label>
                    <input
                      id="signup-email"
                      name="signup-email"
                      type="text"
                      class="form-control signup-email"
                      placeholder="Email"
                      v-model="user.email"
                    />
                    <span
                      class="text-danger fw-bold"
                      v-if="addingUserError.email"
                      >{{ addingUserError.email[0] }}</span
                    >
                  </div>
                  <div class="password mb-3">
                    <label class="sr-only" for="signup-password"
                      >Password</label
                    >
                    <input
                      id="signup-password"
                      name="signup-password"
                      type="password"
                      class="form-control signup-password"
                      placeholder="Create a password"
                      v-model="user.password"
                    />
                    <span
                      class="text-danger fw-bold"
                      v-if="addingUserError.password"
                      >{{ addingUserError.password[0] }}</span
                    >
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-success w-100 theme-btn mx-auto"
                      :disabled="isUserAdding"
                    >
                      <i class="fas fa-circle-notch fa-spin" v-if="isUserAdding"></i>
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("Admin", ["isUserAdding", "addingUserError"]),
  },
  methods: {
    ...mapActions("Admin", ["addUser"]),
    ...mapMutations("Admin", ["AddingUserError"]),
  },
  mounted() {
    this.AddingUserError({});
  },
};
</script>

<style scoped>
.app-btn-secondary {
  background: #fff;
  color: #5d6778;
  border: 1px solid #bcc1cb;
}

textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
  border-color: #009e7d;
  box-shadow: none !important;
  outline: 0 none;
}
</style>>
