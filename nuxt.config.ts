// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Disable SSR for static generation
  ssr: false,

  // Configure Nitro for static generation
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml'],
      failOnError: false
    }
  },

  routeRules: {
    // Cache all project pages
    '/project/**': { cache: { maxAge: 60 * 60 * 24 * 365 } }
  },

  css: ['~/assets/css/main.sass'],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "~/assets/css/_variables.sass"\n'
                }
            }
        }
    },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💭</text></svg>'
        }
      ]
    }
  },

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
