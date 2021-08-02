<template>
  <div class="container mb-3">
    <!-- Content wrapper start -->
    <div class="content-wrapper">
      <!-- Row start -->
      <div class="row gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card m-0">
            <!-- Row start -->
            <div class="row no-gutters">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                <div class="users-container">
                  <div class="chat-search-box">
                    <div class="input-group">
                      <input class="form-control" placeholder="Search" />
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-info">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <ul class="users">
                    <conversation
                      v-for="conversation in conversations.data"
                      :key="conversation"
                      :conversation="conversation"
                      @click="getConversation(conversation.id)"
                    />
                  </ul>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                <div class="selected-user">
                  <!-- <span>To: <span class="name">Emily Russell</span></span> -->
                </div>
                <div class="chat-container" ref="chatContainer">
                  <ul class="chat-box chatContainerScroll" v-if="messages">
                    <message
                      v-for="message in messages"
                      :key="message.id"
                      :message="message"
                    />
                  </ul>
                  <span v-else class="text-center my-1"
                    >Select Conversation</span
                  >
                </div>
                <div class="mt-3 mb-3 row" v-if="messages">
                  <div class="col-md-9">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Type your message here..."
                      v-model="messageData.message"
                      @keyup="typing"
                    ></textarea>
                  </div>
                  <div class="col-md-3">
                    <span v-if="attachmentName != ''">{{
                      attachmentName
                    }}</span>
                    <span class="text-danger" v-if="error != ''">{{
                      error
                    }}</span>
                    <form @submit.prevent="submitMessage">
                      <input
                        type="file"
                        @change="getAttachment"
                        ref="attachmentInput"
                        class="d-none"
                        multiple
                      />
                      <button
                        class="btn btn-info m-1"
                        type="button"
                        @click="$refs.attachmentInput.click()"
                      >
                        <i class="fas fa-paperclip"></i>
                      </button>
                      <button class="btn btn-info" type="submit">
                        <i class="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- Row end -->
          </div>
        </div>
      </div>
      <!-- Row end -->
    </div>
    <!-- Content wrapper end -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Conversation from "../components/Conversation";
import Message from "../components/Message";
export default {
  components: { Conversation, Message },
  data() {
    return {
      currentUserId: JSON.parse(localStorage.getItem("user")).id,
      attachmentName: "",
      error: "",
      id: "",
      currentPage: 0,
      lastPage: 0,
      messageData: {
        message: "",
        attachment: {},
      },
    };
  },
  computed: {
    ...mapGetters("Chat", ["conversations", "messages", "fetchMessages"]),
    conversationId: {
      get() {
        return this.id;
      },
      set(newId) {
        return (this.id = newId);
      },
    },
    messages: {
      get() {
        return this.fetchMessages.reverse();
      },
      set(newMessage) {
        return this.fetchMessages.push(newMessage);
      },
    },
  },
  methods: {
    ...mapActions("Chat", ["fetchConversation", "fetchChat", "sendMessage"]),
    getAttachment(e) {
      this.attachmentName = e.target.files[0].name;
      this.messageData.attachment = e.target.files;
    },
    getConversation(convesationId) {
      this.conversationId = convesationId;
      this.fetchChat({ conversation_id: convesationId, page: 1 });
    },
    submitMessage() {
      this.error = "";
      if (this.messageData.message == "") {
        this.error = "blank message can't be send";
      }

      const formData = new FormData();
      formData.append("message", this.messageData.message);
      formData.append("attachment", this.messageData.attachment);
      formData.append("sender_id", this.currentUserId);
      formData.append("conversation_id", this.conversationId);
      this.sendMessage(formData);
    },
    profileImage(provider_id, proifie_image, img) {
      return typeof provider_id == "string" ? img : proifie_image;
    },
    typing() {
      const user = JSON.parse(localStorage.getItem("user"));
      const profile = this.profileImage(
        user.provider_id,
        user.proifie_image,
        user.img
      );
      Echo.channel("demo").whisper('typing',{profile:profile});
    },
    loadMoreMessage() {
      let messages = this.messages;
      if (messages.current_page != messages.last_page) {
        console.log(messages.current_page + 1);
        this.fetchChat({
          conversation_id: this.conversationId,
          page: messages.current_page + 1,
        });
      }
    },
  },

  mounted() {
    this.fetchConversation();
    let _this = this;
    /*  add scroll event for load older message */
    this.$refs.chatContainer.addEventListener("scroll", function () {
      if (_this.$refs.chatContainer.scrollTop == 0) _this.loadMoreMessage();
    });

    Echo.channel("demo").listen("MessageSent", function (e) {
      console.log(_this.messages);
      _this.messages = e.message;
      console.log(_this.messages);
    });

    Echo.channel("demo").listenForWhisper('typing', (e) => {
        console.log(e);
    });
  },
};
</script>

<style scoped>
@import url("../../css/chat.css");
</style>
