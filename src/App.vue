<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <nav class="navbar navbar-light bg-white sticky-top shadow">
      <div class="container justify-content-between text-center py-2">
        <div class="d-flex align-items-center">
          <img src="/logo.png" alt="UPick Logo" width="60" height="60" class="me-3">
          <a class="navbar-brand fs-2 fw-bold text-primary m-0" href="#">UPick</a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="ms-auto">
            <router-link to="/" class="btn btn-outline-primary me-2">Manage Restaurants</router-link>
            <router-link to="/tournament" class="btn btn-outline-success">Tournament</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Animated Background Shapes -->
    <div class="background-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Main Content -->
    <div class="container mt-4 position-relative flex-grow-1">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="bg-primary text-white text-center py-3 mt-auto">
      <p class="mb-0">© 2025 UPick. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import FetchRestaurants from './components/FetchRestaurants.vue';

export default defineComponent({
  name: 'App',
  components: {
    FetchRestaurants
  }
});
</script>

<style>
/* Custom styles for the app */
body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  background-color: #f8f9fa;
  /* Light background color */
}

/* Animated background shapes - Updated for fixed positioning */
.background-shapes {
  position: fixed;
  /* Change from absolute to fixed */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
  /* Ensures clicks pass through the shapes */
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
}

.shape-1 {
  background-color: var(--bs-secondary);
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: float 8s ease-in-out infinite;
}

.shape-2 {
  background-color: var(--bs-success);
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: -100px;
  animation: float 12s ease-in-out infinite reverse;
}

.shape-3 {
  background-color: var(--bs-primary);
  width: 150px;
  height: 150px;
  top: 40%;
  right: -75px;
  animation: float 10s ease-in-out infinite 2s;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
}

/* Add hover effects to buttons */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Add hover effects to restaurant items */
.list-group-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 8px;
  border-left: 4px solid transparent;
}

.list-group-item:hover {
  transform: translateX(5px);
  border-left: 4px solid var(--bs-secondary);
  background-color: rgba(255, 111, 60, 0.05);
}
</style>