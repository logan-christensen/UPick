<template>
    <div>
        <h1 class="text-primary mb-4 text-center">Tournament</h1>
        <Tournament v-if="restaurants.length" :restaurants="restaurants"
                    @tournamentFinished="handleTournamentFinished" />
        <div v-else class="text-center py-5 bg-white rounded shadow-sm">
            <i class="bi bi-info-circle fs-1 text-secondary"></i>
            <p class="mt-3">No restaurants available for the tournament. Please add some restaurants first!</p>
        </div>
    </div>
</template>

<script>
import Tournament from '../components/Tournament.vue';
import db from '../db';

export default {
    components: {
        Tournament
    },
    data() {
        return {
            restaurants: []
        };
    },
    async created() {
        await this.loadRestaurants();
    },
    methods: {
        async loadRestaurants() {
            const allRestaurants = await db.restaurants.toArray();
            this.restaurants = allRestaurants.filter(r => !r.disabled);
        },
        handleTournamentFinished(winner) {
            alert(`The winner is: ${winner.name}`);
        }
    }
};
</script>

<style scoped>
/* Add any specific styles for the TournamentView here */
</style>