<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useSignup } from '~/store/signup'
import { actions, useFeedback } from '~/store/feedback'
const router = useRouter()

const { getProviderAuthenticationUrl, register } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const signup = useSignup()

const page = computed({
  get() { return signup.pageData(router.currentRoute.value.name) },
  set() {},
})
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/2 justify-center min-h-full pt-7 pb-12 sm:px-6 lg:px-8 w-full">
      <Sign-Header :show-link="true" text-pre="Have an account?" :cta="page.link" :url-link="page.linkUrl" />
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 v-if="page.id !== 'onboarded'" class="mt-6 mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
          {{ page.title }}
        </h2>
        <slot />
      </div>
    </div>
    <div class="basis-1/2 hidden sm:flex flex-col justify-start overflow-hidden">
      <img class="h-full object-center object-cover" :src="page.img" alt="">
    </div>
  </div>
</template>
