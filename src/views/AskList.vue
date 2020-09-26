<template>
  <div>

    <b-list-group>


      <b-list-group-item href="#" class="flex-column align-items-start" v-for="(ask, i) in this.$store.state.asks" v-bind:key="i">
          <h3><router-link v-bind:to="`askview/${ask.id}`">{{ask.title}}</router-link></h3>
          <div class="d-flex w-100 justify-content-between">
            <small class="text-muted">by {{ask.user}}</small>
            <small class="text-muted">{{ask.time_ago}}</small>
          </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>