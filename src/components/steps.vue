<!-- This example requires Tailwind CSS v2.0+ -->
<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import { computed, reactive, ref } from 'vue'
import { useOnboarded } from '@/store/onboarded'
const router = useRouter()
const onboarded = useOnboarded()
const steps = computed({
  get() { return onboarded.filterSteps },
  set() { },
})
const currentStep = computed({
  get() { return onboarded.stepsData(router.currentRoute.value.name) },
  set() { },
})
</script>

<template>
  <nav aria-label="Progress">
    <ol role="list" class="flex items-center">
      <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-48' : '']">
        <template v-if="step.name.length" condition="step.name === currentStep.name">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full " :class="step.status !== 'complete' ? 'bg-gray-200' : 'bg-indigo-600'" />
          </div>
          <NuxtLink :to="{ path: `/onboarded/${step.name}` }" class="relative flex h-8 w-8 items-center justify-center rounded-full" aria-current="step" :class="step.status === '' ? '11 border-2 border-gray-200 bg-white hover:border-gray-400' : step.status === 'complete' ? '33 bg-indigo-600 hover:bg-indigo-900' : '22 border-2 border-indigo-600 bg-white' ">
            <CheckIcon v-if="step.status === 'complete'" class="h-5 w-5 text-white" aria-hidden="true" />
            <span v-else class="flex h-8 w-8 rounded-full  flex-shrink-0 items-center justify-center rounded-full border-2" :class="step.status !== '' ? 'bg-indigo-600 border-indigo-300' : 'bg-gray-200'">
              <span class="" :class="step.status !== '' ? 'text-white' : 'text-slate-400'">{{ step.id }}</span>
            </span>
          </NuxtLink>
        </template>
        <template v-else />
      </li>
    </ol>
  </nav>
</template>
