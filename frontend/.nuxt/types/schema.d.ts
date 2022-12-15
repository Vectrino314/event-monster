import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["intlify"]?: typeof import("@intlify/nuxt3").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["strapi"]?: typeof import("@nuxtjs/strapi").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    strapi: {
        url: string,

        prefix: string,

        version: string,

        cookie: any,

        auth: any,

        cookieName: string,
    },
  }
  interface PublicRuntimeConfig {
     strapi: {
        url: string,

        prefix: string,

        version: string,

        cookie: any,

        auth: any,

        cookieName: string,
    },
  }
}