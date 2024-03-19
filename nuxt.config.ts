// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  css: ['primeicons/primeicons.css', 'assets/css/base.css'],
  primevue: {
    components: {
      prefix: 'Prime',
    },
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/')},
  },
  tailwindcss: {
    viewer: false // disable the viewer that launches when starting the development server
  },
  colorMode: {
    classSuffix: ''
  },
  vite: {
    plugins: [svgLoader()],
  },
})
