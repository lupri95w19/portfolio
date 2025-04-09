<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref(router.currentRoute.value.path);

const navigateToSection = (sectionId) => {
  if (currentRoute.value !== '/') {
    router.push('/').then(() => {
      setTimeout(() => scrollToSection(sectionId), 100);
    });
  } else {
    scrollToSection(sectionId);
  }
};

// Permette di andare direttamente a una sezione specifica anche al di fuori della home
// Rimuovo dall'header quando non si sta nella home ma la lascio perché potrebbe far comodo
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

</script>

<template>
  <div class="flex justify-center sticky top-0 left-0 md:top-10 md:left-0 z-40 py-4 sm:px-0 px-4">
    <div id="header" class="bg-[#0a0908] rounded-full py-4 px-8 sticky top-0 right-0 inline-flex">
      <div class="flex gap-4">
        <div class="m-auto" v-if="currentRoute !== '/'">
          <a class="" href="/" target="_self">Home</a>
        </div>
        <div class="m-auto" v-if="currentRoute == '/'">
          <a class="" @click="navigateToSection('about')">About</a>
        </div>
        <div class="m-auto" v-if="currentRoute == '/'">
          <a class="" @click="navigateToSection('career')">La mia carriera</a>
        </div>
        <div class="m-auto" v-if="currentRoute == '/'">
          <a class="" @click="navigateToSection('works')">I miei lavori</a>
        </div>
        <div class="m-auto" v-if="currentRoute == '/'">
          <a class="" @click="navigateToSection('contact')">Contattami</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  box-shadow: 0px 3.2px 8px 8px rgba(0, 0, 0, 0.05);
}

/* Stile per tutti i link clickabili */
a {
  cursor: pointer;
  transition: color 0.3s ease;
}

a:hover {
  color: #FFD447; /* Colore hover personalizzabile */
}
</style>