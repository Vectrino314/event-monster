<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { UserIcon, UsersIcon } from '@heroicons/vue/solid'
import { useSignup } from '~/store/signup'
import { useOnboarded } from '~/store/onboarded'
import { actions, useFeedback } from '~/store/feedback'
const step = computed({
  get() {
    return onboarded.stepsData(router.currentRoute.value.name)
  },
  set(value) {
    // emit('subscribe:user', value)
    console.log(value)
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

const router = useRouter()
const onboarded = useOnboarded()
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
console.log(step)
</script>

<template>
  <div class="transition duration-550">
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <!-- <li v-for="person in people" :key="person.email" class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"> -->
      <li class="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-6 " :class="type === 'individual' ? 'border-2 border-indigo-600' : 'border-2 border-transparent'" @click="type = 'individual'">
        <div class="flex flex-col w-full items-center justify-between p-6">
          <UserIcon class="h-10 w-10 text-indigo-400" aria-hidden="true" />
          <h3 class="truncate text-sm font-medium text-gray-900">
            individual
          </h3>
        </div>
      </li>
      <li class="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-6" :class="type === 'organization' ? 'border-2 border-indigo-600' : 'border-2 border-transparent'" @click="type = 'organization'">
        <div class="flex flex-col w-full items-center justify-between p-6">
          <UsersIcon class="h-10 w-10 text-indigo-400" aria-hidden="true" />
          <h3 class="truncate text-sm font-medium text-gray-900">
            Organization
          </h3>
        </div>
      </li>
    </ul>
    <!-- <p class="my-10">
      <span class="font-bold">{{ step.textSecondBold }}</span>
      {{ step.textSecond }}
      <a href="#readmore" class="text-indigo-600">{{ step.cta }}</a>
    </p> -->
  </div>
</template>
