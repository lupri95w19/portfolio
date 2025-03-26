<script setup>
import Header from "./components/Header.vue";
</script>

<template>
	<div>
		<Header />
		<div>
			<h2 class="text-2xl">Attualmente: in cerca di lavoro</h2>
			<div class="flex">
				<!-- Telefono -->
				<div
					class="relative w-[300px] h-[600px] bg-black rounded-[40px] p-6 shadow-xl border-4 border-gray-700"
				>
					<!-- Speaker & Camera -->
					<div
						class="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-full"
					></div>
					<div
						class="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-600 rounded-full"
					></div>

					<!-- Contenuto dello schermo -->
					<div class="h-full flex flex-col justify-center items-center text-center p-6">
						<h2 class="text-2xl font-bold">Benvenuto</h2>
						<p class="text-lg mt-2">Iniziamo un nuovo progetto insieme!</p>

            <div class="text-white">
              <a href="#">Contattami</a>
            </div>
            <a
  href="#"
  class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-3 py-3 mt-4 max-w-max"
>
  Contattami
</a>
					</div>
				</div>
        <div>



          
        </div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
