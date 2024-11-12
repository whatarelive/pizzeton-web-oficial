/** @type {import('tailwindcss').Config} */

import animations from "@midudev/tailwind-animations";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: '#444444',
				primary: '#1E1E1E',
				secondary: '#383838',
				thertiary: '#2C2C2C',
			},
			fontSize: {
				title: '32px',
				subtitle: '16px'
			}
		},
	},
	plugins: [animations],
}
