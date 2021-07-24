<template>
  <a :href="attachment.attachment_path" download>
    <img
      :src="attachment.attachment_path"
      alt=""
      v-if="attachmentType == 'image'"
    />
    <span v-else>
       {{  attachment.attachment  }}
       <i class="fas fa-paperclip" ></i>
    </span>
  </a>
</template>

<script>
export default {
  props: ["attachment"],
  computed: {
    attachmentType() {
      return this.attachment.attachement_type.split("/")[0];
    },
  },
  methods: {},
};
</script>

<style>
</style>