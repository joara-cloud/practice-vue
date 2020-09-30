<template>
  <div>
    <user-profile>
      <p slot="username">user name : {{userInfo.id}}</p>
      <p slot="time">created : {{userInfo.created}}</p>
    </user-profile>
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
      return this.$store.state.user;
    }
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  }
}
</script>