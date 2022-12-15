<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { UserIcon, UsersIcon } from '@heroicons/vue/solid'
import { useSignup } from '~/store/signup'
import { useOnboarded } from '~/store/onboarded'

definePageMeta({ layout: 'onboard' })

const router = useRouter()
const onboarded = useOnboarded()

const { getProviderAuthenticationUrl } = useStrapiAuth()

const step = computed({
  get() { return onboarded.stepsData(router.currentRoute.value.name) },
  set({ st, step }) { onboarded.setList(st, step) },
})
</script>

<template>
  <div class="transition duration-550">
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <li v-for="st in step.list" :key="st.answer" class="transition transition-borders duration-300 ease-in-out cursor-pointer  col-span-2 divide-y divide-gray-200 rounded-sm bg-white shadow px-6 py-2 " :class="st.active ? 'border-2 border-indigo-600' : 'border-2 border-grey-100'" @click="step = { st, step }">
        <div class="flex flex-col w-full items-center justify-between">
          <h3 class="truncate text-sm font-medium text-gray-900">
            {{ st.answer }}
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>
