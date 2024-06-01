// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
