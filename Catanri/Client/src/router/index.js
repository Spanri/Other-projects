import Vue from 'vue';
import Router from 'vue-router';

import Welcome from '../components/Welcome';
import Main from '../components/Main';
import MySites from '../components/MySites';
import Comments from '../components/Comments';
import NotFound from '../components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/NotFound',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/Main',
        name: 'Main',
        component: Main
    },
    {
        path: '/MySites',
        name: 'MySites',
        component: MySites
    },
    {
        path: '/Comments',
        name: 'Comments',
        component: Comments
    }
  ]
})