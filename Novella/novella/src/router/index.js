import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import About from '../components/About';
import Start from '../components/Start';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Start',
      name: 'Start',
      component: Start
    }
  ]
})
