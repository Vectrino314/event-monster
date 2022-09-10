<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ArrowSmRightIcon } from '@heroicons/vue/outline'
import { useSignup } from '~/store/signup'
import { useOnboarded } from '~/store/onboarded'
import { actions, useFeedback } from '~/store/feedback'
const router = useRouter()
const signup = useSignup()
const onboarded = useOnboarded()

const { getProviderAuthenticationUrl, register } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const page = ref(signup.pages.find((s) => {
  return router.currentRoute.value.name.split('-').includes(s.id)
}))

const step = computed({
  get() { return onboarded.stepsData(router.currentRoute.value.name) },
  set(value) { return value },
})
const allSteps = computed({
  get() { return onboarded.allSteps },
  set(value) { return value },
})
const anyActive = computed({
  get() { return onboarded.anyActive(step.value.list) },
  set({ st, step }) {},
})

const checkStatus = () => {
  console.log()
  if (router.currentRoute.value.name.split('-').includes('complete')) {
    allSteps.value.forEach((step) => {
      onboarded.setStatus(step, 'complete')
    })
  }
  else if (['individual', 'organization'].includes(router.currentRoute.value.name.split('-')[1])) {
    console.log(step.value)

    onboarded.setStatus(allSteps.value[0], 'complete')
    onboarded.setStatus(allSteps.value[1], 'current')
    onboarded.setStatus(allSteps.value[2], 'current')
  }
}
checkStatus()
</script>

<template>
  <div v-if="step" class="flex flex-row">
    <div class="basis-1/2 justify-center min-h-full pt-4 pb-4 sm:px-4 lg:px-4 w-full">
      <Sign-Header :show-link="false" text-pre="Have an account?" cta="" url-link="" />
      <div class="sm:flex flex-col justify-center sm:items-center">
        <Steps class="my-2" />
      </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 v-if="step.name !== 'complete'" class="my-3 text-lg font-bold tracking-tight text-gray-900">
          {{ step.title }}
        </h1>
        <p v-if="step.name !== 'complete'" class="text-sm">
          {{ step.text }}
        </p>
        <div class="my-8">
          <slot />
        </div>
        <div class="flex w-full items-center" :class="step.name !== 'complete' ? 'justify-end' : 'justify-around'">
          <p v-if="step.name !== 'start'" class="flex-1 cursor-pointer" @click="onboarded.navigateBack(router.currentRoute.value, step)">
            Back
          </p>
          <button
            :disabled="!anyActive" :class="{ 'disabled:opacity-75': !anyActive }"
            type="submit" class="flex justify-center w-90 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="onboarded.navigate(router.currentRoute.value, step)"
          >
            {{ step.name !== 'complete' ? 'Next Step' : 'Go To Dashboard' }}
            <ArrowSmRightIcon class="ml-1 h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <div class="basis-1/2 hidden sm:flex flex-col justify-start h-screen overflow-hidden">
      <img class="h-full object-cover" :src="step.img" alt="">
    </div>
  </div>
</template>
