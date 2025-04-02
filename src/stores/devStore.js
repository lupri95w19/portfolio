import { defineStore } from 'pinia';

export const useProjectStoreDev = defineStore('projectStore', {
	state: () => ({
		projects: [
			{
				id: 1,
				image: '/tesi.png',
				title: 'Games Tracker',
				subtitle: 'Codice per divertimento',
				paragraph1: 'Applicazione web per gestire e analizzare la propria libreria videoludica.',
				paragraph2: `L'architettura garantisce l'aggiornamento in tempo reale dei dati grazie alle API di Steam.`,
				tags: ['Vite', 'React', 'Tailwind', 'Typescript', 'Steam API'],
			},
			{
				id: 2,
				image: '/dev/magazineEGE.png',
				title: 'Boolzapp',
				subtitle: 'Boolean',
				paragraph1: 'Il progetto prevedeva di realizzare una replica della web-app di Whatsapp.',
				paragraph2: `Funzionalità chiave: ordinamento cronologico delle chat, ricerca avanzata e risposte automatiche.`,
				tags: ['HTML', `CSS`, `JavaScript`, 'Bootstrap'],
			},
			{
				id: 3,
				image: '/infografica.png',
				title: 'Boolflix',
				subtitle: 'Boolean',
				paragraph1: 'Il progetto prevedeva di realizzare una replica della web-app di Netflix.',
				paragraph2: `Nella home sono presenti le liste dei Film e SerieTv più popolari. Nella SearchBar è possibile cercare Film e SerieTv. Cliccando sull'opera desiderata, si aprirà una modale.`,
				tags: ['Vite', 'Vue', 'JavaScript'],
			},
			{
				id: 4,
				image: '/manuale.png',
				title: 'BDoctors (FE)',
				subtitle: 'Boolean',
				paragraph1: 'Il progetto prevedeva di realizzare un sito web gestionale per strutture mediche private.',
				paragraph2:
					'In home sono presenti i medici, prima quelli sponsorizzati e dopo quelli non sponsorizzati. è possibile filtrare i medici per specializzazione',
				tags: ['Vite', 'Vue', 'CSS', `Bootstrap`],
			},
			{
				id: 5,
				image: '/monogramma_1.svg',
				title: 'BDoctors (BE)',
				subtitle: 'Boolean',
				paragraph1: `Il sistema richiede l'autenticazione del medico.`,
				paragraph2: `Ciascun medico può accedere a un'area personale dove controllare i messaggi e le recensioni, oppure può anche scegliere di pagare una sponsorizzazione.`,
				tags: ['Vite', `Laravel`, `MySQL`, `Bootstrap`],
			},
			{
				id: 6,
				image: '/Guida_Lol.png',
				title: 'Ez+ LoL',
				subtitle: 'Web Design',
				paragraph1: 'Progettazione e sviluppo end-to-end di un sito web.',
				paragraph2:
					"Realizzato completamente in autonomia: dall'UI/UX design all'implementazione con HTML5, CSS3 e JavaScript vanilla, garantendo prestazioni ottimali senza l'utilizzo di framework.",
				tags: ['HTML5', 'CSS3', 'JavaScript', `jQuery`],
				specialClass: '',
			},
			{
				id: 7,
				image: '/Guida_Lol_Redone.png',
				title: 'Ez+ LoL',
				subtitle: 'Rifacimento con stack moderno',
				paragraph1: 'Rearchitettura completa del frontend con tecnologie performanti.',
				paragraph2: 'Rewrite completo con stack moderno: Vue 3, Vite e Tailwind per lo styling efficiente.',
				tags: ['Vue 3', 'Vite', 'Tailwind CSS'],
				specialClass: '',
			},
			// Aggiungi altri progetti qui
		],
	}),
	getters: {
		getProjectById: (state) => (id) => {
			return state.projects.find((project) => project.id === id);
		},
	},
});
