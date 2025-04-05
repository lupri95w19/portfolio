<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useProjectStore } from '@/stores/graphicStore'; // importi lo store
const graphicStore = useProjectStore(); // ← Usa lo stesso nome dell'export, presente nello store
</script>

<template>
	<div class="w-screen">
		<section id="works" class="flex flex-col justify-center bg-[#E5E7EB]">
			<Header />
			<div class="text-lg">
				<h1 class="mt-32 mb-42 text-center text-black">I miei lavori come graphic designer</h1>
			</div>

			<div class="max-w-screen-lg container m-auto text-black flex flex-col justify-center place-items-center">
				<!-- Card Dev e Card Grafico -->
				<!--  -->
				<!--  -->
				<!--  -->
				<div class="grid grid-cols-12 gap-20">
					<!-- Loop attraverso i progetti -->
					<div v-for="project in graphicStore.projects" :key="project.id" class="col-span-4 flex flex-col">
						<!-- Card Progetto -->
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<!-- Sezione Immagine -->
							<div
								:class="[8, 9].includes(project.id) ? 'flex items-center justify-center' : ``"
								class="flex-shrink-0 rounded-t-lg bg-black">
								<!-- Prima c'era overflow-hidden -->
								<!-- Prima avevo aggiunto anche h-[405px] -->
								<a class="h-100 flex overflow-hidden" href="#">
									<img
										:class="
											('transition-opacity duration-500',
											[8, 9].includes(project.id) ? 'object-contain' : 'object-cover rounded-t-lg')
										"
										class="w-full object-center"
										v-lazy="{
											src: project.image,
											error: project.imgpre + `<p class='text-red-500'>ciao</p>`,
											loading: project.imgpre,
										}"
										:alt="project.title" />
									<!-- 
										Quando un'immagine HTML fallisce il caricamento:

										L'elemento <img> emette un evento error
										L'evento contiene il target (l'elemento immagine stesso)
										Modificando .src si forza un cambio dell'immagine -->
								</a>
							</div>

							<!-- Sezione Contenuto -->
							<div class="p-5 flex-grow flex flex-col h-[480px]">
								<div class="h-[100px]">
									<a href="#">
										<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
											{{ project.title }}
										</h2>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
											{{ project.subtitle }}
										</h3>
									</a>
								</div>

								<p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
									{{ project.paragraph1 }}
								</p>
								<p class="mb-4 font-normal text-gray-700 dark:text-gray-400">
									{{ project.paragraph2 }}
								</p>

								<!-- Bottone -->
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Progetto completo
								</a>
								<div class="h-[88px]">
									<div class="flex flex-wrap gap-2 mt-4 pb-8">
										<span
											v-for="(tag, index) in project.tags"
											:key="index"
											class="text-xs px-2 py-1 bg-gray-100 bg-[#E5E7EB] rounded-full">
											{{ tag }}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full text-xs mt-48 mb-80 flex justify-center flex-col">
					<h1 class="text-black mb-4 w-full text-center">Controlla anche i miei lavori da Developer</h1>
					<router-link to="/dev" class="inline-flex flex flex-col place-items-center">
						<div class="w-96 border bg-[#303031] rounded-md shadow-lg h-[318px]">
							<!-- Header -->
							<div class="flex justify-end items-center bg-[#161616] px-4 py-2 text-sm font-semibold rounded-md">
								<div class="flex gap-2 text-[#E5E7EB] place-items-center">
									<div>&#x2212;</div>
									<div>&#x25FB;</div>
									<div>&#x2715;</div>
								</div>
							</div>
							<div class="p-0 flex items-center justify-center h-[282px]">
								<img
									class="max-h-full object-contain p-8 transition-all duration-500 ease-in-out hover:animate-bob"
									src="/codice.svg"
									alt="icona codice" />
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<Footer />
		</section>
	</div>
</template>

<style scoped>
#header {
	box-shadow: 0px 3.2px 8px 8px rgba(0, 0, 0, 0.05);
}

img[lazy='loading'] {
	filter: blur(16px);
	opacity: 1;
}

img[lazy='error']::before {
	content: "Error image not found";
	text-align: center;
	color: red;
	opacity: 1;
}

img[lazy='loaded'] {
	filter: none !important;
	opacity: 1;
	animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0.5;
	}
	to {
		opacity: 1;
	}
}
</style>
