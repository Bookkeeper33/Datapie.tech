// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/eslint-module",
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@nuxtjs/google-fonts",
    ],
    typescript: {
        typeCheck: true,
    },
    googleFonts: {
        families: {
            Roboto: true,
            Lato: true,
        },
        download: true,
        display: "swap",
    },
});
