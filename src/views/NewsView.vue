<template>
  <div>
    <ul class="list">
      <li v-for="(item, i) in this.$store.state.news" v-bind:key="i">
        <a v-bind:href="item.url" target="_blank">{{item.title}}</a><br>
        <!-- <p class="user">by <router-link v-bind:to="'/user/' + item.user">{{item.user}}</router-link></p> -->
        <p class="user">by <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link></p>
        <p class="time_ago">{{item.time_ago}}</p>
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
.list > li {padding:14px 8px;border-bottom:1px solid #eee}
.list > li p {display:inline-block;font-size:14px}
.list > li a {font-weight:bold;letter-spacing:-0.5px;text-decoration:underline}
.list .user {margin-right:15px}
</style>