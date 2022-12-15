<script setup>
// import { StrapiEvent } from '../types/index'
import dayjs from 'dayjs'
import { defineProps } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  datetime: String,
  hostedBy: String,
  isFree: Boolean,
  categories: Object,
  featured: Boolean,
  mini: Boolean,
})

const { id, title, featured, datetime, categories, isFree, hostedBy, cardFormat } = toRefs(props)
// const { id, title, featured, datetime, categories, isFree, hostedBy, cardFormat } = toRefs(props)
</script>

<template>
  <NuxtLink
      :to="'/eventss/' + id"
    :class="[
      featured
        ? 'bg-yellow-50 border-2 border-yellow-300 shadow'
        : 'bg-white',
      mini
        ? 'hidden'
        : 'block',
    ]" class="rounded-xl [max-width:min-content] min-w-[300px] flex flex-col overflow-hidden shadow-lg p-6"
  >
    <img class="w-full rounded-xl" src="../assets/images/meetup-image.jpg" alt="meetup">
    <div class=" py-4 font-semibold text-md mb-2">
      {{ title }}
    </div>
    <div class="font-semibold text-md mb-2">
      {{ dayjs(datetime).format('MMM').toUpperCase() }} {{ dayjs(datetime).format('DD').toUpperCase() }}, <span class="font-medium">{{ dayjs(datetime).format('ddd') }} &#8226; {{ dayjs(datetime).format('h:mm A').toUpperCase() }}</span>
    </div>

    <div class="pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ isFree ? 'FREE' : 'PAID' }}</span>
      <span v-for="category in categories" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ category.attributes.name }}</span>
    </div>
    <div class="font-medium text-md mb-2">
      Hosted by {{ hostedBy }}
    </div>
  </NuxtLink>

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
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{  }}</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Twitter Space</span>
    </div>
    <div class="font-medium text-md mb-2">
      Hosted by {{ hostedBy }}
    </div>
  </div>
</template>
