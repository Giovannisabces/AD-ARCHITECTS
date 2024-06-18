import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'yellow-ad': 		'#F8E082',
				'primary-black-ad':	'#06050A',
				'yellow-ad-sec': 	'#DBB84F',
				'silver-ad': 		'#C1C0C5',
				'silver-ad-logo':	'#D3D2D7',
				'silver-ad-lines':	'#A4A3A8'

			},
			backgroundImage: {
				'disenos-arquitectonicos': 	"url('/img/portada/CardServicios/Disenosarquitectonicos.webp')",
				'disenos-interiores': 		"url('/img/portada/CardServicios/Disenos-de-interiores-y-cocinas.webp')",
				'remodelaciones': 			"url('/img/portada/CardServicios/Remodelaciones.webp')",
				'impermeabilizaciones': 	"url('/img/portada/CardServicios/Impermeabilizaciones.webp')",
				'mantenimientos': 			"url('/img/portada/CardServicios/Mantenimientos.webp')",
				'portada-remodelaciones': 	"url('src/img/remodelaciones/Remodelaciones.webp')",
				'imper-frio': 				"url('src/img/Impermeabilizaciones/Impermeabilizaciones-frio.webp')",
				'imper-calor': 				"url('src/img/Impermeabilizaciones/Impermeabilizaciones-calor.webp')",
				'main-imper': 				"url('src/img/Impermeabilizaciones/Impermeabilizaciones.webp')",
			},
			boxShadow:{
				'address': 'rgb(238, 245, 138) 3px 3px 6px 0px inset, rgba(255,255,255,0.2) -3px 3px 6px 1px inset'
			},
			aspectRatio: {
				'4/3': '4 / 3',
			}
		},
	},
	plugins: [
		// animations,
		{
			'postcss-import': {},
			'tailwindcss/nesting': {},
			tailwindcss: {},
			autoprefixer: {},
		}
	],
}
