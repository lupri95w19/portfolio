<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref(router.currentRoute.value.path);
const currentYear = ref(new Date().getFullYear());

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
		<div class="max-w-screen-lg mx-auto px-4">
			<!-- Contenuto principale -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<!-- Sezione materiali -->
				<div class="flex flex-col items-center">
					<h3 class="text-xl font-jetbrains-mono text-[#FFD447] mb-3">Materiali</h3>
					<a
						href="/path/to/cv.pdf"
						download
						class="flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FFB347] text-black rounded transition-colors">
						<i class="fas fa-file-download"></i>
						<span>Scarica il mio CV</span>
					</a>
				</div>

				<!-- Sezione social -->
				<div class="flex flex-col items-center">
					<h3 class="text-xl font-jetbrains-mono text-[#FFD447] mb-4">Social</h3>
					<div class="flex gap-4">
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
				<div class="flex flex-col items-center md:items-end">
					<h3 class="text-xl font-jetbrains-mono text-[#FFD447] mb-4">Navigazione</h3>
					<nav class="flex flex-col items-center md:items-end space-y-2">
						<router-link
							to="/"
							class="hover:text-[#FFB347] transition-colors"
							:class="{ 'text-[#FF8C00]': currentRoute === '/' }">
							Home
						</router-link>
						<router-link
							to="/dev"
							class="hover:text-[#FFB347] transition-colors"
							:class="{ 'text-[#FF8C00]': currentRoute === '/dev' }">
							Sviluppo
						</router-link>
						<router-link
							to="/graphic"
							class="hover:text-[#FFB347] transition-colors"
							:class="{ 'text-[#FF8C00]': currentRoute === '/graphic' }">
							Grafica
						</router-link>
					</nav>
				</div>
			</div>

			<!-- Copyright -->
			<div class="mt-12 pt-6 border-t border-[#ffffff10] text-center">
				<p class="text-sm text-[#ffffff80]">&copy; {{ currentYear }} Luca Privitera. Tutti i diritti riservati.</p>
			</div>
		</div>
	</footer>
</template>

<style scoped></style>
