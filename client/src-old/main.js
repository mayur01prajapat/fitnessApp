import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
import EasySlider from 'vue-easy-slider';
import Vuelidate from 'vuelidate'


const SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(EasySlider);

Vue.use(SocialSharing);

Vue.use(Vuelidate);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

