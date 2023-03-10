// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@400;500;700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  /**
   * Modules
   */
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxt/image-edge",
    "@nuxtjs/i18n",
    "@nuxtjs/partytown",
    "@nuxtjs/supabase",
    "nuxt-swiper",
  ],

  /**
   * Nuxt Content
   */
  content: {
    // documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      // theme: "one-dark-pro",
      // OR
      theme: {
        // Default theme (same as single string)
        default: "one-dark-pro",
        // Theme used if `html.dark`
        dark: "one-dark-pro",
        // Theme used if `html.light`
        light: "github-light",
      },
    },
  },

  /**
   * Nuxt Image
   */
  image: {},

  /**
   * Color Mode
   */
  colorMode: {
    classSuffix: "",
    fallback: "dark",
    preference: "dark",
  },

  /**
   * i18n
   */
  i18n: {
    langDir: "locales",
    lazy: true,
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English (US)",
        file: "en-US.json",
      },
    ],
    vueI18n: {
      fallbackLocale: "en",
    },
  },

  /**
   * Supabase
   */
  supabase: {
    // Options
  },
});
