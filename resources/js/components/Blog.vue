<template>
  <div class="blog-item" :class="index == 0 ? 'large-blog' : ''">
    <div :class="index == 0 ? 'bi-pic' : 'bi-pic-sm'">
      <img :src="blog.image" :alt="blog.heading" />
    </div>
    <div class="bi-text">
      <h5>
        <router-link :to="{ name: 'blog', params: { id: blog.id } }">{{
          blog.heading
        }}</router-link>
      </h5>
      <ul>
        <li>
          by <span>{{ blog.auther }}</span>
        </li>
        <li>{{ blog.blog_date }}</li>
        <li v-if="blog.comments.length">{{ blog.comments.length }} Comment</li>
      </ul>
      <p>
        {{ blog.content.substring(0, 100) }}
        {{ blog.content.length > 100 ? "..." : "" }}
      </p>
      <router-link
        class="read-more"
        :to="{ name: 'blog', params: { id: blog.id } }"
        >Read more <span class="arrow_right"></span
      ></router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["blog", "index"],
  computed: {
    ...mapState(["asset"]),
    //blogDate: () =>
  },
};
</script>

<style scoped>
@media (min-width: 399px) {
  .blog-item .bi-pic-sm img {
    height: 220px;
    width: 330px;
    object-fit: cover;
  }
}
</style>>
