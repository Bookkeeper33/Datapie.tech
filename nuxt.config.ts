// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/eslint-module",
        "@nuxtjs/color-mode",
        "@nuxtjs/google-fonts",
        "nuxt-headlessui",
        "nuxt-icon",
        "@vueuse/nuxt",
        "@vueuse/motion/nuxt",
        "@nuxtjs/device",
    ],
    runtimeConfig: {
        public: {
            motion: {
                directives: {
                    "pop-bottom": {
                        initial: {
                            scale: 0,
                            opacity: 0,
                            y: 100,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        },
                    },
                },
            },
        },
    },
    typescript: {
        typeCheck: true,
    },
    colorMode: {
        preference: "light",
        fallback: "dark",
        classSuffix: "",
    },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    googleFonts: {
        families: {
            Roboto: true,
            Lato: true,
            "DM Sans": true,
        },
        download: true,
        display: "swap",
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.includes("swiper"),
        },
    },
    imports: {
        presets: [
            {
                from: "swiper/element/bundle",
                imports: ["register"],
            },
        ],
    },
});
