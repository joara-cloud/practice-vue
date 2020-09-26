<template>
  <div>
    <ul>
      <li v-for="(ask, i) in this.$store.state.asks" v-bind:key="i">{{ ask.title }}</li>
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