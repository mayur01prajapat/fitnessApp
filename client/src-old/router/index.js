import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import ExerciseLog from '../views/ExerciseLog.vue';
import Exercise from '../views/Exercise.vue';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Suggestion from '../views/Suggestion.vue';
import Register from '../views/Register.vue';
import HelloWorld from '../views/HelloWorld.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/exercise-log', component: ExerciseLog },
  { path: '/exercise', component: Exercise },
  { path: '/about', component: About },
  { path: '/home', component: Home },
  { path: '/suggestion', component: Suggestion },
  { path: '/signup', component: Register },
  { path: '/hello', component: HelloWorld },
];


const router = new VueRouter({
  routes,
  mode: 'history'
});


export default router