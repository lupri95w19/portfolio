<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
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
					<!-- Progetto tesi -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="overflow-hidden h-[405px] flex-shrink-0 rounded-t-lg">
								<a href="#">
									<img class="rounded-t-lg scale-120 w-full h-full object-cover" src="/tesi.png" alt="" />
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Ground Zeroes
											</h2>
											<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Tesi</h3>
										</a>
									</div>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Studio approfondito sul processo di sviluppo videoludico, con focus sulle figure professionali
										coinvolte, l'implementazione di tecnologie innovative (IA incluse).
									</p>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Composta di una dimostrazione pratica attraverso un progetto originale ispirato a Splinter Cell,
										corredato di mockup.
									</p>
								</div>
								<a
									href="#"
									class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
							</div>
						</div>
					</div>
					<!--  -->
					<!--  -->
					<!--  -->
					<!-- progetto OTR -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="overflow-hidden h-[405px] flex-shrink-0">
								<a href="#">
									<img class="rounded-t-lg h-full w-full object-cover" src="/magazineEGE.png" alt="" />
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">O.T.R.</h2>
										</a>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
											Elementi di grafica editoriale
										</h3>
									</div>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Materia incentrata sull'editoria.</p>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Il progetto finale prevedeva di realizzare un magazine.
									</p>
								</div>
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
							</div>
						</div>
					</div>
					<!--  -->
					<!--  -->
					<!--  -->
					<!-- progetto Infografica personale -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="overflow-hidden h-[405px] flex-shrink-0">
								<a href="#">
									<img class="rounded-t-lg h-full w-full object-cover" src="/infografica.png" alt="infografica" />
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Infografiche</h2>
										</a>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
											Graphic Design 3
										</h3>
									</div>

									<!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p> -->
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Il progetto finale prevedeva di realizzare alcune infografiche tra cui una personale.
									</p>
								</div>
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
							</div>
						</div>
					</div>
					<!--  -->
					<!--  -->
					<!--  -->
					<!-- progetto GD2 -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="overflow-hidden h-[405px] flex-shrink-0 rounded-t-lg">
								<a href="#">
									<img class="rounded-t-lg h-full w-full object-cover" src="/manuale.png" alt="infografica" />
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Manuale identità visiva
											</h2>
										</a>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
											Graphic Design 2
										</h3>
									</div>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Progetto di rebranding per un'istituzione culturale, con focus sulla rielaborazione dell'identità
										visiva.
									</p>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Il caso studio selezionato è stato l'Orto Botanico di Catania.
									</p>
								</div>
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
							</div>
						</div>
					</div>
					<!--  -->
					<!--  -->
					<!--  -->
					<!-- progetto GD1 -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="overflow-hidden h-[405px] flex-shrink-0">
								<a href="#">
									<img class="rounded-t-lg h-full w-full object-cover" src="/monogramma_1.svg" alt="infografica" />
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
												Monogramma personale
											</h2>
										</a>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Graphic Design</h3>
									</div>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sviluppo di un monogramma personale.</p>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Dopo aver esplorato 400 soluzioni grafiche, è stato selezionato il monogramma più efficace.
									</p>
								</div>
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
							</div>
						</div>
					</div>
					<!--  -->
					<!--  -->
					<!--  -->
					<!-- progetto web dev -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="relative h-[405px] overflow-hidden flex-shrink-0">
								<a href="#" class="block h-full w-full">
									<!-- Contenitore per lo zoom -->
									<div class="h-full w-full overflow-hidden rounded-t-lg">
										<img
											class="rounded-t-lg w-full h-full object-cover object-top scale-150 origin-top"
											src="/Guida_Lol.png"
											alt="Ez+lol" />
									</div>
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ez+ LoL</h2>
										</a>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Web Design</h3>
									</div>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Progettazione e sviluppo end-to-end di un sito web.
									</p>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Realizzato completamente in autonomia: dall'UI/UX design all'implementazione con HTML5, CSS3 e
										JavaScript vanilla, garantendo prestazioni ottimali senza l'utilizzo di framework.
									</p>
								</div>
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
							</div>
						</div>
					</div>
                    					<!--  -->
					<!--  -->
					<!--  -->
					<!-- progetto web dev -->
					<div class="col-span-4 flex flex-col">
						<div
							class="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
							<div class="relative h-[405px] overflow-hidden flex-shrink-0">
								<a href="#" class="block h-full w-full">
									<!-- Contenitore per lo zoom -->
									<div class="h-full w-full overflow-hidden rounded-t-lg">
										<img
											class="rounded-t-lg w-full h-full object-cover object-top scale-150 origin-top"
											src="/Guida_Lol_Redone.png"
											alt="Ez+lol" />
									</div>
								</a>
							</div>

							<div class="p-5 flex-grow flex flex-col h-[450px]">
								<div>
									<div class="h-[100px]">
										<a href="#">
											<h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ez+ LoL</h2>
										</a>
										<h3 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Rifacimento con stack moderno</h3>
									</div>

									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
										Rearchitettura completa del frontend con tecnologie performanti
									</p>
									<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Rewrite completo con stack moderno: Vue 3, Vite e Tailwind per lo styling efficiente.
									</p>
								</div>
								<a
									href="#"
									class="mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-center mt-auto">
									Progetto completo
								</a>
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
