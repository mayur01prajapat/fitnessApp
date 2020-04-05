import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import ExerciseLog from '../views/ExerciseLog.vue';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Suggestion from '../views/Suggestion.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/exercise-log', component: ExerciseLog },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/suggestion', component: Suggestion },
];


const router = new VueRouter({
    routes,
    mode: 'history'
  });
  

export default router