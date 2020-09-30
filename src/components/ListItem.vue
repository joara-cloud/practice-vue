<template>
  <div>
    <ul class="list">
      <li v-for="(item, i) in listItems" v-bind:key="i">
        <template v-if="item.domain">
          <a v-bind:href="item.url" target="_blank">{{item.title}} <b-icon-box-arrow-in-up-right></b-icon-box-arrow-in-up-right></a>
        </template>
        <template v-else>
          <router-link v-bind:to="`askview/${item.id}`">{{item.title}}</router-link>
        </template>
        <div class="d-flex justify-content-between">
          <p v-if="item.user">by <router-link v-bind:to="`/user/${item.user}`" class="etc_link">{{item.user}}</router-link></p>
          <p v-else class="user">{{item.domain}}</p>
          <p class="text-muted">{{item.time_ago}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    if(name ==='news') {
      this.$store.dispatch('FETCH_NEWS');
    }else if(name ==='ask') {
      this.$store.dispatch('FETCH_ASK');
    }else if(name ==='jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }
  },
  computed: {
    listItems() { 
      const name = this.$route.name;
      if(name ==='news') {
        return this.$store.state.news;
      }else if(name ==='ask') {
        return this.$store.state.asks;
      }else if(name ==='jobs') {
        return this.$store.state.jobs;
      }else {
        return '';
      }
    }
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