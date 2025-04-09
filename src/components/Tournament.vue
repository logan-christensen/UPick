<template>
    <div>
        <p class="text-center text-muted">
            <strong>{{ restaurants.length }}</strong> contestants still in the running!
        </p>
        <p class="text-center text-muted">
            <strong>Round {{ round }}</strong>
        </p>
        <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Loading restaurants for the tournament...</p>
        </div>

        <transition name="fade">
            <!-- Special view for the tournament winner -->
            <div v-if="restaurants.length === 1 && !loading" class="text-center py-5">
                <h2 class="text-success">🎉 Tournament Winner: {{ restaurants[0].name }} 🎉</h2>
                <p class="text-muted">Congratulations to the champion!</p>
                <RestaurantCard :restaurant="restaurants[0]">
                    <template #stats>
                        <p class="text-muted">Wins: {{ restaurants[0].wins }} | Losses: {{ restaurants[0].losses }}</p>
                    </template>
                    <template #action>
                        <a :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(restaurants[0].address)"
                           target="_blank" class="btn btn-primary btn-sm">
                            View Address
                        </a>
                    </template>
                </RestaurantCard>
            </div>

            <!-- Regular tournament flow -->
            <div v-else-if="currentMatchup" :key="currentMatchupKey">
                <div class="matchup gap-2">
                    <RestaurantCard v-for="(restaurant, index) in currentMatchup" :key="index" :restaurant="restaurant"
                                    :class="getMatchupClass(restaurant, index)" @disable="disableRestaurant">
                        <template #action>
                            <button class="btn btn-primary btn-sm" @click="resolveMatchup(restaurant)"
                                    :disabled="winnerSelected">
                                Choose Me
                            </button>
                        </template>
                        <template #stats>
                            <p class="text-muted">W: {{ restaurant.wins }} | L: {{ restaurant.losses }}</p>
                        </template>
                    </RestaurantCard>
                </div>
                <div v-if="winnerSelected" class="text-center mt-4">
                    <h2 class="text-success">Winner: {{ winner.name }}</h2>
                    <button class="btn btn-link text-muted" @click="nextMatchup">Next Matchup</button>
                </div>
            </div>

            <div v-else class="text-center py-5 bg-white rounded shadow-sm">
                <i class="bi bi-info-circle fs-1 text-secondary"></i>
                <p class="mt-3">No restaurants available for the tournament. Please add some restaurants first!</p>
            </div>
        </transition>
    </div>
    <div class="tournament-container">
        <div class="restaurant-card">
            <!-- Restaurant 1 content -->
        </div>
        <div class="restaurant-card">
            <!-- Restaurant 2 content -->
        </div>
    </div>
</template>

<script>
import db from '../db';
import RestaurantCard from './RestaurantCard.vue';

export default {
    components: {
        RestaurantCard
    },
    data() {
        return {
            restaurants: [],
            currentMatchup: null,
            winner: null,
            loading: true,
            winnerSelected: false,
            usedInRound: [], // Tracks restaurants used in the current round
            round: 1, // Tracks the current round
            currentMatchupKey: 0 // Key for the current matchup
        };
    },
    computed: {
        currentMatchupKey() {
            // Generate a unique key based on the current matchup or round
            return `${this.round}-${this.currentMatchup?.map(r => r.name).join('-')}`;
        }
    },
    async created() {
        await this.loadRestaurants();
        // Pick a random 16 restaurants for the tournament
        // randomize the order of the restaurants
        this.restaurants = this.restaurants.sort(() => Math.random() - 0.5);
        this.restaurants = this.restaurants.slice(0, 32);
        this.nextMatchup();
    },
    methods: {
        async loadRestaurants() {
            const allRestaurants = await db.restaurants.toArray();
            this.restaurants = allRestaurants.filter(r => !r.disabled).map(r => ({
                ...r,
                wins: r.wins || 0,
                losses: r.losses || 0
            }));
            this.loading = false;
        },
        nextMatchup() {
            if (this.restaurants.length < 2) {
                this.currentMatchup = null;
                return;
            }

            if (this.usedInRound.length >= this.restaurants.length) {
                this.usedInRound = [];
                this.round++;
            }

            const availableRestaurants = this.restaurants.filter(
                r => !this.usedInRound.includes(r)
            );

            if (availableRestaurants.length < 2) {
                this.usedInRound = [];
                this.round++;
                this.nextMatchup();
                return;
            }

            const randomIndices = this.getRandomIndices(availableRestaurants.length, 2);
            this.currentMatchup = [
                availableRestaurants[randomIndices[0]],
                availableRestaurants[randomIndices[1]]
            ];

            this.usedInRound.push(...this.currentMatchup);
            this.winnerSelected = false;
            this.winner = null;
            this.currentMatchupKey++; // Increment the key for the new matchup
        },
        getRandomIndices(max, count) {
            const indices = new Set();
            while (indices.size < count) {
                indices.add(Math.floor(Math.random() * max));
            }
            return Array.from(indices);
        },
        resolveMatchup(restaurant) {
            this.winner = restaurant;
            this.winnerSelected = true;

            const loser = this.currentMatchup.find(r => r !== restaurant);

            // Update wins and losses
            restaurant.wins++;
            loser.losses++;

            // Persist changes to the database
            console.log('Adding win to restaurant:', restaurant);
            db.restaurants.put({ ...restaurant });
            db.restaurants.put({ ...loser });

            // Remove the loser from the tournament after a short delay
            setTimeout(() => {
                this.restaurants = this.restaurants.filter(r => r !== loser);

                // Automatically advance to the next matchup after another delay
                setTimeout(() => {
                    this.nextMatchup();
                }, 500); // Delay before advancing to the next matchup (1 second)
            }, 500); // Delay for animation to complete (0.5 seconds)
        },
        getMatchupClass(restaurant, index) {
            if (!this.winnerSelected) return '';
            if (restaurant === this.winner) {
                return index === 0 ? 'winner-right' : 'winner-left';
            }
            return 'loser';
        },
        async disableRestaurant(restaurant) {
            restaurant.disabled = true;
            await db.restaurants.put(restaurant);
            this.restaurants = this.restaurants.filter(r => !r.disabled);
            this.nextMatchup();
        }
    }
};
</script>

<style scoped>
.text-success {
    font-size: 1.5rem;
    font-weight: bold;
}

.matchup {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 0;
}

.restaurant-card {
    cursor: pointer;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.2s;
}

.restaurant-card:hover {
    transform: scale(1.05);
}

.restaurant-card img {
    max-width: 100%;
    border-radius: 8px;
}

.winner-card {
    border-color: green;
    background-color: #e6ffe6;
}

.loser-card {
    opacity: 0.5;
}

@keyframes smashWinnerLeft {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1.2) translateX(-200px);
    }
}

@keyframes smashWinnerRight {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1.2) translateX(200px);
    }
}

@keyframes slideOutLoser {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-200px);
        opacity: 0;
    }
}

.winner-left {
    animation: smashWinnerLeft 0.5s ease forwards;
}

.winner-right {
    animation: smashWinnerRight 0.5s ease forwards;
}

.loser {
    animation: slideOutLoser 0.5s ease forwards;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<style>
/* Add media query for mobile screens */
@media (max-width: 576px) {
    .tournament-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* Two-column layout */
        gap: 8px;
        /* Space between cards */
    }

    .restaurant-card {
        /* Reduce padding */
        font-size: 0.9rem;
        /* Adjust font size */
    }

    .restaurant-card img {
        width: 40px;
        /* Smaller image */
        height: 40px;
    }

    .btn {
        font-size: 0.8rem;
        /* Smaller button text */
        padding: 4px 8px;
        /* Compact buttons */
    }
}
</style>