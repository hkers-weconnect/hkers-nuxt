require('dotenv').config();

module.exports = {
  mode: 'spa',

  server: {
    port:
      process.env.PORT || (process.env.NODE_ENV !== 'production' ? 3000 : 3001),
    host: '0.0.0.0'
  },

  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/_variables.scss',
    '@/assets/styles/_mixins.scss'
    // '@/assets/styles/_functions.scss'
  ],
  styleResources: {
    // your settings here
    scss: [
      '@/assets/styles/_variables.scss',
      '@/assets/styles/_mixins.scss'
      // '@/assets/styles/_functions.scss'
    ]
  },
  // cssSourceMap: process.env.NODE_ENV !== 'production',

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/styles',
    '@/plugins/router',
    '@/plugins/axios',
    '@/plugins/vuefire',
    '@/plugins/vue-click-outside'
    // { src: '@/plugins/scrollmagic', ssr: false },
    // { src: '@/plugins/fullpage', ssr: false }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fullpage.js',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en',
            iso: 'en-US'
          },
          {
            code: 'sc',
            file: 'sc',
            iso: 'zh-Hans'
          },
          {
            code: 'tc',
            file: 'tc',
            iso: 'zh-Hant'
          }
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang/'
      }
    ]
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_API_URL
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['swiper', 'dom7']
    // extend(config, ctx) {}
  }
};
