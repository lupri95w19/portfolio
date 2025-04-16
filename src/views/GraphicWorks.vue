<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

// Fix pdf
const isMobile = ref(false);

const checkMobile = () => {
	isMobile.value = true;
};

onMounted(() => {
	checkMobile();
	window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', checkMobile);
});

// Modale
import Modal from '../components/Modal.vue';

const modalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
	selectedProject.value = project;
	modalOpen.value = true;
};

const closeModal = () => {
	modalOpen.value = false;
	currentImage.value = 0;
	selectedProject.value = null;
};

const currentImage = ref(0);

const nextImage = () => {
	if (selectedProject.value) {
		currentImage.value = (currentImage.value + 1) % selectedProject.value.images.length;
	}
};

const prevImage = () => {
	if (selectedProject.value) {
		currentImage.value =
			(currentImage.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length;
	}
};

// Store
import { useProjectStore } from '@/stores/graphicStore'; // importi lo store
const graphicStore = useProjectStore(); // ← Usa lo stesso nome dell'export, presente nello store

const currentPage = ref(1); // Pagina corrente
const projectsPerPage = 6; // Numero di progetti per pagina

// Calcola i progetti da mostrare in base alla pagina corrente
const paginatedProjects = computed(() => {
	const start = (currentPage.value - 1) * projectsPerPage;
	return graphicStore.projects.slice(start, start + projectsPerPage);
});

// Calcola il numero totale di pagine
const totalPages = computed(() => {
	return Math.ceil(graphicStore.projects.length / projectsPerPage);
});

// Funzioni per cambiare pagina
const goToPage = (page) => {
	if (page >= 1 && page <= totalPages.value) {
		currentPage.value = page;
	}
};

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTimeout(() => {
			currentPage.value++;
		}, 500);
	}
};

const prevPage = () => {
	if (currentPage.value > 1) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTimeout(() => {
			currentPage.value--;
		}, 500);
	}
};
</script>

<template>
	<div class="w-screen">
		<section id="works" class="flex flex-col justify-center bg-[#E5E7EB]">
			<div class="text-lg px-4 sm:px-32 md:px-24 lg:px-8">
				<h1 class="mt-32 mb-42 text-center text-black">I miei lavori come graphic designer</h1>
			</div>
			<Header />
			<div
				class="max-w-screen-lg container m-auto text-black flex flex-col justify-center place-items-center px-4 sm:px-32 md:px-24 lg:px-8">
				<!-- Card Dev e Card Grafico -->
				<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<!-- Loop attraverso i progetti -->
					<div
						v-for="project in paginatedProjects"
						:key="project.id"
						class="flex flex-col place-items-center md:hover:scale-105 transition ease-in-out hover:shadow-2xl">
						<!-- Card Progetto -->
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col w-full">
							<!-- Sezione Immagine -->
							<div
								:class="[8, 9].includes(project.id) ? 'flex items-center justify-center' : ``"
								class="flex-shrink-0 rounded-t-lg bg-black">
								<a class="h-100 flex overflow-hidden cursor-pointer">
									<img
										@click="openModal(project)"
										:class="[project.specialClass]"
										class="w-full lg:object-center rounded-t-lg"
										v-lazy="{
											src: project.image,
											error: project.imgpre + `<p class='text-red-500'>ciao</p>`,
											loading: project.imgpre,
										}"
										:alt="project.title" />
								</a>
							</div>

							<!-- Sezione Contenuto -->
							<div class="p-5 flex-grow flex flex-col h-[676px] sm:h-[476px] md:h-[660px] lg:h-[676px]">
								<div class="h-[120px]">
									<a href="#">
										<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-[64px]">
											{{ project.title }}
										</h2>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white h-[56px]">
											{{ project.subtitle }}
										</h3>
									</a>
								</div>

								<p class="mb-2 mt-2 font-normal text-gray-700 dark:text-gray-400">{{ project.paragraph1 }}</p>
								<p class="mb-4 font-normal text-gray-700 dark:text-gray-400">{{ project.paragraph2 }}</p>

								<!-- Bottone -->
								<button
									id="complete"
									@click="openModal(project)"
									type="button"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#C06E52] rounded-lg focus:ring-4 focus:outline-none">
									Progetto completo
								</button>

								<div class="h-[136px]">
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

					<!-- Modale -->
					<Modal :show="modalOpen" @close="closeModal">
						<template v-if="selectedProject">
							<div class="relative w-full">
								<!-- Immagine corrente -->
								<!-- Se è un'immagine -->
								<div class="flex justify-center">
									<img
										v-if="selectedProject.images[currentImage].type === 'image'"
										:src="selectedProject.images[currentImage].src"
										class="md:h-[700px] h-[50vh] object-contain transition-all duration-300 mx-16 px-4"
										alt="Media" />

									<!-- Se è un PDF -->
									<iframe
										v-if="selectedProject.images[currentImage].type === 'pdf' && !isMobile"
										:src="selectedProject.images[currentImage].src"
										class="md:h-[700px] object-contain transition-all duration-300 mx-16 px-4"
										frameborder="0"></iframe>

									<!-- Link su mobile -->
									<a
										v-else-if="selectedProject.images[currentImage].type === 'pdf' && isMobile"
										:href="selectedProject.images[currentImage].src"
										target="_blank"
										class="md:h-[700px] object-contain transition-all duration-300 mx-16 text-center text-red-500 flex items-center px-4">
										<span>
											Apri il PDF
											<i class="fa-solid fa-file-pdf"></i>
										</span>
									</a>
								</div>

								<!-- Indicatori -->
								<div
									class="flex justify-center mt-4 space-x-2 mt-0 pt-4 bg-[#191919]"
									style="margin-top: 0px !important">
									<div
										v-for="(img, index) in selectedProject.images"
										:key="index"
										@click="currentImage = index"
										class="w-3 h-3 rounded-full cursor-pointer transition-colors"
										:class="currentImage === index ? 'bg-blue-500' : 'bg-gray-300'"></div>
								</div>

								<!-- Frecce -->
								<button
									@click="prevImage"
									class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-r">
									‹
								</button>
								<button
									@click="nextImage"
									class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-l">
									›
								</button>
							</div>
							<div class="text-white bg-[#191919] px-4 pt-4 pb-4">
								<h2 class="text-2xl font-bold mb-2">{{ selectedProject.title }}</h2>
								<h3 class="text-lg mb-4">{{ selectedProject.subtitle }}</h3>
								<p class="mb-2">{{ selectedProject.paragraph1 }}</p>
								<p class="mb-4">{{ selectedProject.paragraph2 }}</p>
								<!-- Puoi mettere anche immagine, tag, ecc. -->
							</div>
						</template>
					</Modal>
				</div>

				<!-- Paginazione -->
				<div class="w-full text-xs mt-10 flex justify-center items-center">
					<!-- Bottone Precedente -->
					<button
						@click="prevPage"
						:disabled="currentPage === 1"
						class="px-4 py-2 text-white rounded-md btn custom-bg customButton"
						type="button">
						Precedente
					</button>

					<!-- Numero di Pagina -->
					<h2 class="mx-2 sm:mx-4 text-lg text-center">Pagina {{ currentPage }} di {{ totalPages }}</h2>

					<!-- Bottone Successivo -->
					<button
						@click="nextPage"
						:disabled="currentPage === totalPages"
						class="px-4 py-2 bg-[#181818] text-white rounded-md customButton"
						type="button">
						Successivo
					</button>
				</div>

				<div class="w-full sm:w-96 text-xs mt-48 mb-80 flex justify-center flex-col">
					<h1 class="text-black mb-4 w-full text-center">Controlla anche i miei lavori da Developer</h1>
					<router-link to="/dev" class="inline-flex flex flex-col place-items-center sm:px-0 px-8">
						<div class="w-full border bg-[#303031] rounded-md shadow-lg h-[318px]">
							<!-- Header -->
							<div class="flex justify-end items-center bg-[#161616] px-4 py-2 text-sm font-semibold rounded-md">
								<div class="flex gap-2 text-[#E5E7EB] place-items-center">
									<div>&#x2212;</div>
									<div><i class="fa-regular fa-square text-xs"></i></div>
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
	object-fit: cover;
}

img[lazy='error']::before {
	content: 'Error image not found';
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

#complete {
	background: #c06e52;
}
</style>
