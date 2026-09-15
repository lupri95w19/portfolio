<template>
	<div class="w-full text-xs my-10 flex justify-center items-center md:top-10 md:left-0 z-40 py-4 sm:px-0 px-4">
		<!-- Bottone Precedente -->
		<button
			@click="emit('prev')"
			:disabled="currentPage === 1"
			class="px-4 py-2 text-white rounded-md btn custom-bg customButton"
			type="button">
			<i class="fa-solid fa-circle-left text-2xl"></i>
		</button>

		<!-- Numero di Pagina -->
		<h2 class="mx-2 sm:mx-4 text-lg text-center text-black">
			Pagina {{ currentPage }} di {{ totalPages }}

			<select
				v-model="localPage"
				@change="emit('goTo', Number(localPage))"
				class="ml-4 px-3 py-2 rounded-md bg-gray-200 text-black text-sm cursor-pointer">
				<!-- Mostra sempre la pagina corrente -->
				<option :value="currentPage" disabled hidden>{{ currentPage }}</option>

				<!-- Lista pagine -->
				<option v-for="page in totalPages" :key="page" :value="page">
					{{ page }}
				</option>
			</select>
		</h2>

		<!-- Bottone Successivo -->
		<button
			@click="emit('next')"
			:disabled="currentPage === totalPages"
			class="px-4 py-2 bg-[#181818] text-white rounded-full customButton"
			type="button">
			<i class="fa-solid fa-circle-right text-2xl"></i>
		</button>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    currentPage: Number,
    totalPages: Number
})

const emit = defineEmits(['prev', 'next', 'goTo'])

const localPage = ref(props.currentPage)

// sincronizza la tendina quando cambi pagina con le frecce
watch(() => props.currentPage, (newVal) => {
    localPage.value = newVal
})
</script>

<style scoped>
button{
    padding: 12px;
    border-radius: 9999px;
}
</style>