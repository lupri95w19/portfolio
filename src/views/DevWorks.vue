<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useProjectStoreDev } from '@/stores/devStore' // importi lo store
const devStore = useProjectStoreDev() // ← Usa lo stesso nome dell'export, presente nello store
</script>

<template>
	<div class="w-screen">
		<section id="works" class="flex flex-col justify-center bg-[#E5E7EB]">
			<Header />
			<div class="text-lg">
				<h1 class="mt-32 mb-42 text-center text-black">I miei lavori come Developer</h1>
			</div>

			<div class="max-w-screen-lg container m-auto text-black flex flex-col justify-center place-items-center">
				<!-- Card Dev e Card Grafico -->
				<!--  -->
				<!--  -->
				<!--  -->
				<div class="grid grid-cols-12 gap-20">
					<!-- Loop attraverso i progetti -->
					<div v-for="project in devStore.projects" :key="project.id" class="col-span-4 flex flex-col">
						<!-- Card Progetto -->
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<!-- Sezione Immagine -->
							<div
								:class="[8, 9].includes(project.id) ? 'flex items-center justify-center' : ``"
								class="flex-shrink-0 rounded-t-lg bg-black">
								<!-- Prima c'era overflow-hidden -->
								<!-- Prima avevo aggiunto anche h-[405px] -->
								<a class="h-100 flex" href="#">
									<img
										:class="[8, 9].includes(project.id) ? 'object-contain' : 'object-cover rounded-t-lg'"
										class="w-full object-center"
										v-lazy="project.image"
										:alt="project.title" />
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
					<h1 class="text-black mb-4 w-full text-center">Controlla anche i miei lavori da grafico</h1>
					<router-link to="/graphic" class="inline-flex flex flex-col place-items-center">
						<div class="w-96 border bg-[#181818] rounded-md shadow-lg h-[318px]">
							<!-- Header -->

							<div class="flex justify-between items-center bg-black px-4 py-2 text-sm font-semibold rounded-md">
								<div class="flex gap-2 text-[#E5E7EB]">
									<span class="w-3 h-3 bg-red-500 rounded-full"></span>
									<span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
									<span class="w-3 h-3 bg-green-500 rounded-full"></span>
								</div>
							</div>
							<div class="p-0 flex items-center justify-center h-[290px]">
								<img
									class="max-h-full object-contain p-8 transition-transform duration-300 hover:scale-110 ease-[cubic-bezier(0,0,0.618,1)]"
									src="/monogramma.svg"
									alt="monogramma graphic design" />
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
</style>
