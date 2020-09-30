<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// ListView의 역할은 데이터를 불러와서 뿌려주기만 하면 됨
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  }
}
</script>

<style>

</style>