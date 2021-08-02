<template>
  <div class="col-lg-4 col-md-6" :class="property.is_open == 0 ? 'test' : ''">
    <div class="property-item">
      <div
        class="pi-pic set-bg"
        :style="{
          backgroundImage: `url('${asset}assets/img/property/${property.images[0].image}')`,
        }"
      >
        <div class="label" :class="property.status == 'rent' ? 'c-red' : ''">
          For {{ property.status }}
        </div>
      </div>
      <div class="pi-text">
        <a href="#" class="heart-icon"><i class="bi bi-suit-heart"></i></a>
        <div class="pt-price">
          &#36; {{ property.price
          }}<span v-if="property.status == 'rent'">/month</span>
        </div>
        <h5>
          <router-link
            :disabled="property.is_open == 0"
            :to="{ name: 'property', params: { id: property.id } }"
            >{{ property.title }}</router-link
          >
        </h5>
        <p>
          <span class="icon_pin_alt"></span> {{ property.location.address }}
        </p>
        <ul>
          <li>
            <i class="fa fa-object-group"></i> {{ property.size }}
            {{ property.prefix }}
          </li>
          <li><i class="fa fa-bathtub"></i>{{ property.bedrooms }}</li>
          <li><i class="fa fa-bed"></i> {{ property.bedrooms }}</li>
          <li><i class="fa fa-automobile"></i> {{ property.garages }}</li>
        </ul>
        <div class="pi-agent">
          <div class="pa-item">
            <div class="pa-info">
              <img
                :src="
                  profileImage(
                    property.postedBy.provider_id,
                    property.postedBy.proifie_image,
                    property.postedBy.img
                  )
                "
                alt=""
              />
              <h6>{{ property.postedBy.name }}</h6>
            </div>
            <div class="float-end">
              <button type="button" class="btn btn-sm btn-primary"
              :class="property.is_open == 0 ? 'disabled' : ''"
              >
                <i class="fas fa-comment-dots"></i>
                Chat
              </button>
            </div>
          </div>
        </div>
        <router-link
          class="btn btn-sm btn-primary float-end my-1"
          :class="property.is_open == 0 ? 'disabled' : ''"
          :to="{ name: 'property', params: { id: property.id } }"
        >
          <i class="bi bi-card-list"></i>
          Property Details
        </router-link>
      </div>
    </div>
    <div class="reserved" v-if="property.is_open == 0">
      <span
        class="badge rounded-pill bg-primary p-2"
        style="background: #708090 !important"
        >Reversed</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["property"],
  computed: {
    ...mapState(["asset"]),
  },
  methods: {
    profileImage(prover_id, proifie_image, img) {
      return typeof prover_id == "string" ? img : proifie_image;
    },
  },
};
</script>

<style scoped>
.test {
  position: relative;
  opacity: 0.3;
  cursor: not-allowed;
}
.reserved {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  opacity: 1;
}
</style>
