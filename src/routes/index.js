import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskList from '../views/AskList.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView,
      name: 'news',
    },
    {
      path: '/ask',
      component: AskList,
      name: 'ask',
    },
    {
      path: '/c/:id',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
      name: 'jobs',
    },
    {
      path: '/user/:id',
      component: UserView,
    }    
  ]
});