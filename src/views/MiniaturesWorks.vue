<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import OtherJobs from '../components/OtherJobs.vue';
import paginate from '../components/Paginate.vue';

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
import Modal from '../components/Modal-vertical.vue';

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

import { useMiniatureStoreDev } from '@/stores/miniStore'; // importi lo store
import Paginate from '../components/Paginate.vue';
const miniStore = useMiniatureStoreDev(); // ← Usa lo stesso nome dell'export, presente nello store

const currentPage = ref(1); // Pagina corrente
const projectsPerPage = 12; // Numero di progetti per pagina

// Calcola i progetti da mostrare in base alla pagina corrente
const filteredProjects = computed(() => {
	if (!debouncedQuery.value) return miniStore.projects;

	const words = debouncedQuery.value.toLowerCase().split(" ");


	return miniStore.projects.filter((p) => {
		const title = p.title?.toLowerCase() || '';
		const subtitle = p.subtitle?.toLowerCase() || '';
		const tags = p.tags?.map((t) => t.toLowerCase()) || [];

		// ogni parola deve essere trovata in almeno uno dei campi
		return words.every(
			(word) => title.includes(word) || subtitle.includes(word) || tags.some((tag) => tag.includes(word)),
		);
	});
});

const paginatedProjects = computed(() => {
	const start = (currentPage.value - 1) * projectsPerPage;
	return filteredProjects.value.slice(start, start + projectsPerPage);
});

// Calcola il numero totale di pagine
const totalPages = computed(() => {
	return Math.ceil(filteredProjects.value.length / projectsPerPage);
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
		}, 300);
	}
};

const prevPage = () => {
	if (currentPage.value > 1) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setTimeout(() => {
			currentPage.value--;
		}, 300);
	}
};

const searchQuery = ref('');
const debouncedQuery = ref('');
let debounceTimer = null;

watch(searchQuery, () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        debouncedQuery.value = searchQuery.value;
        currentPage.value = 1;
    }, 300);
});
</script>

<template>
	<div class="w-screen">
		<section id="works" class="flex flex-col justify-center bg-[#C16E70]">
			<div class="text-lg px-4 sm:px-32 md:px-24 lg:px-8">
				<h1 class="mt-32 mb-42 text-center text-black">Le mie miniature</h1>
			</div>
			<Header />
			<Paginate
				:currentPage="currentPage"
				:totalPages="totalPages"
				@prev="prevPage"
				@next="nextPage"
				@goTo="goToPage" />

			<div
				class="max-w-screen-lg container m-auto text-black flex flex-col justify-center place-items-center px-4 sm:px-32 md:px-24 lg:px-8">
				<!-- Search -->

				<div class="centered mb-10">
					<div class="search">
						<input class="w-full" v-model="searchQuery" type="text" placeholder="Cerca..." />

						<button>
							<span class="search-icon"></span>
							<label>Cerca</label>
						</button>
					</div>
				</div>

				<!-- Card Dev e Card Grafico -->
				<div class="grid grid-cols-12 md:gap-10">
					<!-- Loop attraverso i progetti -->
					<div
						v-for="project in paginatedProjects"
						:key="project.id"
						:class="[project.classCustCol]"
						class="flex flex-col place-items-center col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 md:mb-0 mb-24 md:hover:scale-105 transition ease-in-out hover:shadow-2xl">
						<!-- Card Progetto -->
						<!-- h-full prima -->
						<div
							class="border border-gray-200 rounded-lg shadow-sm bg-gray-800 border-gray-700 h-full flex flex-col w-full">
							<!-- Sezione Immagine -->
							<!-- <div
								:class="[8, 9].includes(project.id) ? 'flex items-center justify-center' : ``"
								class="flex-shrink-0 rounded-t-lg bg-black">
								<a class="h-100 flex overflow-hidden rounded-t-lg cursor-pointer">
									<img
										:class="
											(('transition-opacity duration-500',
											[6, 7].includes(project.id) ? 'object-cover object-top' : 'object-contain rounded-t-lg'),
											project.classCust ? project.classCust : '')
										"
										class="w-full object-contain object-center lg:object-center rounded-t-lg"
										@click="openModal(project)"
										v-lazy="{
											src: project.image,
											error: project.imgpre + `<p class='text-red-500'>ciao</p>`,
											loading: project.imgpre,
										}"
										:alt="project.title" />
								</a>
							</div> -->
							<div
								:class="[8, 9].includes(project.id) ? 'flex items-center justify-center' : ``"
								class="flex-shrink-0 rounded-t-lg bg-black">
								<a class="h-100 flex relative overflow-hidden rounded-t-lg cursor-pointer">
									<img
										:class="
											(('transition-opacity duration-500',
											[6, 7].includes(project.id) ? 'object-cover object-top' : 'object-contain rounded-t-lg'),
											project.classCust ? project.classCust : '')
										"
										class="w-full object-contain object-center lg:object-center rounded-t-lg z-4"
										@click="openModal(project)"
										v-lazy="{
											src: project.image,
											error: project.imgpre + `<p class='text-red-500'>ciao</p>`,
											loading: project.imgpre,
										}"
										:alt="project.title" />

									<div
										class="overflow-hidden rounded-t-lg absolute inset-0 bg-center bg-cover blur-[50px] scale-110 z-1"
										:style="`background-image: url(${project.image});`"></div>
								</a>
							</div>

							<!-- Sezione Contenuto -->
							<!-- <div class="p-5 flex-grow flex flex-col h-[676px] sm:h-[476px] md:h-[660px] lg:h-[676px]"> -->
							<div class="p-5 flex-grow flex flex-col">
								<div class="h-[120px]">
									<h2 class="mb-2 text-2xl font-bold tracking-tight text-white h-[64px]">
										{{ project.title }}
									</h2>
									<h3 class="mb-2 text-lg font-bold tracking-tight text-white h-[56px]">
										{{ project.subtitle }}
									</h3>
								</div>

								<!-- Bottone -->
								<button
									id="complete"
									@click="openModal(project)"
									type="button"
									class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#C06E52] rounded-lg focus:ring-4 focus:outline-none">
									Apri la foto
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
							<div class="relative w-full h-full">
								<!-- Immagine corrente -->
								<!-- Se è un'immagine -->
								<div class="relative flex justify-center items-center overflow-hidden h-[90%] h-full">
									<!-- Sfondo sfocato con pseudo-elemento -->
									<div
										class="absolute inset-0 z-0 bg-center bg-cover blur-[8px] scale-110 opacity-30 z-0"
										:style="`background-image: url(${selectedProject.images[currentImage].src})`"></div>

									<!-- Sfondo sfocato -->
									<div
										v-if="selectedProject.images[currentImage].type === 'image'"
										class="absolute inset-0 bg-cover bg-center blur-[8px] opacity-30 z-0 transition-all duration-300 rounded-lg w-[95%] md:w-full scale-100 m-0 p-0"
										:style="{ backgroundImage: `url(${selectedProject.images[currentImage].src})` }"></div>
									<!-- Immagine nitida in primo piano -->
									<img
										v-if="selectedProject.images[currentImage].type === 'image'"
										:src="selectedProject.images[currentImage].src"
										class="relative z-10 h-[calc(100%-24px)] object-contain transition-all duration-300 mx-16 px-4 z-0"
										alt="Media" />

									<!-- PDF Desktop -->
									<iframe
										v-if="selectedProject.images[currentImage].type === 'pdf' && !isMobile"
										:src="selectedProject.images[currentImage].src"
										class="relative z-10 h-[calc(100%-24px)] object-contain transition-all duration-300 mx-16 px-4"
										frameborder="0"></iframe>

									<!-- PDF Mobile -->
									<a
										v-else-if="selectedProject.images[currentImage].type === 'pdf' && isMobile"
										:href="selectedProject.images[currentImage].src"
										target="_blank"
										class="relative z-10 h-[calc(100%-24px)] object-contain transition-all duration-300 mx-16 text-center text-red-500 flex items-center px-4">
										<span>
											Apri il PDF
											<i class="fa-solid fa-file-pdf"></i>
										</span>
									</a>
								</div>

								<!-- Indicatori -->
								<div
									class="flex justify-center mt-4 space-x-2 mt-0 pt-4 bg-[#191919] z-100"
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
									class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-r z-100">
									‹
								</button>
								<button
									@click="nextImage"
									class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-l z-100">
									›
								</button>
							</div>
							<div class="text-white bg-[#191919] px-4 pt-4 pb-4">
								<h2 class="text-2xl font-bold pb-2">{{ selectedProject.title }}</h2>
								<h3 class="text-lg pb-4">{{ selectedProject.subtitle }}</h3>
								<p class="pb-2">{{ selectedProject.paragraph1 }}</p>
								<p class="pb-4">{{ selectedProject.paragraph2 }}</p>
								<!-- Puoi mettere anche immagine, tag, ecc. -->
							</div>
						</template>
					</Modal>
				</div>

				<Paginate
					:currentPage="currentPage"
					:totalPages="totalPages"
					@prev="prevPage"
					@next="nextPage"
					@goTo="goToPage" />

				<OtherJobs />
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

.fixGridOn1 {
	width: 286px;
}

button.customButton {
	background-color: #181818; /* Applica il colore desiderato */
	transition: 0.1s ease-in-out;
}
button.customButton:hover {
	color: #f18987;
}

#complete {
	background: #c06e52;
}









.centered {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.search {
	position: relative;
	width: 40ch;
	height: 3rem;
	padding-left: 1.5rem;
	border-radius: 1.5rem;
	background: #ffffff;
	box-shadow: 0 1.25rem 5rem -1rem rgba(0, 0, 30, 0.5);
	transition: transform 200ms ease-in-out;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		border-radius: 1.5rem;
		box-shadow: 0 0.5rem 2rem -1rem rgba(0, 0, 100, 0.5);
		opacity: 0;
		pointer-events: none;

		transition: opacity 300ms ease-in-out;
	}

	input {
		all: unset;
		height: 100%;
		color: #333355;

		&::placeholder {
			color: inherit;
			opacity: 0.3;
		}
	}

	button {
		all: unset;
		position: absolute;
		right: 0;
		height: 3rem;
		padding-left: 3rem;
		border-radius: 1.5rem;
		background: #296ec7;
		cursor: pointer;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			border-radius: 1.5rem;
			box-shadow: 0 0.5rem 2rem 0 rgb(41, 110, 199, 0.25),
				0 0.5rem 1rem -0.75rem rgb(0, 0, 0, 0.5);
			opacity: 0;
			transition: opacity 300ms ease-in-out;
		}

		&:hover::before {
			opacity: 1;
		}

		label {
			display: block;
			opacity: 0;
			color: white;
			width: 0;
			transition: width 200ms ease-in-out, opacity 100ms ease-in-out;
		}

		.search-icon {
			position: absolute;
			height: 0.875rem;
			width: 0.875rem;
			top: 1rem;
			left: 0.875rem;
			border: 0.125rem solid white;
			border-radius: 50%;
			box-sizing: border-box;
			transform: rotate(-45deg);

			&::after {
				content: "";
				position: absolute;
				height: 0.5rem;
				width: 0.125rem;
				background: white;
				left: calc(50% - (0.125rem / 2));
				bottom: -0.6rem;
			}
		}
	}

	&:has(input:not(:placeholder-shown)) {
		button {
			label {
				opacity: 1;
				width: 3rem;
				margin-left: -0.5rem;
				padding-right: 1rem;
			}
		}
	}

	&:has(input:focus) {
		transform: translateY(-0.5rem);
		&::before {
			opacity: 1;
		}
	}
}

</style>
