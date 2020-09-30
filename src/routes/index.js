import Vue from 'vue'
import VueRouter from 'vue-router';
// import NewsView from '../views/NewsView.vue';
// import AskList from '../views/AskList.vue';
// import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import CreateListView from '../views/CreateListView.js';

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
      name: 'news',
      // component: NewsView,
      component: CreateListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskList,
      component: CreateListView('AskList'),
    },
    {
      path: '/askview/:id',
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: CreateListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView,
    }
  ]
});