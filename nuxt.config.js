
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Karkhana',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Makers Today, Shapers of Tomorrow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "/js/jquery.min.js" },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
      // { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    ]
  },

  env: {
    CAL_API_KEY: "AIzaSyBepIVJdLIVOAHb2afbyVAxcF-sqJpy3dM",
    CAL_BASE_URL: "https://www.googleapis.com/calendar/v3/calendars",
    CAL_ID: "karkhana.asia_mdt3kr5jmvh1ld77g0fqfldc0k@group.calendar.google.com",
    BASE_API_URL: "http://52.221.186.42"
  },

  loading: false,
  /*
  ** Global CSS
  */
  css: [
    'styles/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },

    loaders: {
      scss: { sourceMap: false }
    }
  },

  // Auth configs
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: `http://52.221.186.42/v1/login/email`, method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          // user: { url: 'http://52.221.186.42/v1/user/', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  },

  // router: {
  //   middleware: ['auth']
  // }

}
