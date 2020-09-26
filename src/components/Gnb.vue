<template>
  <div>
    <ul class="gnb">
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/ask">Ask</router-link></li>
      <li><router-link to="/jobs">Jobs</router-link></li>
      <li><router-link to="/user">user</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.gnb {padding:0 20px;background-color:#42b883}
.gnb > li {display:inline-block}
.gnb > li > a {display:inline-block;padding:10px 0;color:#fff}
.gnb > li:before {display:inline-block;width:1px;height:10px;margin:0 11px 0 10px;content:'';background-color:#fff;}
.gnb > li:first-child:before {display:none}
.gnb .router-link-active {font-weight:bold;text-decoration:underline}
</style>