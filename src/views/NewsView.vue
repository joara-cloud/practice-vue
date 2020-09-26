<template>
  <div>
    <ul class="list">
      <li v-for="(item, i) in this.$store.state.news" v-bind:key="i">
        <a v-bind:href="item.url" target="_blank">{{item.title}}</a><br>
        <!-- <p class="user">by <router-link v-bind:to="'/user/' + item.user">{{item.user}}</router-link></p> -->
        <p class="user">by <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link></p>
        <p>{{item.time_ago}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>
body dl, body ol, body ul {margin-top:0;margin-bottom:0}
body h3 {font-size:18px}
body a {color:#222}
.list > li {padding:14px 8px;border-bottom:1px solid #eee}
.list > li p {display:inline-block;margin:0;font-size:14px}
.list > li a {font-weight:bold;letter-spacing:-0.5px;color:#222}
.list .user {margin-right:15px}
</style>