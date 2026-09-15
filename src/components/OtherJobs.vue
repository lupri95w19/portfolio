<template>
	<div class="w-full sm:w-96 text-xs mt-48 mb-80 flex justify-center flex-col">
		<h1 class="text-black mb-24 w-full text-center">Controlla anche i miei altri lavori</h1>
		<div
			class="max-w-screen-lg container m-auto md:px-32 lg:px-16 text-black flex flex-col justify-center place-items-center md:pb-32 px-4">
			<!-- Card Dev e Card Grafico -->
			<div class="grid grid-cols-12 lg:gap-20 md:gap-0 place-items-center">
				<!-- Web Dev -->
				<div
					class="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 flex justify-end md:mb-0 sm:mb-32 mb-32">
					<router-link
						to="/dev"
						class="inline-block lg:mb-0 :md-mb-8 w-full lg:text-left md:text-center sm:text-center">

                        						<!-- <a class="inline-block mb-8" href="#">
							<h2
								class="sm:inline inline-block md:text-left text-center text-black text-4xl font-jetbrains-mono relative group">
								Web Development -->
						<a class="block mb-8" href="#">
							<h2
								class="sm:block block md:text-center text-center text-black text-4xl font-jetbrains-mono relative group">
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
						</a>
					</router-link>
				</div>

				<!-- Graphic Design -->
				<div
					class="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 md:mb-0 sm:mb-32 mb-32 w-full sm:w-auto">
					<router-link to="/graphic" class="block mb-8 w-full lg:text-left md:text-center sm:text-center">
						<h2 class="sm:block block md:text-center text-center w-full text-black text-4xl font-inter">
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

				<!-- Miniatures -->
				<div
					class="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 md:mb-0 sm:mb-32 mb-32 w-full sm:w-auto">
					<router-link
						to="/miniatures"
						class="inline-block lg:mb-0 :md-mb-8 w-full lg:text-left md:text-center sm:text-center">
						<a class="block mb-8" href="#">
							<h2 class="sm:block block md:text-center text-center text-black text-4xl font-inter relative group">
								Miniatures
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
										<div><i class="fa-regular fa-square text-xs"></i></div>
										<div>&#x2715;</div>
									</div>
								</div>
								<div class="p-0 flex items-center justify-center h-[282px]">
									<img
										class="max-h-full object-contain p-8 transition-all duration-500 ease-in-out hover:animate-bob"
										src="/mini.png"
										alt="icona codice" />
								</div>
							</div>
						</a>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
