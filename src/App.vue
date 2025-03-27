<script setup>
import Header from "./components/Header.vue";
import { ref } from "vue";
</script>

<template>
	<div class="w-screen bg-[#0A1128]">
		<section
			class="h-[93.5vh] bg-[#0A1128] relative flex flex-col justify-center"
		>
			<div class="max-w-screen-lg container m-auto flex">
				<div>
					<div class="grid grid-cols-12 mb-4 gap-4">
						<div class="col-span-4"></div>
						<div class="col-span-8"></div>
					</div>

					<div class="grid grid-cols-12 gap-4">
						<!-- Telefono -->

						<!-- Questo forse va bene per i laptop
					  <div
						class="relative w-[300px] h-[600px] bg-black rounded-[40px] p-6 shadow-xl border-4 border-gray-700 col-span-4"> -->

						<div
							class="relative w-[300px] h-[600px] bg-black rounded-[40px] p-6 shadow-xl border-4 border-gray-700 col-span-4 place-self-center"
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
									target="_blank"
									rel="noopener noreferrer"
								>
									Contattami
									<i class="fa-brands fa-linkedin"></i>
								</a>
								<img class="p-4 mt-8" src="/Io.png" alt="" />
							</div>
							<div
								class="absolute bottom-3 left-1/2 -translate-x-1/2 w-[96px] h-[5px] bg-gray-700 rounded-full"
							></div>
						</div>

						<!-- Terminale -->
						<div
							class="p-0 rounded-lg col-span-8 w-full rounded-t-lg h-[550px]"
						>
							<div class="flex items-end">
								<div class="hidden_blinking_ball opacity-0 scale-50"></div>
								<h3 class="text-xl">Attualmente</h3>
							</div>

							<div class="flex items-end mb-4">
								<div class="blinking-ball scale-50"></div>
								<h2 class="text-3xl">In cerca di lavoro</h2>
							</div>

							<div
								class="bg-[#2D2D2D] text-white font-mono p-0 rounded-lg col-span-8 w-full shadow-lg border border-gray-700 rounded-t-lg bg-[#181818] h-full"
							>
								<!-- Barra superiore -->
								<div
									class="flex items-center space-x-2 p-4 bg-black rounded-t-lg"
								>
									<div class="w-3 h-3 bg-red-500 rounded-full"></div>
									<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div class="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>

								<!-- Testo terminale -->
								<div
									class="text-lg leading-relaxed p-4 overflow-y-auto h-[calc(100%-80px)] relative"
								>
									<p>Ciao! Io sono Luca</p>
									<p>In breve posso definirmi così:</p>
									<!-- Lista -->
									<ul class="ms-8 text-white">
										<li>✅ Web Developer</li>
										<li>✅ FE Lover</li>
										<li>✅ PC Gamer <i class="fa-brands fa-steam"></i></li>
									</ul>

									<p class="mt-8 absolute bottom-0">
										Se vuoi saperne di più scrolla pure sotto
										<i class="fa-solid fa-turn-down"></i> 😉
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Header />

		<section class="h-[100vh] flex flex-col justify-center bg-[#E5E7EB]">
			<div class="max-w-screen-lg container m-auto">
				<div class="grid grid-cols-12 gap-8 h-[700px] text-black relative">
					<div class="col-span-5 h-full relative">
						<img
							src="/lucae.jpg"
							class="w-full h-full object-cover rounded rounded-[30px]"
							alt="Luca at the graduation"
						/>
						<div
							class="absolute -left-20 top-50 flex flex-col items-center rotate-320"
						>
							<p>Questo sono io</p>
							<i
								class="fa-solid fa-arrow-turn-down scale-x-[-1] rotate-280"
							></i>
						</div>
					</div>
					<div class="col-span-7 text-lg relative">
						<h1>Su di me</h1>
						<p class="text-xl">Sono un web developer e anche un grafico.</p>
						<p class="text-xl mb-6">
							Sono nato a Catania e sin da piccolo ho sempre avuto un grande
							interesse per la tecnologia. Con gli anni la cosa poi è andata
							sempre a diventare più grande, infatti già a 10 anni mi dilettavo
							con Photoshop <span><i class="cib-adobe-photoshop"></i></span>,
							programmi di elaborazione 3D e di rendering. Negli anni poi ho
							iniziato a programmare alle scuole superiori.
						</p>
						<p class="text-xl">
							Col tempo ho continuato a portare avanti le mie passioni per la
							programmazione, Photoshop e per il video-editing... l'elaborazione
							3D è molto più sopita rispetto alle altre, ma ogni tanto sfoggio
							la mia creatività pure col 3D 😉
						</p>

						<div class="flex justify-between h-full max-h-[50%]">
							<!-- Spero che questo max-height non diventi un problema nel futuro -->
							<div class="absolute bottom-0 left-0">
								<h2 class="text-3xl">Soft skills</h2>
								<ul class="list-disc pl-6">
									<li>Adattarsi ai cambiamenti</li>
									<li>Lavorare in team</li>
									<li>Ascoltare</li>
									<li>Proporre nuove idee</li>
									<li>Aiutare gli altri</li>
									<li>Mantenere la calma</li>
								</ul>
							</div>

							<div class="absolute bottom-0 right-0">
								<h2 class="text-3xl">Tecnologie che utilizzo</h2>
								<ul class="list-disc pl-6">
									<li>Front-end</li>
									<li>Back-end</li>
									<li>Photoshop</li>
									<li>Illustrator</li>
									<li>InDesign</li>
									<li>Video-editing</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
/* Animazione per far lampeggiare da verde normale a verde intenso */
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
		transform: scale(1.2);
	}
}

/* Applicazione dell'animazione alla pallina */
.blinking-ball {
	width: 30px;
	height: 30px;
	background-color: #28a745;
	border-radius: 50%;
	animation: blinking 1s infinite;
	transition: all 0.2s ease-in-out;
}
.hidden_blinking_ball {
	width: 15px;
	height: 15px;
	visibility: hidden;
}
</style>
