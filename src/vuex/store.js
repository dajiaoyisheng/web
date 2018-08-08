import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// const store = {
//     loading: true
// }
const store = new Vuex.Store({
  state: {
    loading: true
  }
})
export default store
// export default new Vuex.Store({
//   store
// });
