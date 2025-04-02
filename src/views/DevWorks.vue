<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';

import { useProjectStoreDev } from '@/stores/devStore';
const projectStore = useProjectStoreDev();
</script>

<template>
	<div class="w-screen">
		<section id="works" class="flex flex-col justify-center bg-[#E5E7EB]">
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
					<div v-for="project in projectStore.projects" :key="project.id" class="col-span-4 flex flex-col">
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
										:src="project.image"
										:alt="project.title" />
								</a>
							</div>

							<!-- Sezione Contenuto -->
							<div class="p-5 flex-grow flex flex-col">
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
			</div>
			<Header />
		</section>

		<!-- Pallino 
        -->
		<div class="flex flex-col justify-center place-items-center">
			<div class="top-10 h-18 w-1 bg-yellow-500 translate-y-[1px]"></div>
			<div class="w-10 h-10 bg-green-500 rounded-full -translate-y-[60px]"></div>
		</div>
	</div>
</template>

<style scoped>
#header {
	box-shadow: 0px 3.2px 8px 8px rgba(0, 0, 0, 0.05);
}
</style>
