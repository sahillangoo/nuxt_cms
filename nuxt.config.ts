// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  sourcemap: {
    server: true,
    client: 'hidden' // Only generate sourcemaps in development
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: process.env.NODE_ENV === 'development',
      cssCodeSplit: true
    },
    css: {
      devSourcemap: true
    }
  },
  nitro: {
    experimental: {
      wasm: true
    }
  },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],

  fonts: {
    families: [
      { name: 'Roboto', provider: 'google', weights: ['400', '500', '700'] },
      { name: 'Poppins', provider: 'google', weights: ['400', '500', '600', '700'] },
      { name: 'Roboto Mono', provider: 'google', weights: ['400'] }
    ]
  }
})
