<template>
    <div>
        <h1 class="text-primary mb-4 text-center">Find Your Next Meal</h1>
        <div class="d-flex justify-content-center mb-4 flex-lg-row flex-column">
            <input v-model="searchLocation" type="text" class="form-control me-2" placeholder="Enter a location"
                   style="max-width: 300px;" />
            <select v-model="priceFilter" class="form-select me-2" style="max-width: 150px;">
                <option value="">Any Price</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
            <button class="btn btn-primary me-2 px-4 py-2 rounded-pill" @click="fetchNearbyRestaurants">
                <i class="bi bi-search me-2"></i>Find Restaurants
            </button>
            <button class="btn btn-outline-secondary px-4 py-2 rounded-pill" @click="clearDatabase">
                <i class="bi bi-trash me-2"></i>Clear List
            </button>
        </div>

        <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">Finding restaurants near you...</p>
        </div>

        <div v-else-if="restaurants.length" class="restaurant-grid">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.place_id" :restaurant="restaurant"
                                @disable="disableRestaurant" />
            </div>
        </div>

        <div v-if="disabledRestaurants.length" class="mt-5">
            <h2 class="text-secondary mb-4 text-center">Disabled Restaurants</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <DisabledRestaurantCard v-for="restaurant in disabledRestaurants" :key="restaurant.place_id"
                                        :restaurant="restaurant" />
            </div>
        </div>

        <div v-else class="text-center py-5 bg-white rounded shadow-sm">
            <i class="bi bi-info-circle fs-1 text-secondary"></i>
            <p class="mt-3">No restaurants found. Click "Find Restaurants" to discover places near you!</p>
        </div>
    </div>
</template>

<script>
import db from '../db';
import GooglePlacesService from '../services/GooglePlacesService';
import RestaurantCard from './RestaurantCard.vue';
import DisabledRestaurantCard from './DisabledRestaurantCard.vue';

export default {
    components: {
        RestaurantCard,
        DisabledRestaurantCard
    },
    data() {
        return {
            restaurants: [],
            disabledRestaurants: [],
            loading: false,
            searchLocation: "College Station, TX",
            priceFilter: "" // New property for price filtering
        };
    },
    async created() {
        await this.loadRestaurants();
    },
    methods: {
        async loadRestaurants() {
            const allRestaurants = await db.restaurants.toArray();
            this.restaurants = allRestaurants.filter(r => !r.disabled);
            this.disabledRestaurants = allRestaurants.filter(r => r.disabled);
        },
        async fetchNearbyRestaurants() {
            this.loading = true;
            const places = await GooglePlacesService.searchRestaurants(this.searchLocation);
            const newRestaurants = places.filter(place => {
                const exists = this.restaurants.some(r => r.place_id === place.id);
                const matchesPrice = this.priceFilter ? place.priceLevel === parseInt(this.priceFilter) : true;
                return !exists && matchesPrice;
            }).map(place => {
                let photoUrl = place.photos[0]?.getURI({ maxWidth: 400, maxHeight: 300 });
                return {
                    place_id: place.id,
                    name: place.displayName || 'Unknown',
                    rating: place.rating || 'N/A',
                    address: place.formattedAddress || 'Unknown',
                    photoUrl: photoUrl,
                    price_level: place.priceLevel || 0,
                    type: place.primaryTypeDisplayName || 'Unknown',
                    disabled: false
                };
            });

            await Promise.all(newRestaurants.map(restaurant => db.restaurants.add(restaurant).catch(error => {
                if (error.name === 'ConstraintError') {
                    console.warn(`Duplicate restaurant skipped: ${restaurant.place_id}`);
                } else {
                    console.error('Error adding restaurant:', error);
                }
            })));
            await this.loadRestaurants();

            this.loading = false;
        },
        async clearDatabase() {
            try {
                await db.restaurants.clear();
                this.restaurants = [];
                console.log('Database cleared successfully.');
            } catch (error) {
                console.error('Error clearing the database:', error);
            }
        },
        async disableRestaurant(restaurant) {
            const updatedCount = await db.restaurants.update(restaurant.place_id, { disabled: true });
            if (updatedCount === 0) {
                console.error('Update failed: No record found with place_id:', restaurant.place_id);
                return;
            }

            this.restaurants = this.restaurants.filter(r => r.place_id !== restaurant.place_id);
            this.disabledRestaurants.push({ ...restaurant, disabled: true });
        }
    }
};
</script>

<style scoped>
.restaurant-grid {
    max-width: 1200px;
    margin: 0 auto;
}
</style>