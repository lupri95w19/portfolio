import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Graphic from '../views/GraphicWorks.vue';
import Dev from '../views/DevWorks.vue';

// import Aboutfrom '../views/About.vue'

const routes = [
	{
		path: '/',
		component: Home,
		meta: {
			title: 'Luca Privitera',
		},
	},
	{
		path: '/graphic',
		component: Graphic,
		meta: {
			title: 'Luca Privitera - Lavori da graphic designer',
		},
	},
	{
		path: '/dev',
		component: Dev,
		meta: {
			title: 'Luca Privitera - Lavori da Developer',
		},
	},
	//   { path: '/about', component: About }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// Se la route ha un hash (es. #section), scrolla a quell'elemento
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
				top: 100, // Offset per l'header
			};
		}
		// Se c'è una posizione salvata (tasto indietro/avanti), usala
		else if (savedPosition) {
			return savedPosition;
		}
		// Altrimenti scrolla in cima
		else {
			return { top: 0, behavior: 'smooth' };
		}
	},
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	next();
});

export default router;
