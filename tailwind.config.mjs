/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: '#444444',
				primary: '#1E1E1E',
			}
		},
	},
	plugins: [],
}
