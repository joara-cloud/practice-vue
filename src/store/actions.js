import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserList, fetchAskViewList, fetchList } from '../api/index.js';

export default {
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
  FETCH_ASKVIEW(context, itemid) {
    fetchAskViewList(itemid)
      .then(response => {
        context.commit('SET_ASKVIEW', response.data)
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
  },
  FETCH_USER(context, username) {
    fetchUserList(username)
    .then(response => {
      context.commit('SET_USER', response.data);
    })
    .catch(err => {
      console.log(err);
    })
  },
  FETCH_LIST(context, pageName) {
    fetchList(pageName)
      .then(response => {
        context.commit('SET_LIST', response.data);
      })
      .catch(err => console.log(err));
  }
}