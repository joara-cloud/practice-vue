<template>
  <div>
    <ul class="list">
      <li v-for="(job, i) in this.$store.state.jobs" v-bind:key="i">
        <a v-bind:href="job.url" target="_blank">{{job.title}}</a>
        <div class="d-flex justify-content-between">
          <p class="user">{{job.domain}}</p>
          <p class="time_ago">{{job.time_ago}}</p>
        </div>
      </li>
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