<template>
  <div :class="['carousel-item', index == 0 ? 'active' : '']" ref="slide">
    <div class="property-slide" :style="{ backgroundImage: `url('${asset}${imgPath}')` }">
      <div class="row" v-if="placement == 'home'">
        <div class="col-lg-12">
          <div class="slider-propery-info hc-inner-text">
            <div class="hc-text">
              <h4>{{ slide.name }}</h4>
              <p>
                <i class="bi bi-geo-alt" :style="{ color: '#00c89e' }"></i>
                Panvel, Navi Mumbai
              </p>
              <div class="label">For {{ slide.type }}</div>
              <h5>$ {{ slide.price }}<span>/month</span></h5>
            </div>
            <div class="propery-widget">
              <ul>
                <li><i class="fa fa-object-group"></i> 2, 283</li>
                <li><i class="fa fa-bathtub"></i> 03</li>
                <li><i class="fa fa-bed"></i> 05</li>
                <li><i class="fa fa-automobile"></i> 01</li>
              </ul>
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
  props: ["slide", "placement","index"],
  computed: {
    ...mapState(["asset"]),
    imgPath() {
      return this.$props.placement == "home"
        ? `assets/img/${this.$props.slide.image}`
        : `assets/img/property/${this.$props.slide.image}`;
    },
  },
  
};
</script>

<style scoped>
.property-slide {
  height: 780px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  align-items: center;
  justify-content: center;
  height: 780px;
  display: flex;
}

.slider-propery-info {
  background: #ffffff;
  padding: 40px;
  overflow: hidden;
  opacity: 1;
  position: relative;
  top: 100px;
  display: inline-block;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease;
}

.label {
  font-size: 12px;
  display: inline-block;
  text-transform: uppercase;
  color: #ffffff;
  padding: 2px 10px;
  background: #3068b2;
  font-weight: 600;
  margin-right: 10px;
}

h4 {
  color: #111111;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 5px;
}
p {
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #666666;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 15px 0;
}
h5 {
  color: #00c89e;
  font-weight: 700;
  display: inline-block;
}
h5 span {
  color: #666666;
  font-weight: 400;
  font-size: 14px;
}
.propery-widget {
  overflow: hidden;
  width: 185px;
  position: relative;
  right: -52px;
  top: 18px;
}
.propery-widget li i {
  font-size: 14px;
  color: #666666;
  margin-right: 4px;
}
.hc-text {
  float: left;
  margin-right: 18px;
}

.slider-propery-active {
  opacity: 1;
  top: 0;
}
/*  100px  */
</style>>
