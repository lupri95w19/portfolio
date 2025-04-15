<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref, computed } from 'vue';
import axios from 'axios';

import { useRoute } from 'vue-router'; // importa useRoute
import { watch, onMounted } from 'vue'; // importa watch e onMounted

const userEmail = ref('');
const userSubject = ref('');
const userMessage = ref('');
const status = ref('');
const isValidEmail = ref(true);
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Computed per verificare la validità del modulo
const isValid = computed(() => {
	return userEmail.value && userSubject.value && userMessage.value && isValidEmail.value;
});

// Funzione per inviare l'email
const sendEmail = async () => {
	if (!emailRegex.test(userEmail.value)) {
		isValidEmail.value = false;
		return;
	}
	isValidEmail.value = true;

	const data = {
		userEmail: userEmail.value,
		subject: userSubject.value,
		message: userMessage.value,
	};

	try {
		status.value = 'Invio in corso...';
		const response = await axios.post('/.netlify/functions/send-email', data, {
			timeout: 10000,
		});
		status.value = response.data.message;
	} catch (error) {
		console.error('Dettagli errore:', {
			message: error.message,
			response: error.response?.data,
			status: error.response?.status,
		});

		status.value = error.response?.data?.error || "Errore durante l'invio. Controlla la console per dettagli.";
	}

	const navigateTo = (path) => {
		// Resetta lo scroll prima della navigazione
		window.scrollTo(0, 0);
		router.push(path);
	};
};
// const arr = ref(['Hello', 'From', 'Vue Writer']);

const completedTexts = ref([]);
const currentTyping = ref('');

// const typeArray = ['Web Developer', 'FE Lover', 'Graphic Designer', 'Photoshop Enjoyer', 'PC Gamer <i class="fa-brands fa-steam"></i>'];
const typeArray = [
	{ text: 'Web Developer' },
	{ text: 'FE Lover' },
	{ text: 'Graphic Designer' },
	{ text: 'Photoshop Enjoyer' },
	{ text: 'PC Gamer', icon: 'fa-brands fa-steam' },
];
const typingSpeed = 25;
const newTextDelay = 500;

let typeArrayIndex = 0;
let charIndex = 0;

// function typeText() {
// 	const word = typeArray[typeArrayIndex];

// 	if (charIndex < word.length) {
// 		currentTyping.value += word.charAt(charIndex);
// 		charIndex++;
// 		setTimeout(typeText, typingSpeed);
// 	} else {
// 		// Quando ha finito la parola, la sposta nella lista completa
// 		completedTexts.value.push(currentTyping.value);
// 		currentTyping.value = '';
// 		charIndex = 0;
// 		typeArrayIndex++;

// 		// Se ci sono altre parole, continua
// 		if (typeArrayIndex < typeArray.length) {
// 			setTimeout(typeText, newTextDelay);
// 		}
// 	}
// }
function typeText() {
	const item = typeArray[typeArrayIndex];
	const word = item.text;

	if (charIndex < word.length) {
		currentTyping.value += word.charAt(charIndex);
		charIndex++;
		setTimeout(typeText, typingSpeed);
	} else {
		completedTexts.value.push({ ...item, text: currentTyping.value });
		currentTyping.value = '';
		charIndex = 0;
		typeArrayIndex++;

		if (typeArrayIndex < typeArray.length) {
			setTimeout(typeText, newTextDelay);
		}
	}
}

onMounted(() => {
	setTimeout(typeText, 2500);
});
</script>

<template>
	<div class="w-screen bg-[#0A1128] snap-y">
		<section
			class="lg:h-[93.5vh] h-auto bg-[#0A1128] relative flex flex-col justify-center overflow-x-hidden snap-mandatory">
			<div class="max-w-screen-lg container m-auto flex justify-center">
				<div class="container mx-auto md:px-16 px-4 lg:py-0 md:py-32">
					<div class="grid grid-cols-12 mb-4 gap-4">
						<div class="col-span-4"></div>
						<div class="col-span-8"></div>
					</div>

					<div class="grid grid-cols-12 gap-4" v-motion-fade-visible-once>
						<!-- Telefono -->

						<!-- Questo forse va bene per i laptop
					  <div
						class="relative w-[300px] h-[600px] bg-black rounded-[40px] p-6 shadow-xl border-4 border-gray-700 col-span-4"> -->

						<div
							class="relative w-[300px] h-[600px] bg-black rounded-[40px] p-6 shadow-xl border-4 border-gray-700 lg:col-span-4 md:col-span-12 sm:col-span-12 col-span-12 place-self-center z-5"
							v-motion
							:initial="{ opacity: 1, y: '-30vw' }"
							:visible-once="{
								opacity: 1,
								y: '0vw',
								transition: {
									type: 'spring',
									stiffness: 486,
									damping: 57,
									mass: 5,
									// 0.8 prima
									duration: 0.7,
									ease: 'easeInOutQuad',
								},
							}"
							:transition="{ type: 'spring', duration: 3, delay: 3, ease: 'linear' }">
							<!-- Speaker & Camera -->
							<div class="absolute top-3 left-1/2 -translate-x-1/2 w-[96px] h-[22px] bg-gray-700 rounded-full"></div>

							<!-- Contenuto dello schermo -->
							<div class="h-full flex flex-col justify-baseline items-center text-center p-6 mt-12">
								<h2 class="text-2xl font-bold">Benvenuto</h2>
								<p class="text-lg mt-2">Iniziamo un nuovo progetto insieme!</p>
								<a
									href="https://www.linkedin.com/in/luca-privitera-a1545a31b/"
									class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-3 py-3 mt-4 max-w-max"
									target="_blank"
									rel="noopener noreferrer">
									Contattami
									<i class="fa-brands fa-linkedin"></i>
								</a>
								<img class="p-4 mt-8" src="/Io.png" alt="" />
							</div>
							<div class="absolute bottom-3 left-1/2 -translate-x-1/2 w-[96px] h-[5px] bg-gray-700 rounded-full"></div>
						</div>

						<!-- Terminale -->
						<div
							class="lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 p-0 rounded-lg w-full rounded-t-lg h-[550px] lg:mt-0 md:mt-16 mt-16"
							v-motion
							:initial="{ opacity: 0, x: '30vw' }"
							:visible-once="{
								opacity: 1,
								x: '0vw',
								transition: {
									type: 'spring',
									stiffness: 486,
									damping: 57,
									mass: 6,
									// 0.8 prima
									duration: 1.3,
									ease: 'easeInOutQuad',
									delay: 800,
								},
							}">
							<div class="flex sm:items-end">
								<div class="sm:w-[15px] sm:h-[15px] block scale-50"></div>
								<h3 class="text-xl">Attualmente</h3>
							</div>

							<div class="flex items-center mb-4">
								<div class="blinking-ball scale-50"></div>
								<h2 class="text-3xl">In cerca di lavoro</h2>
							</div>

							<div
								class="bg-[#2D2D2D] text-white font-mono p-0 rounded-lg col-span-8 w-full shadow-lg border border-gray-700 rounded-t-lg bg-[#181818] w-[300px] lg:h-[550px]">
								<!-- prima aveva sm:h-full-->
								<!-- Barra superiore -->
								<div class="flex items-center space-x-2 p-4 bg-black rounded-t-lg">
									<div class="w-3 h-3 bg-red-500 rounded-full"></div>
									<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div class="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>

								<!-- Testo terminale -->
								<div
									class="text-lg leading-relaxed p-4 overflow-y-auto lg:h-[calc(100%-20px)] sm:h-[calc(100%-80px)] relative flex flex-col justify-between">
									<div>
										<p>Ciao! Io sono Luca</p>
										<p>In breve posso definirmi così:</p>

										<!-- Lista -->
										<ul class="sm:ms-8 ms-4 text-white transition ease-in-out h-[148px]">
											<!-- Vecchia lista
										<li>✅ Web Developer</li>
										<li>✅ FE Lover</li>
										<li>
											✅ PC Gamer
											<i class="fa-brands fa-steam"></i>
										</li>-->

											<!-- Lista completata nuova-->
											<!-- <li v-for="(item, index) in completedTexts" :key="index">✅ {{ item }}</li> -->
											<li v-for="(item, index) in completedTexts" :key="index">
												✅ {{ item.text }}
												<i v-if="item.icon" :class="item.icon"></i>
											</li>

											<!-- Quello che sta scrivendo in tempo reale -->
											<li
												v-if="currentTyping"
												v-motion
												:initial="{ opacity: 0, x: '0vw' }"
												:enter="{ opacity: 1, x: '0vw' }">
												✅ {{ currentTyping }}
											</li>
										</ul>
									</div>

									<p class="sm:mt-16 mt-32 lg:mb-12 block lg:bottom-0 sm:bottom-0">
										Se vuoi saperne di più scrolla pure sotto
										<i class="fa-solid fa-turn-down"></i>
										😉
									</p>

									<!-- <vue-writer
										:array="['adding']"
										:delay="1000"
										:intervals="0"
										:start="2000"
										:iterations="'0'"></vue-writer> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Header />

		<!-- Sezione Su di me -->
		<section
			id="about"
			class="min-h-[100vh] min-h-[100svh] min-h-[100dvh] [-webkit-fill-available] flex flex-col justify-center bg-[#E5E7EB] snap-mandatory"
			v-motion
			:initial="{ opacity: 1, x: '0vw' }"
			:enter="{ opacity: 1, x: '0vw' }">
			<div
				class="max-w-screen-lg container m-auto py-36"
				v-motion
				:initial="{ opacity: 1, x: '60vw' }"
				:visible-once="{
					opacity: 1,
					x: '0vw',
					transition: {
						type: 'spring',
						stiffness: 486,
						damping: 57,
						mass: 2,
						// 0.8
						duration: 4.3,
						ease: 'easeInOutQuad',
					},
				}">
				<div class="container mx-auto md:px-32 lg:px-16 sm:px-4 px-4">
					<div class="grid grid-cols-12 sm:gap-8 lg:h-[700px] xl:h-[600px] text-black relative">
						<!-- Prima aveva 700px ma su mac dava problemi -->
						<div class="lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12 h-full relative">
							<img
								src="/lucae2.jpg"
								class="w-full h-full object-cover rounded rounded-[30px]"
								alt="Luca at the graduation"
								v-motion
								:initial="{ opacity: 0, x: '-30vw' }"
								:visible-once="{
									opacity: 1,
									x: '0vw',
									transition: {
										type: 'spring',
										stiffness: 380,
										damping: 35,
										mass: 0.7,
										restDelta: 0.001,
										delay: 800,
									},
								}" />
							<!-- Per ora rimosso 
							 <div
								class="sm:absolute xl:-left-23 lg:-left-15 md:left-25 sm:left-35 sm:top-50 top-30 sm:flex flex-col hidden items-center rotate-320"
								v-motion
								:initial="{ opacity: 0 }"
								:visible-once="{
									opacity: 1,
									transition: {
										type: 'spring',
										stiffness: 380,
										damping: 35,
										mass: 0.7,
										restDelta: 0.001,
										delay: 1200,
										duration: 4.3,
									},
								}">
								<p>Questo sono io</p>
								<i class="fa-solid fa-arrow-turn-down scale-x-[-1] rotate-280"></i>
							</div> -->
						</div>

						<div
							class="lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12 text-lg relative xl:h-[600px]"
							v-motion
							:initial="{ opacity: 0 }"
							:visible-once="{
								opacity: 1,
								x: '0vw',
								transition: {
									type: 'spring',
									stiffness: 380,
									damping: 35,
									mass: 0.7,
									restDelta: 0.001,
									delay: 300,
								},
							}">
							<h1 class="mt-8 sm:mt-0 md:mb-0 mb-4">Su di me</h1>
							<p class="text-xl">Sono un web developer e anche un grafico.</p>
							<p class="text-xl mb-3">
								Sono nato a Catania e sin da piccolo ho sempre avuto un grande interesse per la tecnologia. Con gli anni
								la cosa poi si è sempre più evoluta, infatti già a 10 anni mi dilettavo con Photoshop, programmi di
								elaborazione 3D e di rendering. Negli anni poi ho iniziato a programmare alle scuole superiori.
							</p>
							<p class="text-xl">
								Col tempo ho continuato a portare avanti le mie passioni per la programmazione, Photoshop e per il
								video-editing... l'elaborazione 3D è molto più sopita rispetto alle altre, ma ogni tanto sfoggio la mia
								creatività pure col 3D.
							</p>

							<div class="grid grid-cols-12 justify-between lg:mt-4 xl:mt-4 md:mt-16 mt-24">
								<!-- Spero che questo max-height non diventi un problema nel futuro -->
								<div class="sm:col-span-6 col-span-12 sm:mt-0 mt-12">
									<h2 class="text-3xl text-center sm:text-left">Soft skills</h2>
									<ul class="list-disc pl-6 mt-2 sm:mt-0">
										<li>Adattarsi ai cambiamenti</li>
										<li>Lavorare in team</li>
										<li>Ascoltare</li>
										<li>Proporre nuove idee</li>
										<li>Aiutare gli altri</li>
										<li>Rimanere aggiornato</li>
									</ul>
								</div>

								<div class="sm:col-span-6 col-span-12 sm:mt-0 mt-12">
									<h2 class="text-3xl text-center sm:text-left">Hard skills</h2>
									<ul class="list-disc pl-6 mt-2 sm:mt-0">
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
			</div>
		</section>

		<!-- Sezione carriera -->
		<section
			id="career"
			class="min-h-[100svh] py-12 sm:py-16 bg-[#0A1128] flex items-center snap-mandatory"
			prefers-reduced-motion="reduce">
			<div class="container mx-auto px-4 sm:px-4 md:px-32 lg:px-16">
				<div
					class="max-w-screen-lg mx-auto w-full"
					v-motion
					:initial="{ opacity: 1, x: '50vw' }"
					:visible-once="{
						opacity: 1,
						x: '0vw',
						transition: {
							type: 'spring',
							stiffness: 380,
							damping: 35,
							mass: 0.7,
							restDelta: 0.001,
						},
					}">
					<!-- Titolo -->
					<h1 class="text-center text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 md:mb-24 text-white">
						La mia carriera
					</h1>

					<!-- Timeline -->
					<div class="relative">
						<!-- Linea centrale -->
						<div
							class="absolute left-1/2 top-0 h-full w-0.5 sm:w-1 md:w-1.5 bg-yellow-500 transform -translate-x-1/2 z-0"></div>

						<!-- Step 1 -->
						<div class="relative mb-16 sm:mb-24 md:mb-32 lg:mb-12 flex md:flex-row items-center justify-between">
							<!-- Contenuto sinistro -->
							<div
								class="w-full md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right order-1 sm:block flex flex-col flex-end items-end">
								<h3
									class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left md:text-right lg:text-left w-full">
									Scuola superiori
								</h3>
								<p
									class="text-sm sm:text-base text-gray-300 mt-2 md:w-full md:px-0 sm:pl-0 text-left md:text-right lg:text-left">
									Ho studiato informatica alle superiori, acquisendo le basi della programmazione e della tecnologia
								</p>
							</div>

							<!-- Punto centrale -->
							<a
								href="https://iis-gemmellaro.edu.it/"
								class="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group transition-all duration-300 z-10 order-2 md:mx-0 mx-4"
								aria-label="Vai a dettagli scuole superiori 2013-2019"
								target="_blank">
								<div
									class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF8C00] via-[#FFB347] to-[#FFD447] rounded-full transform group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-300"></div>
							</a>

							<!-- Data -->
							<div class="w-full md:w-5/12 md:pl-8 order-3 md:order-3 text-left md:text-right">
								<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 md:text-left text-center">
									2013-2019
								</h2>
							</div>
						</div>

						<!-- Step 2 -->
						<div class="relative mb-16 sm:mb-24 md:mb-32 lg:mb-12 flex md:flex-row items-center justify-between">
							<!-- Data -->
							<div class="w-full md:w-5/12 md:pr-8 order-1 md:text-right text-center">
								<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">2020-2024</h2>
							</div>

							<!-- Punto centrale -->
							<a
								href="https://www.abacatania.it/"
								class="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group transition-all duration-300 z-10 order-2 md:mx-0 mx-4"
								aria-label="Vai a dettagli scuole superiori 2013-2019"
								target="_blank">
								<div
									class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF8C00] via-[#FFB347] to-[#FFD447] rounded-full transform group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-300"></div>
							</a>

							<!-- Contenuto destro -->
							<div class="w-full md:w-5/12 mt-6 md:mt-0 md:pl-8 order-3">
								<h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white">Accademia di Belle Arti</h3>
								<p class="text-sm sm:text-base text-gray-300 mt-2">
									Ho studiato Design della Comunicazione Visiva, acquisendo nozioni importanti nel campo del Graphic
									Design
								</p>
							</div>
						</div>

						<!-- Step 3 -->
						<div class="relative flex md:flex-row items-center justify-between">
							<!-- Contenuto sinistro -->
							<div class="w-full md:w-5/12 mb-6 md:mb-0 md:pr-8 text-right order-1">
								<h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left">Master</h3>
								<p class="text-sm sm:text-base text-gray-300 mt-2 text-left">
									Corso di 700 ore, dove ho appreso le nozioni fondamentali della programmazione front e back-end
								</p>
							</div>

							<!-- Punto centrale -->
							<a
								href="https://boolean.careers/"
								class="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group transition-all duration-300 z-10 order-2 md:mx-0 mx-4"
								aria-label="Vai a dettagli scuole superiori 2013-2019"
								target="_blank">
								<div
									class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#FF8C00] via-[#FFB347] to-[#FFD447] rounded-full transform group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-300"></div>
							</a>

							<!-- Data -->
							<div class="w-full md:w-5/12 md:pl-8 order-3 md:text-left text-center">
								<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">2024</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Sezione I miei lavori -->
		<section
			id="works"
			class="min-h-[100vh] min-h-[100svh] min-h-[100dvh] [-webkit-fill-available] flex flex-col justify-center bg-[#E5E7EB]">
			<div class="text-lg">
				<h1 class="mt-32 lg:pb-0 md:pb-32 sm:pb-32 pb-48 text-center text-black">I miei lavori</h1>
			</div>

			<div
				class="max-w-screen-lg container m-auto md:px-32 lg:px-16 text-black flex flex-col justify-center place-items-center md:pb-32 px-4">
				<!-- Card Dev e Card Grafico -->
				<div class="grid grid-cols-12 lg:gap-20 md:gap-0 place-items-center">
					<!-- Web Dev -->
					<div
						class="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 flex justify-end"
						v-motion
						:initial="{ opacity: 0, x: '-30vw' }"
						:visible-once="{
							opacity: 1,
							x: '0vw',
							transition: {
								type: 'spring',
								stiffness: 380,
								damping: 35,
								mass: 0.7,
								restDelta: 0.001,
								delay: 300,
							},
						}">
						<router-link
							to="/dev"
							class="inline-block lg:mb-0 :md-mb-8 w-full lg:text-left md:text-center sm:text-center">
							<a class="inline-block mb-8" href="#">
								<h2
									class="sm:inline inline-block md:text-left text-center text-black text-4xl font-jetbrains-mono relative group">
									Web Development
									<span
										class="cursor absolute right-0 top-0 h-full w-[5px] bg-black opacity-0 group-hover:opacity-100 animate-blink"></span>
								</h2>
							</a>
							<a href="#">
								<div class="sm:w-96 w-full border bg-[#303031] rounded-md shadow-lg h-[318px]">
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
							</a>
						</router-link>
					</div>

					<!-- Graphic Design -->
					<div
						class="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 lg:mt-0 md:mt-16 sm:mt-16 mt-16 md:mb-0 sm:mb-32 mb-32 w-full sm:w-auto"
						v-motion
						:initial="{ opacity: 0, x: '30vw' }"
						:visible-once="{
							opacity: 1,
							x: '0vw',
							transition: {
								type: 'spring',
								stiffness: 380,
								damping: 35,
								mass: 0.7,
								restDelta: 0.001,
								delay: 800,
							},
						}">
						<router-link to="/graphic" class="inline-block mb-8 w-full lg:text-left md:text-center sm:text-center">
							<h2 class="sm:inline inline-block md:text-left text-center w-full text-black text-4xl font-inter">
								graphic design
							</h2>
						</router-link>
						<router-link to="/graphic" class="">
							<div class="sm:w-96 w-full border bg-[#181818] rounded-md shadow-lg h-[318px]">
								<!-- Header -->

								<div class="flex justify-between items-center bg-black px-4 py-2 text-sm font-semibold rounded-md">
									<div class="flex gap-2 text-[#E5E7EB]">
										<span class="w-3 h-3 bg-red-500 rounded-full"></span>
										<span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
										<span class="w-3 h-3 bg-green-500 rounded-full"></span>
									</div>
								</div>
								<div class="p-0 flex items-center justify-center h-[282px]">
									<img
										class="max-h-full object-contain p-8 transition-transform duration-300 hover:scale-110 ease-[cubic-bezier(0,0,0.618,1)]"
										src="/monogramma.svg"
										alt="monogramma graphic design" />
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
		</section>

		<!-- Sezione contattami -->
		<section
			id="contact"
			class="min-h-[100vh] min-h-[100svh] min-h-[100dvh] [-webkit-fill-available] flex flex-col justify-center bg-gradient-to-r from-[#FF8C00] via-[#FFB347] via-15% to-[#FFD447] to-90%">
			<div
				class="min-h-[100vh] min-h-[100svh] min-h-[100dvh] flex flex-col justify-center md:px-16 px-4"
				v-motion-slide-left>
				<div class="flex justify-center">
					<div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 relative">
						<h2 class="text-3xl font-semibold text-center mb-6 text-gray-800">Contattami</h2>
						<form @submit.prevent="sendEmail">
							<!-- Email -->
							<div class="mb-4">
								<label for="userEmail" class="block text-lg font-medium text-gray-700">La tua email</label>
								<input
									v-model="userEmail"
									id="userEmail"
									type="email"
									placeholder="Es. paolo@example.com"
									class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
									required />
								<span v-if="!isValidEmail && userEmail.length > 0" class="text-red-500 text-sm">Email non valida</span>
							</div>

							<!-- Subject -->
							<div class="mb-4">
								<label for="userSubject" class="block text-lg font-medium text-gray-700">Oggetto</label>
								<input
									v-model="userSubject"
									id="userSubject"
									type="text"
									placeholder="Oggetto del messaggio"
									class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
									required />
								<span v-if="!userSubject && userSubject.length > 0" class="text-red-500 text-sm">
									Oggetto richiesto
								</span>
							</div>

							<!-- Message -->
							<div class="mb-6">
								<label for="userMessage" class="block text-lg font-medium text-gray-700">Messaggio</label>
								<textarea
									v-model="userMessage"
									id="userMessage"
									placeholder="Scrivi il tuo messaggio"
									class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
									rows="4"
									required></textarea>
								<span v-if="!userMessage && userMessage.length > 0" class="text-red-500 text-sm">
									Messaggio richiesto
								</span>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								:disabled="!isValid"
								class="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg disabled:opacity-50 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 btn-submit">
								Invia
							</button>
						</form>
						<div class="relative">
							<p class="mt-4 text-center text-gray-600 opacity-0">segnaposto</p>
							<p class="absolute top-0 text-center text-gray-600">{{ status }}</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</section>
	</div>
</template>

<style scoped>
.target {
	width: 100px;
	height: 100px;
	background-color: #00ff00;
	border-radius: 10px;
}
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

.input {
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}
.btn {
	width: 100%;
	padding: 10px;
	background-color: #ff8c00;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
.btn:hover {
	background-color: #ff7000;
}

section {
	scroll-snap-align: start;
	scroll-snap-stop: always;
	scroll-behavior: smooth;
}

@media only screen and (max-width: 1024px) {
	#about,
	#works {
		height: unset !important;
	}
}

.typed-text {
	color: #d2b94b;
}

.cursor {
	display: inline-block;
	margin-left: 3px;
	width: 4px;
	background-color: #fff;
	animation: cursorBlink 1s infinite;
}

.cursor.typing {
	animation: none;
}

@keyframes cursorBlink {
	49% {
		background-color: #fff;
	}
	50% {
		background-color: transparent;
	}
	99% {
		background-color: transparent;
	}
}
</style>
