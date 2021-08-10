(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Conversation.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Conversation.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["conversation"],
  data: function data() {
    return {
      currentUserId: JSON.parse(localStorage.getItem("user")).id
    };
  },
  computed: {
    getUserInfo: function getUserInfo() {
      return this.conversation.user_1 != this.currentUserId ? "user1_info" : "user2_info";
    }
  },
  methods: {
    profileImage: function profileImage(prover_id, proifie_image, img) {
      return typeof prover_id == "string" ? img : proifie_image;
    },
    message: function message(_message) {
      if (typeof _message == "string") {
        return _message.length < 80 ? _message : "".concat(_message.substring(0, 80), "...");
      } else {
        return "<i class=\"fas fa-paperclip\"></i>";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Message.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Message.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageAttachment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageAttachment */ "./resources/js/components/MessageAttachment.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["message"],
  components: {
    MessageAttachment: _MessageAttachment__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      currentUserId: JSON.parse(localStorage.getItem("user")).id
    };
  },
  computed: {
    isSenderCurrentUser: function isSenderCurrentUser() {
      return this.message.senderinfo.id == this.currentUserId ? true : false;
    }
  },
  methods: {
    getUserInfo: function getUserInfo() {
      return this.conversation.user_1 != this.currentUserId ? "user1_info" : "user2_info";
    },
    profileImage: function profileImage(provider_id, proifie_image, img) {
      return typeof provider_id == "string" ? img : proifie_image;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MessageAttachment.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MessageAttachment.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["attachment"],
  computed: {
    attachmentType: function attachmentType() {
      return this.attachment.attachement_type.split("/")[0];
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _components_Conversation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Conversation */ "./resources/js/components/Conversation.vue");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Message */ "./resources/js/components/Message.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Conversation: _components_Conversation__WEBPACK_IMPORTED_MODULE_0__.default,
    Message: _components_Message__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      currentUserId: JSON.parse(localStorage.getItem("user")).id,
      attachmentName: "",
      error: "",
      id: "",
      test: "",
      currentPage: 0,
      lastPage: 0,
      messageSent: {
        text: "",
        attachment: {}
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)("Chat", ["conversations", "messages", "fetchMessages", "isConversationLoading", "isChatLoading"])), {}, {
    conversationId: {
      get: function get() {
        return this.id;
      },
      set: function set(newId) {
        return this.id = newId;
      }
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("Chat", ["fetchConversation", "fetchChat", "sendMessage"])), {}, {
    getAttachment: function getAttachment(e) {
      this.attachmentName = e.target.files[0].name;
      this.messageSent.attachment = e.target.files;
    },
    getConversation: function getConversation(convesationId) {
      this.conversationId = convesationId;
      this.fetchChat({
        conversation_id: convesationId,
        page: 1
      });
    },
    submitMessage: function submitMessage() {
      this.error = "";

      if (this.messageSent.text == "") {
        this.error = "blank message can't be send";
      }

      var formData = new FormData();
      formData.append("message", this.messageSent.text);
      formData.append("attachment", this.messageSent.attachment);
      formData.append("sender_id", this.currentUserId);
      formData.append("conversation_id", this.conversationId);
      this.sendMessage(formData);
    },
    profileImage: function profileImage(provider_id, proifie_image, img) {
      return typeof provider_id == "string" ? img : proifie_image;
    },
    typing: function typing() {
      var user = JSON.parse(localStorage.getItem("user"));
      var profile = this.profileImage(user.provider_id, user.proifie_image, user.img);
      Echo.channel("demo").whisper("typing", {
        profile: profile
      });
    },
    loadMoreMessage: function loadMoreMessage() {
      var messages = this.messages;

      if (messages.current_page != messages.last_page) {
        console.log(messages.current_page + 1);
        this.fetchChat({
          conversation_id: this.conversationId,
          page: messages.current_page + 1
        });
      }
    }
  }),
  mounted: function mounted() {
    this.fetchConversation();

    var _this = this;
    /*  add scroll event for load older message */


    this.$refs.chatContainer.addEventListener("scroll", function () {
      if (_this.$refs.chatContainer.scrollTop == 0) _this.loadMoreMessage();
    });
    Echo["private"]("conversation.".concat(this.conversationId)).listen("MessageSent", function (e) {
      console.log(e.message); // _this.fetchMessages.unshift(e.message);
    }); // Echo.channel("demo").listenForWhisper("typing", (e) => {
    //   console.log(e);
    // });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Conversation.vue?vue&type=template&id=63f956ee":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Conversation.vue?vue&type=template&id=63f956ee ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "person",
  "data-chat": "person1"
};
var _hoisted_2 = {
  "class": "user"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "status busy"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "name-time"
};
var _hoisted_5 = {
  "class": "name"
};
var _hoisted_6 = {
  key: 1,
  "class": "time float-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.conversation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $options.profileImage($props.conversation[$options.getUserInfo].provider_id, $props.conversation[$options.getUserInfo].proifie_image, $props.conversation[$options.getUserInfo].img),
    alt: "Retail Admin"
  }, null, 8
  /* PROPS */
  , ["src"]), _hoisted_3]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.conversation[$options.getUserInfo].name), 1
  /* TEXT */
  )]), $props.conversation.latest_message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", {
    key: 0,
    "class": "name-time ms-1",
    style: {
      color: '#adb2b8'
    },
    innerHTML: $options.message($props.conversation.latest_message.message)
  }, null, 8
  /* PROPS */
  , ["innerHTML"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.conversation.latest_message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.conversation.latest_message.time), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Message.vue?vue&type=template&id=b91a6428":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Message.vue?vue&type=template&id=b91a6428 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "chat-avatar"
};
var _hoisted_2 = {
  key: 1,
  "class": "chat-hour"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "fa fa-check-circle"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "chat-text"
};
var _hoisted_5 = {
  key: 2,
  "class": "chat-hour"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "fa fa-check-circle"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_message_attachment = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("message-attachment");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
    "class": !$options.isSenderCurrentUser ? 'chat-left' : 'chat-right'
  }, [!$options.isSenderCurrentUser ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    src: $options.profileImage($props.message.senderinfo.provider_id, $props.message.senderinfo.proifie_image, $props.message.senderinfo.img),
    alt: "Retail Admin"
  }, null, 8
  /* PROPS */
  , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"chat-name\">{{ message.senderinfo.name }}</div> ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.isSenderCurrentUser ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.time) + " ", 1
  /* TEXT */
  ), _hoisted_3])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(typeof $props.message.message != "null" ? $props.message.message : "") + " ", 1
  /* TEXT */
  ), $props.message.attachment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.message.attachment, function (attachment) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_message_attachment, {
      key: attachment.id,
      attachment: attachment
    }, null, 8
    /* PROPS */
    , ["attachment"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), !$options.isSenderCurrentUser ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.time) + " ", 1
  /* TEXT */
  ), _hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MessageAttachment.vue?vue&type=template&id=03a2dea2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MessageAttachment.vue?vue&type=template&id=03a2dea2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 1
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-paperclip"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("a", {
    href: $props.attachment.attachment_path,
    download: ""
  }, [$options.attachmentType == 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("img", {
    key: 0,
    src: $props.attachment.attachment_path,
    alt: ""
  }, null, 8
  /* PROPS */
  , ["src"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.attachment.attachment) + " ", 1
  /* TEXT */
  ), _hoisted_2]))], 8
  /* PROPS */
  , ["href"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-40c106f7");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-40c106f7");

var _hoisted_1 = {
  "class": "container mb-3"
};
var _hoisted_2 = {
  "class": "content-wrapper"
};
var _hoisted_3 = {
  "class": "row gutters"
};
var _hoisted_4 = {
  "class": "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
};
var _hoisted_5 = {
  "class": "card m-0"
};
var _hoisted_6 = {
  "class": "row no-gutters"
};
var _hoisted_7 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3"
};
var _hoisted_8 = {
  "class": "users-container"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"chat-search-box\" data-v-40c106f7><div class=\"input-group\" data-v-40c106f7><input class=\"form-control\" placeholder=\"Search\" data-v-40c106f7><div class=\"input-group-btn\" data-v-40c106f7><button type=\"button\" class=\"btn btn-info\" data-v-40c106f7><i class=\"fa fa-search\" data-v-40c106f7></i></button></div></div></div>", 1);

var _hoisted_10 = {
  key: 0,
  "class": "text-center"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-spinner fa-pulse"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Loading... ");

var _hoisted_13 = {
  key: 1,
  "class": "users"
};
var _hoisted_14 = {
  "class": "col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "selected-user"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span>To: <span class=\"name\">Emily Russell</span></span> ")], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "chat-container",
  ref: "chatContainer"
};
var _hoisted_17 = {
  key: 0,
  "class": "chat-box chatContainerScroll"
};
var _hoisted_18 = {
  key: 1,
  "class": "text-center my-1"
};
var _hoisted_19 = {
  "class": "mt-3 mb-3 row"
};
var _hoisted_20 = {
  "class": "col-md-9"
};
var _hoisted_21 = {
  "class": "col-md-3"
};
var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = {
  key: 1,
  "class": "text-danger"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-paperclip"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = {
  key: 0,
  "class": "btn btn-info",
  type: "submit"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-paper-plane"
}, null, -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_conversation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("conversation");

  var _component_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("message");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content wrapper start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Row start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Row start "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, _ctx.isConversationLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_10, [_hoisted_11, _hoisted_12])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.conversations.data, function (conversation) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_conversation, {
      key: conversation,
      conversation: conversation,
      onClick: function onClick($event) {
        return $options.getConversation(conversation.id);
      }
    }, null, 8
    /* PROPS */
    , ["conversation", "onClick"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [_ctx.messages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_17, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.fetchMessages.reverse(), function (message) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_message, {
      key: message.id,
      message: message
    }, null, 8
    /* PROPS */
    , ["message"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_18, "Select Conversation"))], 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
    "class": "form-control",
    rows: "3",
    placeholder: "Type your message here...",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.messageSent.text = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.messageSent.text]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [$data.attachmentName != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.attachmentName), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.error != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.error), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submitMessage && $options.submitMessage.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "file",
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.getAttachment && $options.getAttachment.apply($options, arguments);
    }),
    ref: "attachmentInput",
    "class": "d-none",
    multiple: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "btn btn-info m-1",
    type: "button",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$refs.attachmentInput.click();
    })
  }, [_hoisted_24]), _ctx.messages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", _hoisted_25, [_hoisted_26])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Row end ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Row end ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Content wrapper end ")]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../css/chat.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/css/chat.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_chat_css__WEBPACK_IMPORTED_MODULE_1__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/css/chat.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/css/chat.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{margin-top:20px;}\n/*************** 1.Variables ***************/\n\n\n/* ------------------ Color Pallet ------------------ */\n\n\n/*************** 2.Mixins ***************/\n\n\n/************************************************\n    ************************************************\n\t\t\t\t\t\t\t\t\t\tSearch Box\n\t************************************************\n************************************************/\n\n.chat-search-box {\n    -webkit-border-radius: 3px 0 0 0;\n    -moz-border-radius: 3px 0 0 0;\n    border-radius: 3px 0 0 0;\n    padding: .75rem 1rem;\n}\n\n.chat-search-box .input-group .form-control {\n    -webkit-border-radius: 2px 0 0 2px;\n    -moz-border-radius: 2px 0 0 2px;\n    border-radius: 2px 0 0 2px;\n    border-right: 0;\n}\n\n.chat-search-box .input-group .form-control:focus {\n    border-right: 0;\n}\n\n.form-control:focus,.btn-info:focus{\n    border-color: #00c89e;\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none !important;\n}\n\n.btn-info{\n    background-color:#00c89e;\n    border-color: #00c89e;\n    color:white;\n}\n\n.btn-info:hover,.btn-info:focus{\n    background-color: #0bb38f;\n    border-color: #00c89e;\n    color: #fff;\n}\n\n.chat-search-box .input-group .input-group-btn .btn {\n    -webkit-border-radius: 0 2px 2px 0;\n    -moz-border-radius: 0 2px 2px 0;\n    border-radius: 0 2px 2px 0;\n    margin: 0;\n}\n\n.chat-search-box .input-group .input-group-btn .btn i {\n    font-size: 1.2rem;\n    line-height: 100%;\n    vertical-align: middle;\n}\n\n@media (max-width: 767px) {\n    .chat-search-box {\n        display: none;\n    }\n}\n\n\n/************************************************\n\t************************************************\n\t\t\t\t\t\t\t\t\tUsers Container\n\t************************************************\n************************************************/\n\n.users-container {\n    position: relative;\n    padding: 1rem 0;\n    border-right: 1px solid #e6ecf3;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n\n/************************************************\n\t************************************************\n\t\t\t\t\t\t\t\t\t\t\tUsers\n\t************************************************\n************************************************/\n\n.users {\n    padding: 0;\n}\n\n.users .person {\n    position: relative;\n    width: 100%;\n    padding: 10px 1rem;\n    cursor: pointer;\n    border-bottom: 1px solid #f0f4f8;\n}\n\n.users .person:hover {\n    background-color: #ffffff;\n    /* Fallback Color */\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#e9eff5), to(#ffffff));\n    /* Saf4+, Chrome */\n    background-image: -webkit-linear-gradient(right, #e9eff5, #ffffff);\n    /* Chrome 10+, Saf5.1+, iOS 5+ */\n    background-image: -moz-linear-gradient(right, #e9eff5, #ffffff);\n    /* FF3.6 */\n    background-image: -ms-linear-gradient(right, #e9eff5, #ffffff);\n    /* IE10 */\n    background-image: -o-linear-gradient(right, #e9eff5, #ffffff);\n    /* Opera 11.10+ */\n    background-image: linear-gradient(right, #e9eff5, #ffffff);\n}\n\n.users .person.active-user {\n    background-color: #ffffff;\n    /* Fallback Color */\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#f7f9fb), to(#ffffff));\n    /* Saf4+, Chrome */\n    background-image: -webkit-linear-gradient(right, #f7f9fb, #ffffff);\n    /* Chrome 10+, Saf5.1+, iOS 5+ */\n    background-image: -moz-linear-gradient(right, #f7f9fb, #ffffff);\n    /* FF3.6 */\n    background-image: -ms-linear-gradient(right, #f7f9fb, #ffffff);\n    /* IE10 */\n    background-image: -o-linear-gradient(right, #f7f9fb, #ffffff);\n    /* Opera 11.10+ */\n    background-image: linear-gradient(right, #f7f9fb, #ffffff);\n}\n\n.users .person:last-child {\n    border-bottom: 0;\n}\n\n.users .person .user {\n    display: inline-block;\n    position: relative;\n    margin-right: 10px;\n}\n\n.users .person .user img {\n    width: 48px;\n    height: 48px;\n    -webkit-border-radius: 50px;\n    -moz-border-radius: 50px;\n    border-radius: 50px;\n}\n\n.users .person .user .status {\n    width: 10px;\n    height: 10px;\n    -webkit-border-radius: 100px;\n    -moz-border-radius: 100px;\n    border-radius: 100px;\n    background: #e6ecf3;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n\n.users .person .user .status.online {\n    background: #9ec94a;\n}\n\n.users .person .user .status.offline {\n    background: #c4d2e2;\n}\n\n.users .person .user .status.away {\n    background: #f9be52;\n}\n\n.users .person .user .status.busy {\n    background: #fd7274;\n}\n\n.users .person p.name-time {\n    font-weight: 600;\n    font-size: .85rem;\n    display: inline-block;\n}\n\n.users .person .time {\n    font-weight: 400;\n    font-size: .7rem;\n    text-align: right;\n    color: #8796af;\n}\n\n@media (max-width: 767px) {\n    .users .person .user img {\n        width: 30px;\n        height: 30px;\n    }\n    .users .person p.name-time {\n        display: none;\n    }\n    .users .person p.name-time .time {\n        display: none;\n    }\n}\n\n\n/************************************************\n\t************************************************\n\t\t\t\t\t\t\t\t\tChat right side\n\t************************************************\n************************************************/\n\n.selected-user {\n    width: 100%;\n    padding: 0 15px;\n    min-height: 64px;\n    line-height: 64px;\n    border-bottom: 1px solid #e6ecf3;\n    -webkit-border-radius: 0 3px 0 0;\n    -moz-border-radius: 0 3px 0 0;\n    border-radius: 0 3px 0 0;\n}\n\n.selected-user span {\n    line-height: 100%;\n}\n\n.selected-user span.name {\n    font-weight: 700;\n}\n\n.chat-container {\n    position: relative;\n    padding: 1rem;\n    height: 100vh;\n    overflow-y:scroll;\n}\n\n.chat-container li.chat-left,\n.chat-container li.chat-right {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    margin-bottom: 40px;\n}\n\n.chat-container li img {\n    width: 48px;\n    height: 48px;\n    -webkit-border-radius: 30px;\n    -moz-border-radius: 30px;\n    border-radius: 30px;\n}\n\n.chat-container li .chat-avatar {\n    margin-right: 20px;\n}\n\n.chat-container li.chat-right {\n    justify-content: flex-end;\n}\n\n.chat-container li.chat-right > .chat-avatar {\n    margin-left: 20px;\n    margin-right: 0;\n}\n\n.chat-container li .chat-name {\n    font-size: .75rem;\n    color: #999999;\n    text-align: center;\n}\n\n.chat-container li .chat-text {\n    padding: .4rem 1rem;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    border-radius: 4px;\n    background: #ffffff;\n    font-weight: 300;\n    line-height: 150%;\n    position: relative;\n}\n\n.chat-container li .chat-text:before {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 10px;\n    left: -20px;\n    border: 10px solid;\n    border-color: transparent #ffffff transparent transparent;\n}\n\n.chat-container li.chat-right > .chat-text {\n    text-align: right;\n}\n\n.chat-container li.chat-right > .chat-text:before {\n    right: -20px;\n    border-color: transparent transparent transparent #ffffff;\n    left: inherit;\n}\n\n.chat-container li .chat-hour {\n    padding: 0;\n    margin-bottom: 10px;\n    font-size: .75rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin: 0 0 0 15px;\n}\n\n.chat-container li .chat-hour > span {\n    font-size: 16px;\n    color: #9ec94a;\n}\n\n.chat-container li.chat-right > .chat-hour {\n    margin: 0 15px 0 0;\n}\n\n.chat-container::-webkit-scrollbar {\n    width: 8px;\n }\n\n .chat-container::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n }\n \n .chat-container::-webkit-scrollbar-thumb {\n   background-color: #00c89e;\n   border-radius:10px;\n }\n\n@media (max-width: 767px) {\n    .chat-container li.chat-left,\n    .chat-container li.chat-right {\n        flex-direction: column;\n        margin-bottom: 30px;\n    }\n    .chat-container li img {\n        width: 32px;\n        height: 32px;\n    }\n    .chat-container li.chat-left .chat-avatar {\n        margin: 0 0 5px 0;\n        display: flex;\n        align-items: center;\n    }\n    .chat-container li.chat-left .chat-hour {\n        justify-content: flex-end;\n    }\n    .chat-container li.chat-left .chat-name {\n        margin-left: 5px;\n    }\n    .chat-container li.chat-right .chat-avatar {\n        order: -1;\n        margin: 0 0 5px 0;\n        align-items: center;\n        display: flex;\n        justify-content: right;\n        flex-direction: row-reverse;\n    }\n    .chat-container li.chat-right .chat-hour {\n        justify-content: flex-start;\n        order: 2;\n    }\n    .chat-container li.chat-right .chat-name {\n        margin-right: 5px;\n    }\n    .chat-container li .chat-text {\n        font-size: .8rem;\n    }\n}\n\n.chat-form {\n    padding: 15px;\n    width: 100%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ffffff;\n    border-top: 1px solid white;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n.card {\n    border: 0;\n    background: #f4f5fb;\n    -webkit-border-radius: 2px;\n    -moz-border-radius: 2px;\n    border-radius: 2px;\n    margin-bottom: 2rem;\n    box-shadow: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_40c106f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_40c106f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_40c106f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Conversation.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Conversation.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Conversation_vue_vue_type_template_id_63f956ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conversation.vue?vue&type=template&id=63f956ee */ "./resources/js/components/Conversation.vue?vue&type=template&id=63f956ee");
/* harmony import */ var _Conversation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation.vue?vue&type=script&lang=js */ "./resources/js/components/Conversation.vue?vue&type=script&lang=js");



_Conversation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Conversation_vue_vue_type_template_id_63f956ee__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Conversation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Conversation.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Conversation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Message.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Message.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Message_vue_vue_type_template_id_b91a6428__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=b91a6428 */ "./resources/js/components/Message.vue?vue&type=template&id=b91a6428");
/* harmony import */ var _Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js */ "./resources/js/components/Message.vue?vue&type=script&lang=js");



_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Message_vue_vue_type_template_id_b91a6428__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/Message.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/MessageAttachment.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/MessageAttachment.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageAttachment_vue_vue_type_template_id_03a2dea2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageAttachment.vue?vue&type=template&id=03a2dea2 */ "./resources/js/components/MessageAttachment.vue?vue&type=template&id=03a2dea2");
/* harmony import */ var _MessageAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageAttachment.vue?vue&type=script&lang=js */ "./resources/js/components/MessageAttachment.vue?vue&type=script&lang=js");



_MessageAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MessageAttachment_vue_vue_type_template_id_03a2dea2__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_MessageAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/MessageAttachment.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MessageAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/Chat.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Chat.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_40c106f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=40c106f7&scoped=true */ "./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&scoped=true");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./resources/js/views/Chat.vue?vue&type=script&lang=js");
/* harmony import */ var _Chat_vue_vue_type_style_index_0_id_40c106f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css */ "./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css");




;
_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Chat_vue_vue_type_template_id_40c106f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-40c106f7"
/* hot reload */
if (false) {}

_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/Chat.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/Conversation.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Conversation.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Conversation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Conversation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Conversation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Conversation.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Message.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Message.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MessageAttachment.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MessageAttachment.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessageAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessageAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessageAttachment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MessageAttachment.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Conversation.vue?vue&type=template&id=63f956ee":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Conversation.vue?vue&type=template&id=63f956ee ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Conversation_vue_vue_type_template_id_63f956ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Conversation_vue_vue_type_template_id_63f956ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Conversation.vue?vue&type=template&id=63f956ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Conversation.vue?vue&type=template&id=63f956ee");


/***/ }),

/***/ "./resources/js/components/Message.vue?vue&type=template&id=b91a6428":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Message.vue?vue&type=template&id=b91a6428 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_template_id_b91a6428__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_template_id_b91a6428__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Message.vue?vue&type=template&id=b91a6428 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Message.vue?vue&type=template&id=b91a6428");


/***/ }),

/***/ "./resources/js/components/MessageAttachment.vue?vue&type=template&id=03a2dea2":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/MessageAttachment.vue?vue&type=template&id=03a2dea2 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessageAttachment_vue_vue_type_template_id_03a2dea2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MessageAttachment_vue_vue_type_template_id_03a2dea2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MessageAttachment.vue?vue&type=template&id=03a2dea2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MessageAttachment.vue?vue&type=template&id=03a2dea2");


/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&scoped=true":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_40c106f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_40c106f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=template&id=40c106f7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&scoped=true");


/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_style_index_0_id_40c106f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Chat.vue?vue&type=style&index=0&id=40c106f7&scoped=true&lang=css");


/***/ })

}]);