<template>
  <div>
    <ul>
      <li v-for="(item, i) in this.$store.state.news" v-bind:key="i">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>