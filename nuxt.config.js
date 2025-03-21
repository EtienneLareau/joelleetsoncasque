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
        content: "La page web de Joëlle White et de son casque d'or",
      },
      { name: 'robots', content: 'index,follow' },
      { name: 'theme-color', content: '#333333' },
      { name: 'generator', content: 'VueJs' },

      {
        name: 'apple-mobile-web-app-title',
        content: "Joëlle White et son casque d'or",
      },
      { name: 'application-name', content: "Joëlle White et son casque d'or" },
      // { property: 'fb:app_id', content: '100089456949770' },
      // Facebook
      { property: 'og:url', content: 'https://joelleetsoncasque.ca/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: "Joëlle White et son casque d'or" },
      {
        property: 'og:site_name',
        content: "Joëlle White et son casque d'or",
      },
      { property: 'og:locale', content: 'fr_CA' },
      {
        property: 'og:description',
        content: "Joëlle White et son casque d'or",
      },
      {
        property: 'og:image',
        content: 'https://joelleetsoncasque.ca/social.jpg',
      },
      { property: 'og:image:alt', content: "Joëlle White et son casque d'or" },
      { name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
      { name: 'msapplication-TileColor', content: '#ffc40d' },

      //Twitter Meta Tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:domain', content: 'joelleetsoncasque.ca' },
      { property: 'twitter:url', content: 'https://joelleetsoncasque.ca/' },
      { name: 'twitter:title', content: "Joëlle White et son casque d'or" },
      {
        name: 'twitter:description',
        content: "Joëlle White et son casque d'or",
      },
      {
        name: 'twitter:image',
        content: 'https://joelleetsoncasque.ca/social.jpg',
      },
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
      // {
      //   rel: 'stylesheet',
      //   href: 'https://use.typekit.net/nbb1hvi.css',
      // },
    ],
  },

  loading: { color: '#7bb0b8' },

  plugins: ['~/plugins/sanity-image-builder'],

  components: true,

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

  generate: {
    fallback: true,
    crawler: true,
  },
}
