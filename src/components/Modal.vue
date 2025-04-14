<template>
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.9)]"
      @click.self="close"
    >
      <div class="bg-white rounded-lg p-2 md:p-6 w-[70vw] relative">
        <!-- prima w-full -->
        <button
          class="absolute top-3 right-3 text-white hover:text-red-400 z-40"
          @click="close"
        >
          &times;
        </button>
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    show: Boolean
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  </script>
  