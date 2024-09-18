// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
  ],

  shadcn: {
    prefix: "V",
    componentDir: "./app/components/ui",
  },

  colorMode: {
    classSuffix: "",
  },

  build: {
    transpile: ["trpc-nuxt"],
  },

  compatibilityDate: "2024-09-16",
});
