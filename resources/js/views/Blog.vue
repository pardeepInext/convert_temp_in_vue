<template>
  <div>
    <div id="blog">
      <div v-if="blog">
        <section
          class="blog-hero-section set-bg"
          :style="{ backgroundImage: `url('${blog.image}')` }"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="bh-text">
                  <h4>
                    {{ blog.heading }}
                  </h4>
                  <ul>
                    <li>
                      by <span>{{ blog.auther }}</span>
                    </li>
                    <li>{{ blog.blog_date }}</li>
                    <li v-if="blog.comments.length">
                      {{ blog.comments.length }} Comment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="blog-details-section spad">
          <div class="container">
            <p>{{ blog.content }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("Blog", ["blog", "isBlogFetch"]),
  },
  methods: {
    ...mapActions("Blog", ["fetchBlog"]),
  },
  mounted() {
    this.fetchBlog(this.$route.params.id);
  },
};
</script>

<style scoped>
/* .blog-hero-section {
  filter: blur(1px);
  -webkit-filter: blur(px);
} */
</style>