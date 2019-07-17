import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import Dashboard from './views/Dashboard.vue';
import firebase from 'firebase';

import Account from './components/dashboard/Account.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [{
      	path: 'account',
        component: Account
      },]
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('dashboard');
  else next();
})

export default router;
