<template>
  <div>

    <img src="../../static/img/sell.svg" class="home-image img-responsive col-md-12" id="whatis"/>
    <img src="../../static/img/BG2.jpeg" class="home-image img-responsive col-md-12" id="useit"/>
    <img src="../../static/img/BG3.jpeg" class="home-image img-responsive col-md-12" id="screen"/>
    <img src="../../static/img/BG4.jpeg" class="home-image img-responsive col-md-12" id="credits"/>
    <img src="../../static/img/what.svg" class="home-image img-responsive col-md-12" id="contact"/>
    <modal></modal>
  </div>

</template>
<script>
import Modal from '@/components/Modal.vue';
  export default{
    components:{Modal}
  }
</script>
<style lang="scss">
  .title{
    font-family: 'Fredoka One', cursive;
    color:seagreen;
  }
  .home-image{
   // border:1px solid black;
  }
</style>
