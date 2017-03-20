import 'whatwg-fetch';

import Vue from 'vue';
import App from './components/app.vue';

// create a new Vue instance of the 'App' component

const app = new Vue(App);

app.$mount('.app');
