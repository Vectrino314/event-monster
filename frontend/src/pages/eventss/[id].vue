<script setup>
import {onMounted} from 'vue'
import getEventByIdQuery from '../../apollo/queries/event/get_event_by_id.gql'

const route = useRoute()
console.log(route.params)

const variables = {id: parseInt(route.params.id)}

const {data} = await useAsyncQuery(getEventByIdQuery, variables)
console.log(data)

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <NewHeader class="z-50 bg-white"/>
  <section class="mx-auto px-8 container relative">
    <div class="relative my-12 grid grid-cols-12 text-center z-20 pt-28 h-auto">
      <div class="col-span-12 flex justify-between">
        <div class="col-span-7 flex flex-col justify-items-start bg-gray-400">
          <a class="text-left" href="/events">⬅️Back</a>
                  {{ data }}
          <div
              v-for="category in data?.event.data.attributes?.categories?.data"
              class="mt-24 text-eventPurple [max-width:max-content] font-semibold text-lg px-12 py-6 rounded-full border-2 border-eventPurple"
          >
            {{ category?.attributes?.name }}
          </div>
          <div
              class="mt-12 text-primary font-medium text-7xl"
          >
            {{ data?.event?.data?.attributes?.title }}
          </div>
          <div
              class="mt-12 text-primary font-medium text-7xl"
          >
            {{ data?.event?.data?.attributes?.description }}
          </div>
        </div>
        <div class="col-span-5 justify-self-end bg-gray-400">
          Test
        </div>
      </div>

    </div>
  </section>
</template>
