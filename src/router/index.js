import Vue from 'vue';
import Router from 'vue-router';

import Meals from '../components/Meals';
import Profile from '../components/Profile';
import Register from '../components/Register';
import Rules from '../components/Rules';
import Statistics from '../components/Statistics';
import Users from '../components/Users';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/maaltijden', component: Meals },
        { path: '/profiel', component: Profile },
        { path: '/aanmelden', component: Register },
        { path: '/spelregels', component: Rules },
        { path: '/statistieken', component: Statistics },
        { path: '/gebruikers', component: Users },
    ],
    linkActiveClass: 'is-active',
});
