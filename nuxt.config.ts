// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width",
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { property: "og:image", content: "/ogimage.png" },
        { property: "theme-color", content: "#79ADA7" },
      ],
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@nuxt/image",
    "dayjs-nuxt",
    "@vueuse/nuxt",
  ],
  css: ["~/assets/css/style.scss"],
  plugins: ["~/plugins/preline.client.ts"],
  googleFonts: {
    families: {
      "Noto+Sans+JP": true,
      "Roboto+Mono": true,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/style.scss",
    configPath: "tailwind.config.js",
  },
  colorMode: {
    classSuffix: "",
    preference: "light",
  },
  site: {
    url: "https://blog.crystaworld1221.com",
    name: "CrystaWorld Blogs",
    description: "CrystaWorldの備忘録兼ドキュメント的なTech Blogです",
    defaultLocale: "ja",
  },
  ogImage: {
    fonts: ["Noto+Sans+JP:600"],
  },
  content: {
    highlight: {
      theme: "one-dark-pro",
    },
  },
  dayjs: {
    defaultLocale: "ja",
    plugins: ["timezone"],
  },
});
