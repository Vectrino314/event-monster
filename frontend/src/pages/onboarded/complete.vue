<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useSignup } from '~/store/signup'
import { useOnboarded } from '~/store/onboarded'
import { actions, useFeedback } from '~/store/feedback'
const onboarded = useOnboarded()
const router = useRouter()
// const signingUp = ref(false)
// const open = ref(false)
definePageMeta({ layout: 'onboard' })
const { getProviderAuthenticationUrl } = useStrapiAuth()
const go = () => {
  navigateTo('/')
}
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const signup = useSignup()
const page = ref(signup.pageData(router.currentRoute.value.name))
const step = ref(onboarded.stepsData(router.currentRoute.value.name))
</script>

<template>
  <div class="px-4 py-8 bg-white sm:rounded-lg sm:px-10 transition duration-550">
    <div class="sm:flex flex-col justify-center sm:items-center">
      <!-- <Steps class="my-10" /> -->
      <success />
      <!-- <img class="w-20 mb-10 mx-auto h-auto object-center object-cover" src="/assets/images/green-ok-circle.png"> -->
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 mb-6 text-3xl font-bold tracking-tight text-center text-gray-900" v-html="`${step.title}<br />{USERNAME}<br />🙌`" />
    </div>
    <!-- <button
      type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
      @click="go"
    >
      <template v-if="signup.callingAPI">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        Processing...
      </template>
      <template v-else>
        {{ page.cta }}
      </template>
    </button> -->
  </div>
</template>
