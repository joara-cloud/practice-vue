<template>
  <div>
    <ul class="list">
      <li v-for="(ask, i) in this.$store.state.asks" v-bind:key="i">
        <router-link v-bind:to="`askview/${ask.id}`">{{ask.title}}</router-link><br>
        <p class="user">by {{ask.user}}</p>
        <p class="time_ago">{{ask.time_ago}}</p>
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