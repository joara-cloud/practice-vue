<template>
  <div>

  <b-jumbotron>

    <h4>title : {{this.$store.state.askview.title}}<b-badge>{{this.$store.state.askview.comments_count}}</b-badge></h4>
    <div class="d-flex w-100 justify-content-between">
      <span><small class="text-muted">by</small> <router-link v-bind:to="`/user/${this.$store.state.askview.user}`">{{this.$store.state.askview.user}}</router-link></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <small class="text-muted">{{this.$store.state.askview.time_ago}}</small>
    </div>

    <hr class="my-4">

    <div><span v-html="this.$store.state.askview.content"></span></div>
  </b-jumbotron>

  </div>
</template>


<script>
export default {
  created() {
    const itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ASKVIEW', itemid);
  }
}
</script>