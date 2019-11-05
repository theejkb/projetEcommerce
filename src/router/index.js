import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Identification from "../components/Identification";
import Connexion from "../components/Connexion";
import Accueil from "../components/Accueil";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/identification',
    name: 'identification',
    component: Identification
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: Connexion
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: Accueil
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
