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
// { "id": 24599793, "title": "MVVM and Databinding for Unity3d", "points": 2, "user": "loxodon", "time": 1601136413, "time_ago": "38 minutes ago", "type": "link", "content": "<p>MVVM &amp; Databinding for Unity3d<p>Loxodon.Framework is a powerful tool for your game development. It helps you make games more easily. It has a powerful data binding features and completely separates your game view and game logic. Don&#x27;t you try?<p>https:&#x2F;&#x2F;github.com&#x2F;vovgou&#x2F;loxodon-framework", "comments": [], "comments_count": 0, "url": "item?id=24599793" }

</script>

<style>

</style>