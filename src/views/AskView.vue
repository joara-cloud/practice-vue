<template>
  <div>

  <b-jumbotron>

    <h4>title : {{userInfo.title}}
      <b-badge>{{userInfo.comments_count}}</b-badge>
    </h4>
    <user-profile class="d-flex w-100 justify-content-between">
      <router-link slot="username" v-bind:to="`/user/${userInfo.user}`">
        by {{userInfo.user}}
      </router-link>
      <p slot="time">{{userInfo.time_ago}}</p>
    </user-profile>

    <hr class="my-4">

    <div><span v-html="userInfo.content"></span></div>
  </b-jumbotron>

  </div>
</template>


<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.askview;
    }
  },
  created() {
    const itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ASKVIEW', itemid);
  }
}
</script>