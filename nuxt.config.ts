// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.sass'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image'
  ],
  
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Xanh Mono',
        provider: 'google'
      }
    ]
  }
})
