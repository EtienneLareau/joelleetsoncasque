import i18n from './config/i18n'

export default {
  target: 'static',

  modern: process.env.NODE_ENV === 'production',

  layoutTransition: {
    name: 'fade',
    mode: 'out-in',
  },

  head: {
    htmlAttrs: {
      lang: 'fr-CA',
    },
    title: 'JOELLE ET SON CASQUE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { name: 'robots', content: 'index,follow' },
      { name: 'theme-color', content: '#7faa86' },
      { name: 'generator', content: 'VueJs' },
      // {
      //   name: 'google-site-verification',
      //   content: '-ySZ0bHIa-gI_bDNTZnGfs8MySFGpiqb2zl0UBg44yw',
      // },

      // {
      //   name: 'apple-mobile-web-app-title',
      //   content: 'Clinique IPS de Quartier',
      // },
      // { name: 'application-name', content: 'Clinique IPS de Quartier' },
      // { property: 'fb:app_id', content: '100089456949770' },
      // { property: 'og:url', content: 'https://cliniqueipsdequartier.com' },
      // { property: 'og:type', content: 'website' },
      // { property: 'og:title', content: 'Clinique IPS de Quartier | Clinique médicale privée' },
      // { property: 'og:site_name', content: 'Clinique IPS de Quartier | Clinique médicale privée' },
      // { property: 'og:locale', content: 'fr_CA' },
      // {
      //   property: 'og:description',
      //   content:
      //     'La Clinique IPS de Quartier est la première clinique médicale d’infirmières praticiennes spécialisées (IPS) privée, hors RAMQ, sans médecin, à Drummondville. Nous offrons des soins de santé divers pour toute la famille.',
      // },
      // {
      //   property: 'og:image',
      //   content:
      //     'https://cliniqueipsdequartier.com/_nuxt/img/highfive.ea673d5.jpg',
      // },
      // {property:"og:image:alt", content:"Un highfive de plusieurs mains"},
      // { name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
      // { name: 'msapplication-TileColor', content: '#ffc40d' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/nbb1hvi.css',
      },
    ],
  },

  loading: { color: '#7bb0b8' },

  plugins: ['~/plugins/sanity-image-builder'],

  components: true,

  // modules: [
  //   [
  //     'nuxt-gmaps',
  //     {
  //       key: 'AIzaSyBwXxzaei5fTLc6Fl1lcBtGpV2WGoi_X9I',
  //       //you can use libraries: ['places']
  //     },
  //   ],
  //   // '@nuxtjs/sitemap',
  // ],

  buildModules: [
    '@nuxtjs/sanity',
    // '@nuxtjs/snipcart',
    [
      '@nuxtjs/i18n',
      {
        vueI18nLoader: true,
        strategy: 'prefix_except_default',
        defaultLocale: 'fr',
        seo: true,
        locales: [
          // {
          //   code: 'en',
          //   name: 'English',
          //   iso: 'en-CA',
          // },
          // {
          //   code: 'es',
          //   name: 'Espagnol',
          //   iso: 'es-ES',
          // },
          {
            code: 'fr',
            name: 'Français',
            iso: 'fr-CA',
          },
        ],
        vueI18n: i18n,
      },
    ],
  ],

  // sitemap: {
  //   hostname: 'https://cliniqueipsdequartier.com/',
  //   gzip: true,
  //   exclude: [
  //     '/vendor',
  //     '/vendor/**',
  //     '/category',
  //     '/category/**',
  //     '/journal',
  //     '/journal/**',
  //   ],
  // },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },
  /*
   ** Global CSS
   */
  css: ['~/css/global.css', '~/assets/css/main.css'],
  /*

   ** Build configuration
   */
  build: {},

  // https://sanity.nuxtjs.org
  sanity: {
    projectId: 'men5ciw1',
    minimal: true,
    useCdn: false,
    dataset: 'production',
  },

  // snipcart: {
  //   key:
  //     'ODRkNmJhZDktOTk5YS00Y2Y1LTk5Y2ItMTkzNTlkZTYxNzhmNjM2NTk1NTI2OTgyMTc1MTUy',
  // },
  generate: {
    fallback: true,
    crawler: true,
  },
}
