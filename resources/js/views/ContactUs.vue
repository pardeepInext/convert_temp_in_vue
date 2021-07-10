<template>
  <div>
    <breadcrumb :breadcrumb="breadcrumb" />
    <section class="contact-form-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cf-content">
              <div class="cc-title">
                <h4>Contact form</h4>
                <p>
                  Duis voluptatum. Id vis consequat consetetur dissentiet,
                  ceteros commune perp <br />etua mei et. Simul viderer
                  facilisis egimus tractatos splendi.
                </p>
              </div>
              <form action="#" class="cc-form">
                <div class="group-input">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Website" />
                </div>
                <textarea placeholder="Comment"></textarea>
                <button type="submit" class="site-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadcrumb: {
        name: "Contact Us",
        img: "breadcrumb-contact-bg.jpg",
      },
    };
  },
};
</script>

<style>
</style>