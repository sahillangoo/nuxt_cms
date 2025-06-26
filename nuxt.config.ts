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
    '@nuxt/test-utils',
    '@sidebase/nuxt-auth'
  ],

  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production
    origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'YOUR_PRODUCTION_ORIGIN',
    // The base path to the authentication api endpoints is set to `/api/auth`
    // If you want to change this, remember to update the `AUTH_ORIGIN` in your .env file
    basePath: '/api/auth',
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5 seconds (milliseconds)
    enableSessionRefreshPeriodically: false,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    globalAppMiddleware: true,
    // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior:
    // - If `globalAppMiddleware` is enabled and `defaultProvider` is undefined, then the global middleware will enforce authentication via all providers
    // - If `globalAppMiddleware` is enabled and `defaultProvider` is defined, then the global middleware will only enforce authentication via the default provider
    // - If `globalAppMiddleware` is false, the `defaultProvider` has no effect
    defaultProvider: undefined,
    // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when sending the user to a fixed homepage instead of continuing the previous journey.
    enableGlobalAppMiddlewareCallbackUrl: true,
    // Configuration of the global auth-middleware. This is not part of `nuxt-auth` but the underlying global middleware that is enabled when `globalAppMiddleware` is enabled
    // Refer to https://nuxt.com/docs/api/configuration/nuxt-config#app-middleware for available options
    globalMiddlewareOptions: {
      // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing a 404 page. Setting this to `false` may lead to unexpected behavior as the user is then redirected to the login page along with a flashing 404 error message.
      allow404WithoutAuth: true,
      // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when sending the user to a fixed homepage instead of continuing the previous journey.
      addDefaultCallbackUrl: true
    }
  },

  fonts: {
    families: [
      { name: 'Roboto', provider: 'google', weights: ['400', '500', '700'] },
      { name: 'Poppins', provider: 'google', weights: ['400', '500', '600', '700'] },
      { name: 'Roboto Mono', provider: 'google', weights: ['400'] }
    ]
  }
})
