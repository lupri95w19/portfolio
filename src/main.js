import { createApp } from 'vue';

// Aggiunto usare lo store offerto da pinia
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '@fontsource/inter';
import '@fontsource/jetbrains-mono';

const app = createApp(App);
// Crea l'istanza di Pinia
const pinia = createPinia();

// Registra il plugin
app.use(pinia); // Prima Pinia
app.use(router); // Dopo Router
app.mount('#app');
