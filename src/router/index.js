import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Aboutfrom '../views/About.vue'

const routes = [
	{
		path: "/",
		component: Home,
		meta: {
			title: "Home",
		},
	},
	//   { path: '/about', component: About }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `$(to.meta.title)`;
	next();
});

export default router;
