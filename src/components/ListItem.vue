<template>
  <div>
    <ul class="list">
      <li v-for="(item, i) in this.$store.state.news" v-bind:key="i">
        <a v-bind:href="item.url" target="_blank">{{item.title}} <b-icon-box-arrow-in-up-right></b-icon-box-arrow-in-up-right></a>
        <div class="d-flex justify-content-between">
          <p>by <router-link v-bind:to="`/user/${item.user}`" class="etc_link">{{item.user}}</router-link></p>
          <p class="text-muted">{{item.time_ago}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>
body dl, body ol, body ul {margin-top:0;margin-bottom:0}
body h3 {font-size:18px}
body a {color:#222}
.etc_link {color:#828282;text-decoration:underline;}
.list > li {padding:14px 8px;border-bottom:1px solid #eee}
.list > li p {display:inline-block;margin:0;font-size:14px}
</style>