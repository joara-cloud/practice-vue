import Vue from 'vue'
import App from './App.vue';
import {router} from './routes/index.js';
<<<<<<< HEAD
import {store} from './stroe/index.js';
=======
import {store} from './store/index.js';
import BootstrapVue from 'bootstrap-vue'
import { IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

>>>>>>> master

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
