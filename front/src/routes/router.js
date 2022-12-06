import LoginPage from '../pages/LoginPage.vue';
import WallPage from '../pages/Wall/WallPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

//  Création des routes
const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: LoginPage },
  { path: '/home', component: WallPage },
];

//  Création de l'instance de routes
const router = createRouter({ history: createWebHistory(), routes });

//  Control de l'acces au route
router.beforeEach((to, from) => {
  //  Retour vers la page login si le user n'est pas connecté
  if (isLoginRequired(to)) {
    return router.push('/login');
  }
});

//  Controle si le user est connecté
function isLoginRequired(to) {
  if (!isPrivatePage(to)) return false;
  if (!isTokenInCache()) return true;
  return false;
}

//  Indique les pages privé
function isPrivatePage(to) {
  const publicPages = ['/login', '/signup'];
  return !publicPages.includes(to.path);
}

//  Vérifie si il ya un token dans le cache
function isTokenInCache(to) {
  return localStorage.getItem('token') != null;
}

// //  Vérifie si le token est valid
// function isTokenValid() {
//   const token = localStorage.getItem('token');
//   return token === 'my JWT token';
// }

export { router };
