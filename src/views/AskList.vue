<template>
  <div>

    <ul class="list">
      <li href="#" class="align-items-start" v-for="(ask, i) in this.$store.state.asks" v-bind:key="i">
        <router-link v-bind:to="`askview/${ask.id}`">{{ask.title}}</router-link>
        <div class="d-flex justify-content-between">
          <small>by <router-link v-bind:to="`/user/${ask.user}`" class="etc_link">{{ask.user}}</router-link></small>
          <small class="text-muted">{{ask.time_ago}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>