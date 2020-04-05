import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import ExerciseLog from './components/ExerciseLog.vue';
import About from './components/About.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/exercise-log', component: ExerciseLog },
  { path: '/about', component: About },
  { path: '/home', component: Home },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
