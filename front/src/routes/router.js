import LoginPage from '../pages/LoginPage.vue';
import WallPage from '../pages/Wall/WallPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import EditProfile from '../pages/EditProfile.vue';
import { createRouter, createWebHistory } from 'vue-router';

//  Création des routes
const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: LoginPage },
  { path: '/home', component: WallPage },
  { path: '/profile', component: ProfilePage },
  { path: '/edit-profile', component: EditProfile },
];

//  Création de l'instance de routes
const router = createRouter({ history: createWebHistory(), routes });

//  Control de l'acces au route
router.beforeEach((to, from) => {
  console.log('from:', from);
  console.log('to:', to);

  const publicPages = ['/login', '/signup'];
  if (!publicPages.includes(to.path)) {
    router.push('/login');
  }
});

export { router };
