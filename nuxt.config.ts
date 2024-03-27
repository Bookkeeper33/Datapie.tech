// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      "@nuxt/image",
      "@nuxtjs/eslint-module",
      "@nuxtjs/tailwindcss",
      "@nuxtjs/color-mode",
      "@nuxtjs/google-fonts",
      "nuxt-headlessui",
      "nuxt-icon",
      "@vueuse/nuxt",
      "@nuxtjs/device"
    ],
    typescript: {
        typeCheck: true,
    },
    colorMode: {
        preference: 'dark',
        fallback: 'light',
        classSuffix: ''
    },
    tailwindcss: {
        cssPath:'~/assets/css/main.css',
        exposeConfig: true
    },
    googleFonts: {
        families: {
            Roboto: true,
            Lato: true,
            'DM Sans': true
        },
        download: true,
        display: "swap",
    },
    device: {
        refreshOnResize: true
      },
     vue:{
        compilerOptions: {
            isCustomElement: (tag) => tag.includes('swiper')
          },
     },
    imports: {
        presets: [
            {
                from: 'swiper/element/bundle',
                imports: ['register']
            }
        ]
    }
});
