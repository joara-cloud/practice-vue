<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import bus from '../utils/bus.js';

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');
    bus.$emit('end:spinner');
  }
}
</script>