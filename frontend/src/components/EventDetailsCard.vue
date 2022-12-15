<script setup>
// import { StrapiEvent } from '../types/index'
import { defineProps } from 'vue'

const props = defineProps({
  featured: Boolean,
  mini: Boolean,
})

const { featured, cardFormat } = toRefs(props)
</script>

<template>
  <div class="rounded-xl min-w-[300px] flex flex-col overflow-hidden shadow-lg p-6"
  >
    <img class="w-full rounded-xl" src="../assets/images/meetup-image.jpg" alt="meetup">
    <div class=" py-4 font-semibold text-md mb-2">
      The World of AI and Machine Learning and NFTs
    </div>
    <div class="font-semibold text-md mb-2">
      AUG 25, <span class="font-medium">Thu &#8226; 8:30pm</span>
    </div>

    <div class="pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">FREE</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Twitter Space</span>
    </div>
    <div class="font-medium text-md mb-2">
      Hosted by Bruno Langholm
    </div>
  </div>

  <div
      :class="[
      featured
        ? 'bg-yellow-50 border-2 border-yellow-300 shadow'
        : 'bg-white',
      mini
        ? 'block'
        : 'hidden',
    ]" class="rounded-xl min-w-[300px] flex overflow-hidden shadow-lg p-6"
  >
    <img class="w-full rounded-xl" src="../assets/images/meetup-image.jpg" alt="meetup">
    <div class=" py-4 font-semibold text-md mb-2">
      The World of AI and Machine Learning and NFTs
    </div>
    <div class="font-semibold text-md mb-2">
      AUG 25, <span class="font-medium">Thu &#8226; 8:30pm</span>
    </div>

    <div class="pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">FREE</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Twitter Space</span>
    </div>
    <div class="font-medium text-md mb-2">
      Hosted by Bruno Langholm
    </div>
  </div>
</template>
