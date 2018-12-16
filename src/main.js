import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import { routes } from './routes.js';
import Store from './store/store.js';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://web-2630-final.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});