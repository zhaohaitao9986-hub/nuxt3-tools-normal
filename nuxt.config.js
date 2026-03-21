import { resolve } from 'path'
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true,
    plugins: ['~/server/plugins/brotliCompress.js']
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: ''
    }]
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
  },
  sitemap: {
    sources: [
      '/api/sitemap',
    ],
    cacheMaxAgeSeconds: 6 * 60 * 60, //6小时缓存
    autoLastmod: true, // 用于爬虫抓取
  },

  components: {
    global: true,
    dirs: [
      {
        path: resolve(__dirname, './components'),
        pathPrefix: false,
        extensions: ['.vue'],
        global: true
      }
    ]
  },

  vue: {
    compilerOptions: {
      whitespace: "preserve"
    }
  },

  css: [
    "@/assets/css/main.scss"
  ],

  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'index',
        path: '/:pathMatch(.*)*',
        file: resolve(__dirname, 'pages/index.vue')
      })
    },
  },

  devServer: {
    port: 6001
  },

  plugins: [
    '~/plugins/gaFour.js',
    '~/plugins/fetch.js',
    '~/plugins/vueClipboard.js',
  ],

  compatibilityDate: '2024-08-08',
})