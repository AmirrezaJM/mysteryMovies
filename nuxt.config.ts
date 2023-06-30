// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "MysteryMurdur",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: "utf-8"}
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/supabase','@nuxtjs/tailwindcss', '@pinia/nuxt','nuxt-icon','@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})
