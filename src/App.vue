<template>
  <div id="app">
    <gnb></gnb>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>  
</template>

<script>
import Gnb from './components/Gnb.vue';

export default {
  components: {
    Gnb
  }
}
</script>

<style>
body,ul,ol,p,h1,h2,h3,h4,h5,span  {margin:0;padding:0}
a {text-decoration:none;color:#222}
ul, ol, li {list-style:none}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
