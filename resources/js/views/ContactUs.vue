<template>
 <div>
    <breadcrumb :breadcrumb="breadcrumb" />
    <section class="contact-form-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cf-content">
              <div class="cc-title">
                <h4>Contact form</h4>
                <p>
                  Duis voluptatum. Id vis consequat consetetur dissentiet,
                  ceteros commune perp <br />etua mei et. Simul viderer
                  facilisis egimus tractatos splendi.
                </p>
              </div>
              <form action="#" class="cc-form">
                <div class="group-input">
                  <input
                    type="text"
                    placeholder="Name"
                    v-model="contactusData.name"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    v-model="contactusData.email"
                  />
                  <input
                    type="text"
                    placeholder="Website"
                    v-model="contactusData.website"
                  />
                </div>
                <textarea
                  placeholder="Comment"
                  v-model="contactusData.comment"
                ></textarea>
                <button
                  type="button"
                  class="site-btn"
                  @click="contactus"
                  :disabled="contactUsLoading"
                >
                  Submit
                  <i class="fas fa-sync fa-spin" v-if="contactUsLoading"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <ul v-if="contactUsErrorLength" class="text-danger">
          <li v-for="error in contactUsError" :key="error">{{ error[0] }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import Skeleton from '../components/Skeleton';
import axios from "../store/axios";
import { Notify } from "notiflix";
export default {
  components: {
    Breadcrumb,
    Skeleton
  },
  data() {
    return {
      breadcrumb: {
        name: "Contact Us",
        img: "breadcrumb-contact-bg.jpg",
      },
      contactusData: {
        name: "",
        email: "",
        website: "",
        comment: "",
      },
      isLoading: false,
      errors: {},
    };
  },
  computed: {
    contactUsError: {
      get() {
        return this.errors;
      },
      set(newValue) {
        return (this.errors = newValue);
      },
    },
    contactUsLoading: {
      get() {
        return this.isLoading;
      },
      set(NewValue) {
        return (this.isLoading = NewValue);
      },
    },
    contactUsErrorLength() {
      return typeof this.contactUsError != "undefined"
        ? Object.keys(this.contactUsError).length
        : 0;
    },
  },
  methods: {
    async contactus() {
      this.contactUsLoading = true;
      await axios
        .post("api/contactus", this.contactusData)
        .then((res) => {
          if (res.data.success) {
            Notify.success(res.data.message);
            this.contactusData = {};
          } else this.contactUsError = res.data.errors;
          this.contactUsLoading = false;
        })
        .catch((err) => {
          Notify.warning("Something went wrong please try again!");
          this.contactUsLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.invalid {
  border-color: #dc3545 !important;
}
</style>>
