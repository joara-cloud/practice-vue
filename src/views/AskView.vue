<template>
  <div>

  <b-jumbotron>

    <h2>title : {{this.$store.state.askview.title}}</h2>
    <span>user : {{this.$store.state.askview.user}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span>time ago : {{this.$store.state.askview.time_ago}}</span>

    <p>comments count : {{this.$store.state.askview.comments_count}}</p>
    <hr class="my-4">

    <div><span v-html="this.$store.state.askview.content"></span></div>
    <!-- <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button> -->
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