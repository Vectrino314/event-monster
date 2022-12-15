<script setup>
import { defineProps } from 'vue'

import eventsQuery from '../apollo/queries/event/featured_events.gql'

const props = defineProps({
  format: String,
  selectedCategory: String,
})

// const variables = { limit: 5 }
const {
  data,
} = useAsyncQuery(eventsQuery)
// console.log(d)
// const { data } = await useAsyncQuery(query)
// console.log(data)
// export default {
//   data() {
//     return {
//       events: [],
//     }
//   },
//   apollo: {
//     products: {
//       prefetch: true,
//       query: eventsQuery,
//     },
//   },
// }

const { format, selectedCategory } = toRefs(props)

const filteredEvents = data?.events?.data.filter(event => event?.attributes?.categories?.data?.attributes?.name === selectedCategory)
console.log(selectedCategory)
console.log(filteredEvents)
</script>

<template>
  <!-- not used styles: grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 -->

  <div class="scroll-auto scrollbar flex p-10 mb-12  gap-5 overflow-y-auto">
    <!-- Card 1 -->
    <EventCard
      v-for="event in data?.events?.data" featured
      :id="event?.id"
      :title="event?.attributes?.title"
      :categories="event?.attributes?.categories?.data"
      :datetime="event?.attributes?.date"
      :hostedBy="event?.attributes?.hosted_by"
      :isFree="event?.attributes?.is_free"
    />
  </div>
</template>
