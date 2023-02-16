import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		url: "-",
		token: "-"
	},
	target: 'static',
	"nitro": {
		"output": {
			dir: 'output',
			serverDir: 'output/server',
			publicDir: 'output/public'
		}
	}
});
