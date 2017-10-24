/* eslint no-shadow:off */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  showLoading: true,
  showPopup: false,
  showSuccess: false,
};

// vue 裡用 this.$store.commit('showLoading' , true)
const mutations = {
  showLoading(state, value) {
    state.showLoading = value;
  },
  setPopup(state, value) {
    state.showPopup = value;
  },
  setSuccess(state, value) {
    state.showSuccess = value;
  },
};

/*
  vue 裡用 this.$store.dispatch('showLoading' , true)
  methods(){
    ...Vuex.mapActions(['showLoading','count']),
  }
*/
const actions = {
  showLoading({ commit }, value) {
    commit('showLoading', value);
  },
  setPopup({ commit }, value) {
    commit('setPopup', value);
  },
  setSuccess({ commit }, value) {
    commit('setSuccess', value);
  },
  postApi({ commit }, value) {
    const urlName = 'https://ssl2.medialand.com.tw/api/receipt';
    const data = value;

    $.ajax({
      // 進行要求的網址(URL)
      url: urlName,
      // 要送出的資料 (會被自動轉成查詢字串)
      data,
      // 要使用的要求method(方法)，POST 或 GET
      type: 'POST',
      // 資料的類型
      dataType: 'json',
    }).done((jsonData) => {
      // console.log(jsonData);
      if (jsonData.status === 'ERROR') {
        // commit('setPopup', true);
        alert(jsonData.err.message);
      }
      if (jsonData.status === 'OK') {
        commit('setSuccess', true);
      }
    });
  },
};

/**
  computed:{
    ...Vuex.mapGetters(['count'])
  },
 */
const getters = {
  showLoading: state => state.showLoading,
  showPopup: state => state.showPopup,
  showSuccess: state => state.showSuccess,
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
