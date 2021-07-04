<template>
  <section class="breadcrumb-section spad set-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-text shadow-lg">
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style  scoped>
section {
  background: lightgrey;
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 200px;
  background-position: 0 0;
  animation: shine 1s infinite;
}
@keyframes shine {	
  to {
    background-position: 100% 0, /* move highlight to right */ 0 0;
  }
}
.breadcrumb-text{
    background: #edebe6;
    border-radius: 5px;
    width: 24%;
}
</style>>
