import { createApp } from 'vue';

// Aggiunto usare lo store offerto da pinia
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '@fontsource/inter';
import '@fontsource/jetbrains-mono';

// Questa parte serve per il lazy load images: https://github.com/hilongjw/vue-lazyload/tree/next
import VueLazyloadNext from 'vue-lazyload-next';

const app = createApp(App);
// Crea l'istanza di Pinia
const pinia = createPinia();

// Registra il plugin
app.use(pinia); // Prima Pinia
app.use(router); // Dopo Router

// Questa parte serve per il lazy load images: https://github.com/hilongjw/vue-lazyload/tree/next
import { useProjectStore } from '@/stores/graphicStore'; // importi lo store
const useProjectStoreFin = useProjectStore();

const loadingImage = useProjectStoreFin.loadingImagePath; // Accedi allo stato
const errorImage = useProjectStoreFin.imgpre;

//Serve per il lazy load images
app.use(VueLazyloadNext, {
	preLoad: 1.3,
	loading: loadingImage,
	error: errorImage,
	attempt: 1,
	observer: true,
	observerOptions: {
		rootMargin: '400px',
		threshold: 0.1,
	},
});

import { useProjectStoreDev } from '@/stores/devStore'; // importi lo store
const useWebStoreFin = useProjectStoreDev();

const loadingImageWeb = useWebStoreFin.loadingImagePath; // Accedi allo stato
const errorImageWeb = useWebStoreFin.imgpre;

app.use(VueLazyloadNext, {
	preLoad: 1.3,
	loading: loadingImageWeb,
	error: errorImageWeb,
	attempt: 1,
	observer: true,
	observerOptions: {
		rootMargin: '400px',
		threshold: 0.1,
	},
});

/// IN QUALCHE MODO FUNZIONA SIA DA DEV CHE DA GRAPHIC USANDO V-LAZY NON TOCCARE PER NESSUN MOTIVO

app.mount('#app');
