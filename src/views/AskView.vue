<template>
  <div>
    <ul>
      <li v-for="(ask, i) in asks" v-bind:key="i">{{ ask.title }}</li>
    </ul>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';

export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchAskList() // 여기에서 return new Promise() 가 되기 때문에 then으로 연결 가능!!
      .then(res => this.asks = res.data) // 화살표 함수를 쓰게 되면 
      .catch(err => console.log(err));
  }
}
</script>

<style>

</style>