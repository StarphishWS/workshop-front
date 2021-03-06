export default {
  ssr: false,
  env: {
    APIKEY: process.env.APIKEY,
    AUTHDOMAIN: process.env.AUTHDOMAIN,
    PROJECTID: process.env.PROJECTID,
    STORAGEBUCKET: process.env.STORAGEBUCKET,
    MESSAGEINGSENDERID: process.env.MESSAGEINGSENDERID,
    APPID: process.env.APPID,
    PORT: process.env.PORT,
    API_URL: process.env.API_URL
  },
  server: {
    port: process.env.PORT
  },
  router: {
    middleware: 'authGuard'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "starphish",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/index.scss"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/persistedState.js", 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //Tailwind
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#8B5CF6",
            "primary-dark":"#5B21B6", 
            "primary-light": "#A78BFA"
          }, 
        },
        maxWidth: {
          "640": "640px"
        }
      }, 
      variants: {
        extend: {
          opacity: ['disabled'],
        }
      },
    }
  }
};
