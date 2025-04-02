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
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	next();
});

export default router;
