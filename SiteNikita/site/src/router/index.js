import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Task from '@/components/Task'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/t',
      name: 'Task',
      component: Task
    },
    {
      path: '/a',
      name: 'About',
      component: About
    }
  ]
})
