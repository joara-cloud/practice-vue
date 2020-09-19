<template>
  <div>
    <ul>
      <li v-for="(user, i) in users" v-bind:key="i">{{user.title}}</li>
    </ul>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    const vm = this;
    fetchNewsList()
      .then(function(response) {
        vm.users = response.data;
      })
      .catch(function(err) {
        console.log(err);
      })
  }
}
</script>

<style>

</style>