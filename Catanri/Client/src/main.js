import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

window.addEventListener('resize', function() {
  console.log('resize');
  document.querySelector('#app').style.gridTemplateRows = 'auto 1fr auto';
  if(window.width<768) {
    document.querySelector('#mob a').innerHTML = 'fgf';
  }
  else;
});
