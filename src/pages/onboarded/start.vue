<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { UserIcon, UsersIcon } from '@heroicons/vue/solid'
import { useSignup } from '~/store/signup'
import { useOnboarded } from '~/store/onboarded'

definePageMeta({ layout: 'onboard' })

const router = useRouter()
const signup = useSignup()
const onboarded = useOnboarded()

const { getProviderAuthenticationUrl } = useStrapiAuth()

const step = computed({
  get() { return onboarded.stepsData(router.currentRoute.value.name) },
  set(value) { return value },
})
const type = computed({
  get() { return onboarded.form.type },
  set(value) { onboarded.setType(value) },
})
</script>

<template>
  <div class="transition duration-550">
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <li v-for="st in step.type" :key="st.name" class="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-6 " :class="type === st.name ? 'border-2 border-indigo-600' : 'border-2 border-transparent'" @click="type = st.name">
        <div class="flex flex-col w-full items-center justify-between p-6">
          <UserIcon v-if="st.name === 'individual'" class="h-10 w-10 text-indigo-400" aria-hidden="true" />
          <UsersIcon v-if="st.name === 'organization'" class="h-10 w-10 text-indigo-400" aria-hidden="true" />
          <h3 class="truncate text-sm font-medium text-gray-900 mt-2">
            {{ st.name }}
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>
