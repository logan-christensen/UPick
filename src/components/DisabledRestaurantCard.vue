<template>
    <div class="card h-100 restaurant-card shadow-sm">
        <div class="restaurant-image-container">
            <img v-if="restaurant.photoUrl" :src="restaurant.photoUrl" :alt="restaurant.name"
                 class="card-img-top restaurant-image" />
            <div v-else class="restaurant-placeholder d-flex align-items-center justify-content-center">
                <i class="bi bi-image text-secondary" style="font-size: 2rem;"></i>
            </div>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">{{ restaurant.name }}</h5>
                <span class="badge bg-secondary rounded-pill">Disabled</span>
            </div>
            <p class="card-text text-muted small mb-2">{{ restaurant.address }}</p>
        </div>
    </div>
</template>

<script>
export default {
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
}

.restaurant-image-container {
    height: 180px;
    overflow: hidden;
}

.restaurant-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.restaurant-placeholder {
    width: 100%;
    height: 100%;
    background-color: #f8f9fa;
}
</style>