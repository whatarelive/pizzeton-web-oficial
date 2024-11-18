/** @type {import('tailwindcss').Config} */

import animations from "@midudev/tailwind-animations";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				base: '320px',
				xs: '375px',
				sm: '425px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},
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
