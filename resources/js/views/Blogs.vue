<template>
  <div>
    <breadcrumb :breadcrumb="breadcrumb" />
    <section class="blog-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-item-list">
              <blog
                v-for="(blog, index) in blogsData"
                :key="blog.id"
                :blog="blog"
                :index="index"
              />
              <div
                class="blog-pagination property-pagination"
                v-if="lastPage && currentPage"
              >
                <a
                  class="icon"
                  v-if="currentPage > 1"
                  @click="blogs(currentPage - 1), scrollToTop()"
                >
                  <i class="bi bi-arrow-left"></i>
                </a>
                <a
                  v-for="page in lastPage"
                  href="javascript:void(0);"
                  :class="page == currentPage ? 'active-page' : ''"
                  :key="page"
                  @click="
                    page == currentPage ? false : blogs(page), scrollToTop()
                  "
                  >{{ page }}</a
                >
                <a
                  href="javascript:void(0);"
                  class="icon"
                  v-if="currentPage != lastPage"
                  @click="blogs(currentPage + 1), scrollToTop()"
                >
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog-sidebar">
              <div class="follow-us">
                <div class="section-title sidebar-title-b">
                  <h6>Follow us</h6>
                </div>
                <div class="fu-links">
                  <social-menu
                    :class="social.class"
                    v-for="social in socials"
                    :social="social"
                    :key="social.icon"
                  />
                </div>
              </div>
              <div class="subscribe-form">
                <div class="section-title sidebar-title-b">
                  <h6>Subscribe</h6>
                </div>
                <p>Consectetur adipiscing elit, sed do eiusmod ut labore.</p>
                <form>
                  <input
                    type="text"
                    placeholder="Email"
                    v-model="newslatterEmail"
                  />
                  <button
                    type="button"
                    class="site-btn"
                    @click="newsLatter(newslatterEmail)"
                    :disabled="isNewslatteloading"
                  >
                    <i
                      class="fas fa-sync fa-spin"
                      v-if="isNewslatteloading"
                    ></i>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import SocialMenu from "../components/SocialMenu.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import axios from "../store/axios";
import Blog from "../components/Blog.vue";
import { Notify, Loading } from "notiflix";
export default {
  data() {
    return {
      breadcrumb: {
        name: "Blogs",
        img: "breadcrumb-3.jpg",
      },
      newslatterEmail: "",
      status: false,
    };
  },
  components: {
    Blog,
    SocialMenu,
    Breadcrumb,
  },
  computed: {
    ...mapState("Blog", [
      "blogsData",
      "isBlogFetch",
      "lastPage",
      "currentPage",
    ]),
    ...mapState(["asset", "socials"]),
    isNewslatteloading: {
      get() {
        return this.status;
      },
      set(value) {
        return (this.status = value);
      },
    },
  },
  methods: {
    ...mapActions(["scrollToTop"]),
    ...mapActions("Blog", ["blogs"]),
    async newsLatter() {
      this.isNewslatteloading = true;
      await axios
        .post("api/newslatter/subscribe", { email: this.newslatterEmail })
        .then((res) => {
          if (res.data.success) {
            Notify.success(res.data.message);
            this.newslatterEmail = "";
          } else {
            Notify.failure(res.data.errors.email[0]);
          }
          this.isNewslatteloading = false;
        })
        .catch((err) => {
          Notify.failure("Something went wrong!please try again.");
          this.isNewslatteloading = false;
        });
    },
  },
  mounted() {
    this.blogs(1);
  },
};
</script>

<style scoped>
.active-page {
  background: #00c89e;
  color: #ffffff;
}
</style>>
