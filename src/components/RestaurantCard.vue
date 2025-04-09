<template>
    <div class="card h-100 restaurant-card shadow-sm">
        <div class="card-body">
            <div class="d-flex flex-row">
                <!-- Image Section -->
                <div class="restaurant-image-container">
                    <img v-if="restaurant.photoUrl" :src="restaurant.photoUrl" :alt="restaurant.name"
                         class="restaurant-image shadow" />
                    <div v-else class="restaurant-placeholder d-flex align-items-center justify-content-center">
                        <i class="bi bi-image text-secondary" style="font-size: 2rem;"></i>
                    </div>
                </div>
                <!-- Description Section -->
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">{{ restaurant.name }}</h5>
                        <span class="badge bg-success rounded-pill">{{ restaurant.rating }} ★</span>
                    </div>
                    <!-- Address: Show full text on larger screens, icon with tooltip on smaller screens -->
                    <p class="card-text text-muted small mb-2">{{ restaurant.address }}</p>

                    <div class="d-flex justify-content-between align-items-center actions">
                        <small class="badge bg-secondary">{{ restaurant.type }}</small>
                        <span v-if="restaurant.price_level" class="small">
                            {{ getPriceLevel(restaurant.price_level) }}
                        </span>
                        <span v-else class="small text-muted">Price N/A</span>
                        <slot name="stats"></slot>
                    </div>

                </div>
            </div>
        </div>
        <!-- Actions Section -->
        <div class="card-footer">
            <div class="d-flex flex-row gap-2 flex-lg-column flex-sm-row justify-content-between">
                <slot name="action"></slot>
                <button class="btn btn-danger btn-sm mt-2 mt-sm-0" @click="disable">
                    Disable
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        disable() {
            if (confirm(`Are you sure you want to disable ${this.restaurant.name}?`)) {
                this.$emit('disable', this.restaurant);
            }
        },
        getPriceLevel(priceLevel) {
            switch (priceLevel) {
                case 'INEXPENSIVE':
                    return '$';
                case 'MODERATE':
                    return '$$';
                case 'EXPENSIVE':
                    return '$$$';
                case 'VERY_EXPENSIVE':
                    return '$$$$';
                case 'CHEAP':
                    return '$';
                default:
                    return 'N/A';
            }
        }
    },
    props: {
        restaurant: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.restaurant-card {
    transition: all 0.3s ease;
    border: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.restaurant-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.restaurant-image-container {
    width: 150px;
    height: auto;
    overflow: hidden;
    flex-shrink: 0;
    padding: 6px;
}

.restaurant-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border-radius: 1px solid grey;


    object-fit: cover;
    transition: transform 0.5s ease;
}

.restaurant-card:hover .restaurant-image {
    transform: scale(1.05);
}

.restaurant-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f8f9fa;
}

.card-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    font-size: 16px;

}

.card-text {
    justify-content: flex-start;
    text-align: start;
}


.actions p {
    margin-bottom: 0;
    padding-bottom: 0;
}

.btn-outline-primary {
    width: 32px;
    height: 32px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Responsive adjustments */
@media (max-width: 576px) {
    .restaurant-card {

        .card-footer {}
    }

    .restaurant-image-container {
        width: 64px;
    }

    .card-title {
        max-width: 100%;
    }
}
</style>