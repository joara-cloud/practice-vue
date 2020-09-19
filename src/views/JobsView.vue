<template>
  <div>
    <ul>
      <li v-for="(job, i) in jobs" v-bind:key="i">{{ job.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    const vm = this;
    fetchJobsList()
      .then(function(res) {
        vm.jobs = res.data;
      })
      .catch(function(err) {
        console.log(err);
      })
  }
}
</script>

<style>

</style>