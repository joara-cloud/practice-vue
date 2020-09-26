<template>
  <div>
    <ul>
      <li v-for="(job, i) in this.$store.state.jobs" v-bind:key="i">{{ job.title }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>