import { createRouter, createWebHistory } from 'vue-router';
import FetchRestaurants from '../components/FetchRestaurants.vue';
import TournamentView from '../views/TournamentView.vue';

const routes = [
    {
        path: '/',
        name: 'FetchRestaurants',
        component: FetchRestaurants
    },
    {
        path: '/tournament',
        name: 'Tournament',
        component: TournamentView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;