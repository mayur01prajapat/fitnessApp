import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
import EasySlider from 'vue-easy-slider';


const SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(EasySlider);

Vue.use(SocialSharing);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

