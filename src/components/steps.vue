<!-- This example requires Tailwind CSS v2.0+ -->
<script setup>
import { CheckIcon } from '@heroicons/vue/solid'
import { computed, reactive, ref } from 'vue'
import { useOnboarded } from '~/store/onboarded'
const router = useRouter()
const route = useRoute()
// const steps = [
//   { name: 'Step 1', href: '#', status: 'complete' },
//   { name: 'Step 2', href: '#', status: 'complete' },
//   { name: 'Step 3', href: '#', status: 'complete' },
// ]
const onboarded = useOnboarded()
const steps = computed({
  get() {
    return onboarded.filterSteps
  },
  set(value) {
    // emit('subscribe:user', value)
    console.log(value, steps)
  },
})
const currentStep = computed({
  get() {
    return onboarded.stepsData(router.currentRoute.value.name)
  },
  set(value) {
    // emit('subscribe:user', value)
    console.log('currentStep set')
    return true
  },
})
</script>

<template>
  <nav aria-label="Progress">
    <ol role="list" class="flex items-center">
      <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '']">
        <template v-if="step.status === 'complete'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-indigo-600" />
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
            <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
            <span class="sr-only">{{ step.id }}</span>
          </a>
        </template>
        <template v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white" aria-current="step">
            <span class="flex h-8 w-8 rounded-full bg-indigo-600  flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
              <span class="text-white">{{ step.id }}</span>
            </span>
          </a>
        </template>
        <template v-else>
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="h-0.5 w-full bg-gray-200" />
          </div>
          <a href="#" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
            <!-- <span class="h-8 w-8 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true" />
            <span class="sr-only">{{ step.id }}</span> -->
            <span class="flex h-8 w-8 rounded-full bg-grey-600  flex-shrink-0 items-center justify-center rounded-full border-2">
              <span class="text-slate-400">{{ step.id }}</span>
            </span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>
