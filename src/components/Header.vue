<script setup>
import { ref } from "vue";
</script>

<template>
	<div class="flex justify-center sticky top-10 left-0 z-40 py-4">
		<div
			id="header"
			class="bg-[#0a0908] rounded-full py-4 px-8 sticky top-0 right-0 inline-flex"
		>
			<div class="flex gap-4">
				<div>
					<a href="#">About</a>
				</div>
				<div>
					<a href="#">La mia carriera</a>
				</div>
				<div>
					<a href="#">I miei lavori</a>
				</div>
				<div>
					<a href="#">Contattami</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#header {
	box-shadow: 0px 3.2px 8px 8px rgba(0, 0, 0, 0.05);
}
</style>
