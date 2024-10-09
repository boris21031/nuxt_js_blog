// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@element-plus/nuxt',
  ],

  css: [
    '~/main.css'
  ],

  axios: {
    baseURL: 'http://localhost:80', // Устанавливаем базовый URL для всех запросов
  },

  compatibilityDate: '2024-09-16'
})



