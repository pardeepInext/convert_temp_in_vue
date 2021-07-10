<template>
   <div class="col-lg-4 col-md-6">
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
          <router-link :to="{ name: 'property', params: { id: property.id } }" >{{ property.title }}</router-link>
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
              <img src="img/property/posted-by/pb-1.jpg" alt="" />
              <h6>Ashton Kutcher</h6>
            </div>
            <div class="pa-text">123-455-688</div>
          </div>
        </div>
        <router-link
          class="btn btn-sm btn-primary float-end my-1"
          :to="{ name: 'property', params: { id: property.id } }"
        >
        <i class="bi bi-card-list"></i> 
          Details
        </router-link>
      </div>
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
};
</script>

<style>
</style>