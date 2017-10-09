// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import axios from 'axios';
import App from './App';
import storeData from './store';
import router from './router';
import OAuth from './services/OAuth';

Vue.config.productionTip = false;

// Use VueX as a global store, backed by localstorage for persistence
Vue.use(Vuex);
const vls = new VuexPersist({
    key: 'nl.debolk.noms',
    storage: window.localStorage,
});
const store = new Vuex.Store({
    ...storeData,
    plugins: [vls.plugin],
});
window.store = store;

// Configure axios
axios.defaults.baseURL = 'http://api.lcl/api/';
window.axios = axios;

// Check for a "code" paramater which indicates succesful login
const qs = window.location.search;
const code = qs.match(/[?&]code=([^&#]+)/);
const state = qs.match(/[?&]state=([^&#]+)/);
if (code) {
    OAuth.processAuthorization(code[1], state[1]);
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
