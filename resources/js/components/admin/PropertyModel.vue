<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="modal"
    v-if="propertyDetails"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            {{ propertyDetails.title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="
              app-card app-card-account
              shadow-sm
              d-flex
              flex-column
              align-items-start
            "
          >
            <div class="app-card-header p-3 border-bottom-0"></div>
            <div class="app-card-body px-4 w-100">
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-data" v-if="propertyDetails.images">
                      <img
                        class="profile-image"
                        :src="`${asset}assets/img/property/${propertyDetails.images[0].image}`"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <div class="item-label"><strong>Type</strong></div>
                    <div class="item-data">{{ propertyDetails.type }}</div>
                  </div>
                  <div class="col-auto">
                    <div class="item-label"><strong>Status</strong></div>
                    <div class="item-data">{{ propertyDetails.status }}</div>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label"><strong>Feature</strong></div>
                    <div class="item-data" v-if="propertyDetails.features">
                      <span
                        class="badge bg-success me-1"
                        v-for="feature in propertyDetails.features"
                        :key="feature.id"
                        >{{ feature.feature.toUpperCase() }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="item border-bottom py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                    <div class="item-label"><strong>Price</strong></div>
                    <div class="item-data">$ {{ propertyDetails.price }}</div>
                  </div>
                </div>
              </div>
              <div class="item py-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-auto" v-if="propertyDetails.location">
                    <div class="item-label"><strong>Location</strong></div>
                    <div class="item-data">
                      {{ propertyDetails.location.address }},
                      {{ propertyDetails.location.city }},
                      {{ propertyDetails.location.state }}
                    </div>
                  </div>
                </div>
              </div>
              <span class="badge rounded-pill bg-danger float-end mb-3">{{
               propertyDetails.is_open == 0 ? "Reserved" : "Open"
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["propertyDetails"],
  computed: {
    ...mapState(["asset"]),
  },
};
</script>

<style>
</style>