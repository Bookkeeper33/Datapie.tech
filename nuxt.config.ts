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
        preference: "dark",
        fallback: "light",
        classSuffix: "",
    },
    tailwindcss: {
        cssPath: "~/assets/css/main.css",
        exposeConfig: true,
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
