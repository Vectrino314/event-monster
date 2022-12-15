import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "dashboard" | "default" | "horizontal-dashboard" | "landing" | "onboard" | "sign"
declare module "C:/Development/event-monster/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}