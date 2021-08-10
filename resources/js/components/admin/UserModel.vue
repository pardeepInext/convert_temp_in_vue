<template>
  <div
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    id="userModal"
  >
    <div class="modal-dialog" id="userdetails">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            User Details
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="userdetails" v-html="userdetails">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userdetails"],
};
</script>

<style>
</style>