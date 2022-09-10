<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ArrowSmRightIcon } from '@heroicons/vue/outline'
import { useSignup } from '~/store/signup'
import { useOnboarded } from '~/store/onboarded'
import { actions, useFeedback } from '~/store/feedback'
// const signingUp = ref(false)
const router = useRouter()
// const open = ref(false)
const { getProviderAuthenticationUrl, register } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const signup = useSignup()
const onboarded = useOnboarded()
const page = ref(signup.pages.find((s) => {
  return router.currentRoute.value.name.split('-').includes(s.id)
}))
// const step = ref(onboarded.stepsData(router.currentRoute.value.name))
// const step = useState('step', () => onboarded.stepsData(router.currentRoute.value.name))
// const step = () => ref(onboarded.stepsData(router.currentRoute.value.name))
const step = computed({
  get() {
    return onboarded.stepsData(router.currentRoute.value.name)
  },
  set(value) {
    // emit('subscribe:user', value)
    console.log(value)
  },
})
const anyActive = computed({
  get() {
    return onboarded.anyActive(step.value.list)
  },
  set({ st, step }) {
    // onboarded.setList(st, step)
  },
})
const type = computed({
  get() {
    return onboarded.form.type
  },
  set(value) {
    // emit('subscribe:user', value)
    onboarded.setType(value)
  },
})
</script>

<template>
  <div v-if="step" class="flex flex-row">
    <div class="basis-1/2 justify-center min-h-full pt-7 pb-12 sm:px-6 lg:px-8 w-full">
      <!-- <Sign-Header :show-link="false" text-pre="Have an account?" :cta="page.link" :url-link="page.linkUrl" /> -->
      <div class="sm:flex flex-col justify-center sm:items-center">
        <Steps class="my-10" />
      </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 v-if="step.name !== 'complete'" class="mt-6 mb-6 text-3xl font-bold tracking-tight text-gray-900">
          {{ step.title }}
        </h2>
        <p v-if="step.name !== 'complete'">
          {{ step.text }}
        </p>
        <div class="my-10">
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
    <div class="basis-1/2 hidden sm:flex flex-col justify-start h-100 overflow-hidden">
      <img class="object-fit" :src="step.img" alt="">
    </div>
  </div>
</template>
