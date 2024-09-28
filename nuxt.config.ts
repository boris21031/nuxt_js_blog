// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@element-plus/nuxt'
  ],

  css: [
    '~/main.css'
  ],

  compatibilityDate: '2024-09-16'
})