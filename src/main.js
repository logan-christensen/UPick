import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import db from './db';
import './styles/custom.scss'; // Import your SCSS file here
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(router);
app.config.globalProperties.$db = db;

app.mount('#app');