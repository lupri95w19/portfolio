<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref(router.currentRoute.value.path);
const currentYear = ref(new Date().getFullYear());
const isMobile = ref(false);
const selectedPdf = ref(null);

const checkMobile = () => {
	isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
	checkMobile();
	window.addEventListener('resize', checkMobile);
});

const showPdf = (pdfUrl, title) => {
	selectedPdf.value = { url: pdfUrl, title };
};

const closePdf = () => {
	selectedPdf.value = null;
};

watch(
	() => router.currentRoute.value.path,
	(newPath) => {
		currentRoute.value = newPath;
	}
);
</script>

<template>
	<footer
		:class="[currentRoute === '/graphic' ? 'bg-[#191716]' : 'bg-[#0A1128]', 'transition-colors duration-500']"
		class="w-full py-12 z-10 border-t border-[#ffffff10]">
		<!-- h-[322px] -->
		<div
			class="max-w-screen-lg mx-auto px-4"
			:class="[currentRoute === '/graphic' ? 'bg-[#191716]' : 'bg-[#0A1128]', 'transition-colors duration-500']">
			<!-- Contenuto principale -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Sezione materiali -->
				<div class="flex flex-col items-center">
					<h3 class="text-xl font-jetbrains-mono text-[#FFD447] mb-6">Materiali</h3>
					
					<!-- PDF Desktop -->
					<a
						v-if="!isMobile"
						@click="showPdf('/LucaAgatinoPriviteraCV.pdf', 'CV di Luca Privitera')"
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors mb-6 cursor-pointer">
						<i class="fas fa-file-download"></i>
						<span>Mio CV</span>
					</a>
					
					<!-- PDF Mobile -->
					<a
						v-else
						href="/LucaAgatinoPriviteraCV.pdf"
						target="_blank"
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors mb-6">
						<i class="fas fa-file-download"></i>
						<span class="text-center">Mio CV</span>
					</a>

					<!-- PDF Desktop -->
					<a
						v-if="!isMobile"
						@click="showPdf('/AttestatoCodingWeek.pdf', 'Attestato Coding Week')"
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors mb-6 cursor-pointer">
						<i class="fas fa-file-download"></i>
						<span class="text-center">Attestato Coding Week</span>
					</a>
					
					<!-- PDF Mobile -->
					<a
						v-else
						href="/AttestatoCodingWeek.pdf"
						target="_blank"
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors mb-6">
						<i class="fas fa-file-download"></i>
						<span class="text-center">Attestato Coding Week</span>
					</a>

					<!-- PDF Desktop -->
					<a
						v-if="!isMobile"
						@click="showPdf('/AttestatoCorso.pdf', 'Attestato Master')"
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors mb-6 cursor-pointer">
						<i class="fas fa-file-download m"></i>
						<span class="text-center">Attestato Master</span>
					</a>
					
					<!-- PDF Mobile -->
					<a
						v-else
						href="/AttestatoCorso.pdf"
						target="_blank"
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors mb-6">
						<i class="fas fa-file-download m"></i>
						<span class="text-center">Attestato Master</span>
					</a>
				</div>

				<!-- Sezione social -->
				<div class="flex flex-col items-center">
					<h3 class="text-xl font-jetbrains-mono text-[#FFD447] mb-4">Social</h3>
					<div class="flex gap-4 text-center">
						<a
							href="https://www.linkedin.com/in/luca-privitera-a1545a31b/"
							class="text-2xl hover:text-[#FFB347] transition-colors text-center"
							aria-label="LinkedIn"
							target="_blank">
							<i class="fab fa-linkedin-in"></i>
						</a>
						<a
							href="https://github.com/lupri95w19"
							class="text-2xl hover:text-[#FFB347] transition-colors"
							aria-label="GitHub"
							target="_blank">
							<i class="fab fa-github"></i>
						</a>
					</div>
				</div>

				<!-- Sezione navigazione -->
				<div class="flex flex-col items-center text-center">
					<h3 class="text-xl font-jetbrains-mono text-[#FFD447] mb-4">Navigazione</h3>
					<nav class="flex flex-col items-center space-y-2 text-center">
						<router-link
							to="/"
							class="hover:text-[#FFB347] transition-colors text-center"
							:class="{ 'text-[#FF8C00]': currentRoute === '/' }">
							Home
						</router-link>
						<router-link
							to="/dev"
							class="hover:text-[#FFB347] transition-colors text-center"
							:class="{ 'text-[#FF8C00]': currentRoute === '/dev' }">
							Sviluppo
						</router-link>
						<router-link
							to="/graphic"
							class="hover:text-[#FFB347] transition-colors text-center"
							:class="{ 'text-[#FF8C00]': currentRoute === '/graphic' }">
							Grafica
						</router-link>
					</nav>
				</div>
			</div>

			<!-- Copyright -->
			<div class="mt-12 pt-6 pb-6 border-t border-[#ffffff10] text-center">
				<p class="text-sm text-[#ffffff80]">&copy; {{ currentYear }} Luca Privitera. Tutti i diritti riservati.</p>
			</div>
		</div>

		<!-- Modale PDF -->
		<div
			v-if="selectedPdf"
			class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
			@click="closePdf">
			<div class="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden" @click.stop>
				<div class="flex justify-between items-center p-4 border-b">
					<h3 class="text-xl font-bold text-black">{{ selectedPdf.title }}</h3>
					<button
						@click="closePdf"
						class="text-gray-500 hover:text-gray-700 text-2xl"
						aria-label="Chiudi">
						<i class="fas fa-times"></i>
					</button>
				</div>
				<div class="p-4">
					<iframe
						:src="selectedPdf.url"
						class="w-full h-[70vh]"
						frameborder="0"></iframe>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped></style>
