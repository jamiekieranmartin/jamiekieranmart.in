const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		fontFamily: {
			display: ["Indie Flower", ...defaultTheme.fontFamily.sans],
			body: ["Open Sans", ...defaultTheme.fontFamily.sans]
		},
		colors: {
			green: '#00ffbc',
			blue: '#0e11a8',
			primary: {
				100: '#E6F6FE',
				200: '#C0EAFC',
				300: '#9ADDFB',
				400: '#4FC3F7',
				500: '#03A9F4',
				600: '#0398DC',
				700: '#026592',
				800: '#014C6E',
				900: '#013349',
			},
			gray: {
				100: '#f7fafc',
				200: '#edf2f7',
				300: '#e2e8f0',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2d3748',
				900: '#1a202c',
			},
		},
		extend: {
			lineHeight: {
				hero: '4.5rem',
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/typography')],
};
