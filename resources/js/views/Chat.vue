<template>
  <div class="container">
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
                      @click="
                        fetchChat({
                          user_1: conversation.user_1,
                          user_2: conversation.user_2,
                        })
                      "
                    />
                  </ul>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                <div class="selected-user">
                  <!-- <span>To: <span class="name">Emily Russell</span></span> -->
                </div>
                <div class="chat-container">
                  <ul class="chat-box chatContainerScroll" v-if="messages">
                    <message
                      v-for="message in messages.data"
                      :key="message.id"
                      :message="message"
                    />
                  </ul>
                  <span v-else class="text-center my-1"
                    >Select Conversation</span
                  >
                </div>
                <div class="mt-3 mb-3 row">
                  <div class="col-md-9">
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Type your message here..."
                      v-model="messageData.message"
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
      messageData: {
        message: "",
        attachment: {},
      },
    };
  },
  computed: {
    ...mapGetters("Chat", ["conversations", "messages"]),
  },
  methods: {
    ...mapActions("Chat", ["fetchConversation", "fetchChat","sendMessage"]),
    getAttachment(e) {
      this.attachmentName = e.target.files[0].name;
      this.messageData.attachment = e.target.files;
    },
    submitMessage() {
      this.error = "";
      if (
        this.messageData.message == ""
      ) {
        this.error = "blank message can't be send";
      }

      const formData = new FormData();
      formData.append('')
      //this.submitMessage()
       
    },
  },
  mounted() {
    this.fetchConversation();
  },
};
</script>

<style scoped>
@import url("../../css/chat.css");
</style>
