import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenedDrawer: false,
    locale: 'ja',
  },
  mutations: {
    setOpenedDrawer(state, isOpened) {
      state.isOpenedDrawer = isOpened;
    },
    updateLocale(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
  },
  modules: {
  },
});
