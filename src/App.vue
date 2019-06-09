<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components:{NavBar}
}
</script>


<style  lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One|Lato');
  //@import "./assets/css/animate.css";
  //@import "./assets/css/bootstrap.css";

  //@import "./assets/css/style.css";
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
