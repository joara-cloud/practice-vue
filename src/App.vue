<template>
  <div id="app">
    <gnb></gnb>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner v-bind:loading="loadingState"></spinner>
  </div>  
</template>

<script>
import Gnb from './components/Gnb.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    Gnb,
    Spinner
  },
  data() {
    return {
      loadingState: false
    }
  },
  methods: {
    startSpinner() {
      return this.loadingState = true;
    },
    endSpinner() {
      return this.loadingState = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);    
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
