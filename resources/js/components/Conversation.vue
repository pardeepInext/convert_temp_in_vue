<template>
  <li class="person" data-chat="person1" v-if="conversation">
    <div class="user">
      <img
        :src="
          profileImage(
            conversation[getUserInfo].provider_id,
            conversation[getUserInfo].proifie_image,
            conversation[getUserInfo].img
          )
        "
        alt="Retail Admin"
      />
      <span class="status busy"></span>
    </div>
    <p class="name-time">
      <span class="name">{{ conversation[getUserInfo].name }}</span>
    </p>
    <p
      class="name-time ms-1"
      :style="{ color: '#adb2b8' }"
      v-html="message(conversation.latest_message.message)"
    ></p>
    <span class="time float-end">{{ conversation.latest_message.time }}</span>
  </li>
</template>

<script>
export default {
  props: ["conversation"],
  data() {
    return {
      currentUserId: JSON.parse(localStorage.getItem("user")).id,
    };
  },
  computed: {
    getUserInfo() {
      return this.conversation.user_1 != this.currentUserId
        ? "user1_info"
        : "user2_info";
    },
  },
  methods: {
    profileImage(prover_id, proifie_image, img) {
      return typeof prover_id == "string" ? img : proifie_image;
    },
    message(message) {
      if (typeof message == "string") {
        return message.length < 80 ? message : `${message.substring(0, 80)}...`;
      } else {
        return `<i class="fas fa-paperclip"></i>`;
      }
    },
  },
};
</script>

<style>
</style>