import LoginPage from '../pages/LoginPage.vue';
import WallPage from '../pages/Wall/WallPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

//  Création des routes
const routes = [
  { path: '/login', component: LoginPage },
  { path: '/home', component: WallPage },
  { path: '/profile', component: ProfilePage },
];

//  Création de l'instance de routes
const router = createRouter({ history: createWebHistory(), routes });

export { router };
