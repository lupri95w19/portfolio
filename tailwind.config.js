module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			sm: { min: '0px', max: '639px' }, // Solo mobile
			md: { min: '640px', max: '767px' }, // Tablet small
			lg: { min: '768px', max: '1023px' }, // Tablet large
			xl: { min: '1024px', max: '1279px' }, // Laptop
			'2xl': { min: '1280px' }, // Desktop
		},
	},
	plugins: [],
};
