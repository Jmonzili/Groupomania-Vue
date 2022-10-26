import { createApp } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './components/Login.vue';
import Wall from './components/Wall.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

//  Création des routes
const routes = [
  //{ path: '/', component: App },
  { path: '/login', component: Login },
  { path: '/home', component: Wall },
];

//  Création de l'instance de routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.mount('#app');
