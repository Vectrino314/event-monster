<script setup>
// import { StrapiEvent } from '../types/index'
import { defineProps } from 'vue'

const props = defineProps({
  featured: Boolean,
})

const {
  featured,
} = toRefs(props)
</script>

<template>
  <div
    :class="[
      featured
        ? 'bg-yellow-50 border-2 border-yellow-300 shadow'
        : 'bg-gray-100',
    ]" class="rounded-xl grid gap-6 grid-flow-col justify-between overflow-hidden shadow-lg p-6"
  >
    <div>
      <img class=" rounded-xl" src="../assets/images/meetup-image.jpg" alt="meetup">
    </div>
    <div>
      <div class="flex flex-col font-semibold text-md mb-2">
        AUG 25 <span class="font-medium">Thu &#8226; 8:30pm</span>
      </div>
    </div>
    <div class="flex-col gap-2 flex">
      <div class="font-semibold text-md mb-2">
        The World of AI and Machine Learning and NFTs
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="inline-block [width:max-content] bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">FREE</span>
        <span class="inline-block [width:max-content] bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Twitter Space</span>
      </div>
    </div>
  </div>
</template>
