<script setup>
import Header from "./components/Header.vue";
import { ref } from "vue";
</script>

<template>
	<div class="w-screen">
		<Header />
		<div class="max-w-screen-lg container m-auto">
			<div class="grid grid-cols-12 mb-4 gap-4">
				<div class="col-span-4"></div>
				<div class="col-span-8">
					<div class="flex items-end">
						<div class="hidden_blinking_ball opacity-0 scale-50"></div>
						<h3 class="text-xl">Attualmente</h3>
					</div>

					<div class="flex items-end">
						<div class="blinking-ball scale-50"></div>
						<h2 class="text-3xl">In cerca di lavoro</h2>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-12 gap-4">
				<!-- Telefono -->
				<div
					class="relative w-[300px] h-[600px] bg-black rounded-[40px] p-6 shadow-xl border-4 border-gray-700 col-span-4"
				>
					<!-- Speaker & Camera -->
					<div
						class="absolute top-3 left-1/2 -translate-x-1/2 w-[96px] h-[22px] bg-gray-700 rounded-full"
					></div>

					<!-- Contenuto dello schermo -->
					<div
						class="h-full flex flex-col justify-baseline items-center text-center p-6 mt-12"
					>
						<h2 class="text-2xl font-bold">Benvenuto</h2>
						<p class="text-lg mt-2">Iniziamo un nuovo progetto insieme!</p>
						<a
							href="https://www.linkedin.com/in/luca-privitera-a1545a31b/"
							class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-3 py-3 mt-4 max-w-max"
							 target="_blank" rel="noopener noreferrer"
						>
							Contattami
							<i class="fa-brands fa-linkedin"></i>
						</a>
						<img class="p-4 mt-8" src="/Io.png" alt="">
					</div>
					<div
						class="absolute bottom-3 left-1/2 -translate-x-1/2 w-[96px] h-[5px] bg-gray-700 rounded-full"
					></div>
				</div>

				<!-- Terminale -->
				<div
					class="bg-[#2D2D2D] text-white font-mono p-0 rounded-lg col-span-8 w-full shadow-lg border border-gray-700 rounded-t-lg bg-[#181818] h-full"
				>
					<!-- Barra superiore -->
					<div class="flex items-center space-x-2 p-4 bg-black rounded-t-lg">
						<div class="w-3 h-3 bg-red-500 rounded-full"></div>
						<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
						<div class="w-3 h-3 bg-green-500 rounded-full"></div>
					</div>

					<!-- Testo terminale -->
					<div
						class="text-lg leading-relaxed p-4 overflow-y-auto h-[calc(100%-80px)]"
					>
						<p>Ciao! Io sono Luca</p>
						<p>In breve posso definirmi così:</p>
						<!-- Lista -->
						<ul class="mt-4 text-white">
							<li>✅ Web Developer</li>
							<li>✅ FE Lover</li>
							<li>✅ PC Gamer <i class="fa-brands fa-steam"></i></li>
						</ul>

						<!-- Visualizza il contenuto dinamico del terminale -->
						<div v-for="(line, index) in terminalOutput" :key="index">
							<p
								:class="{
									'text-green-400': line.type === 'command',
									'text-white': line.type === 'output',
								}"
							>
								{{ line.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Animazione per lampeggiare da verde normale a verde intenso */
@keyframes blinking {
	0%,
	100% {
		background-color: #28a745; /* Verde normale */
		box-shadow: 0 0 5px #28a745, 0 0 15px #28a745; /* Bagliore verde normale */
		transform: scale(1); /* Dimensione normale */
	}
	50% {
		background-color: #00ff00; /* Verde più intenso */
		box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00; /* Bagliore più forte */
		transform: scale(
			1.2
		); /* Aumenta leggermente la dimensione per simulare "l'accensione" */
	}
}

/* Applicazione dell'animazione alla pallina */
.blinking-ball {
	width: 30px; /* Dimensione della pallina */
	height: 30px; /* Dimensione della pallina */
	background-color: #28a745; /* Colore di base (verde normale) */
	border-radius: 50%; /* Rende l'elemento una pallina */
	animation: blinking 1s infinite; /* Lampeggio continuo */
	transition: all 0.2s ease-in-out; /* Transizione morbida */
}
.hidden_blinking_ball{
	width: 15px; /* Dimensione della pallina */
	height: 15px; /* Dimensione della pallina */
	visibility: hidden;
}

</style>
