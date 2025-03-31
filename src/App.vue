<script setup>
import { useRoute } from "vue-router"; // importa useRoute
import { watch, onMounted } from "vue"; // importa watch e onMounted
import Header from "./components/Header.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

// useRoute per ottenere l'accesso alla route corrente
const route = useRoute();

// Funzione per aggiornare il titolo della pagina
const updateTitle = () => {
	const title = route.meta.title;
	if (title) {
		document.title = title; // Aggiorna il titolo
	}
};

//watch per monitorare i cambiamenti della route
watch(() => route.path, updateTitle, { immediate: true });

onMounted(updateTitle);
</script>

<template>
	<!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->

	<!-- <Header />
  <HelloWorld msg="Vite + Vue" /> -->
	<router-view />
</template>

<style scoped>
</style>
