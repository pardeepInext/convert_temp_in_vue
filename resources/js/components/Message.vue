<template>
  <li :class="!isSenderCurrentUser ? 'chat-left' : 'chat-right'">
    <div class="chat-avatar" v-if="!isSenderCurrentUser">
      <img
        :src="
          profileImage(
            message.senderinfo.provider_id,
            message.senderinfo.proifie_image,
            message.senderinfo.img
          )
        "
        alt="Retail Admin"
      />
      <!-- <div class="chat-name">{{ message.senderinfo.name }}</div> -->
    </div>
    <div class="chat-hour" v-if="isSenderCurrentUser">
      {{ message.time }} <span class="fa fa-check-circle"></span>
    </div>
    <div class="chat-text">
      {{ typeof message.message != "null" ? message.message : "" }}
      <message-attachment
        v-if="message.attachment"
        v-for="attachment in message.attachment"
        :key="attachment.id"
        :attachment="attachment"
      />
    </div>
    <div class="chat-hour" v-if="!isSenderCurrentUser">
      {{ message.time }} <span class="fa fa-check-circle"></span>
    </div>
  </li>
</template>

<script>
import MessageAttachment from "./MessageAttachment";
export default {
  props: ["message"],
  components: {
    MessageAttachment,
  },
  data() {
    return {
      currentUserId: JSON.parse(localStorage.getItem("user")).id,
    };
  },
  computed: {
    isSenderCurrentUser() {
      return this.message.senderinfo.id == this.currentUserId ? true : false;
    },
  },
  methods: {
    getUserInfo() {
      return this.conversation.user_1 != this.currentUserId
        ? "user1_info"
        : "user2_info";
    },
    profileImage(provider_id, proifie_image, img) {
       return typeof provider_id == "string" ? img : proifie_image;
    },
  },
  mounted(){
    
  }
};
</script>

<style>
</style>