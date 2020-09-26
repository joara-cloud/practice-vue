<template>
  <div id="app">
    asdf
    <gnb></gnb>
    <router-view></router-view>
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
</style>
