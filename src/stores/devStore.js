import { defineStore } from 'pinia';

export const useProjectStoreDev = defineStore('projectStore', {
	state: () => ({
		projects: [
			{
				id: 1,
				image: '/tesi.png',
				title: 'prova',
				subtitle: 'Tesi',
				paragraph1:
					"Studio approfondito sul processo di sviluppo videoludico, con focus sulle figure professionali coinvolte, l'implementazione di tecnologie innovative (IA incluse).",
				paragraph2:
					'Composta di una dimostrazione pratica attraverso un progetto originale ispirato a Splinter Cell, corredato di mockup digitali.',
				tags: ['Photoshop', 'InDesign', 'Premiere', 'AfterEffects', 'GDevelop', 'Blender'],
			},
			{
				id: 2,
				image: '/magazineEGE.png',
				title: 'O.T.R.',
				subtitle: 'Elementi di grafica editoriale',
				paragraph1: "Materia incentrata sull'editoria.",
				paragraph2: 'Il progetto finale prevedeva di realizzare un magazine.',
				tags: ['InDesign', 'Illustrator', `Photoshop`],
			},
			{
				id: 3,
				image: '/infografica.png',
				title: 'Infografiche',
				subtitle: 'Graphic Design 3',
				paragraph1: 'Il progetto finale prevedeva di realizzare alcune infografiche',
				paragraph2: 'Tra cui una infografica personale che rappresentasse il mio percorso.',
				tags: ['Photoshop', 'Illustrator', 'InDesign'],
			},
			{
				id: 4,
				image: '/manuale.png',
				title: 'Manuale identità visiva',
				subtitle: 'Graphic Design 2',
				paragraph1:
					"Progetto di rebranding per un'istituzione culturale, con focus sulla rielaborazione dell'identità visiva.",
				paragraph2: "Il caso studio selezionato è stato l'Orto Botanico di Catania.",
				tags: ['Photoshop', 'Illustrator', 'InDesign'],
			},
			{
				id: 5,
				image: '/monogramma_1.svg',
				title: 'Monogramma personale',
				subtitle: 'Graphic Design',
				paragraph1: 'Sviluppo di un monogramma personale.',
				paragraph2: 'Dopo aver esplorato 400 soluzioni grafiche, è stato selezionato il monogramma più efficace.',
				tags: ['Illustrator'],
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
				paragraph1: 'Rearchitettura completa del frontend con tecnologie performanti',
				paragraph2: 'Rewrite completo con stack moderno: Vue 3, Vite e Tailwind per lo styling efficiente.',
				tags: ['Vue 3', 'Vite', 'Tailwind CSS'],
				specialClass: '',
			},
			{
				id: 8,
				image: '/calendario.png',
				title: 'Calendario 2023',
				subtitle: 'Computer Graphic',
				paragraph1: 'Calendario realizzato come progetto dimostrativo delle tecniche apprese durante le lezioni',
				paragraph2:
					'Il tema scelto è stato quello della serieTV "The Walking Dead", ma con il calendario da tavolo si basa sul fumetto.',
				tags: ['Photoshop'],
				specialClass: 'object-contain',
			},
			/*{
				id: 9,
				image: '/zapp.png',
				title: 'Vari',
				subtitle: 'Computer Vision',
				paragraph1: 'Vari progetti realizzati per dimostrare le tecniche apprese durante le lezioni',
				paragraph2:
					'I progetti sono stati realizzati applicando tecniche di> Fotogrammetria, 3D, After Effects con Motion Tracking, e utilizzare Google Earth per generare un percorso',
				tags: ['Vue 3', 'Vite', 'Tailwind CSS'],
				specialClass: 'object-contain',
			},*/
			// Aggiungi altri progetti qui
			{
				id: 9,
				image: '/zapp.png',
				title: 'Vari',
				subtitle: 'Computer Vision',
				paragraph1: 'Vari progetti realizzati per dimostrare le tecniche apprese durante le lezioni',
				paragraph2:
					'I progetti sono stati realizzati applicando tecniche di> Fotogrammetria, 3D, After Effects con Motion Tracking, e utilizzare Google Earth per generare un percorso',
				tags: ['3D', 'Google Earth Studio', 'After Effects', `AR`, `3DF Zephyr`],
				specialClass: 'object-contain',
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
