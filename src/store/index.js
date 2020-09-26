import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: []
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, asks) {
      state.asks = asks;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data)
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(response => {
          context.commit('SET_ASK', response.data)
        })
        .catch(err => {
          console.log(err);
        });
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then(response => {
          context.commit('SET_JOBS', response.data)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});