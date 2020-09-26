<template>
  <div>
    <ul>
      <li v-for="(ask, i) in this.$store.state.asks" v-bind:key="i">
        <a v-bind:href="ask.url" target="_blank">{{ask.title}}</a>
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