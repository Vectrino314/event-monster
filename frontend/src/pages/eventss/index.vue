<script setup lang="ts">
// import { useEvents } from '@store/events'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import NewHeader from '../../components/new-header.vue'
import FeaturedEvents from '../../components/FeaturedEvents.vue'
import ExploreEvents from '../../components/ExploreEvents.vue'
// import { onBeforeMount } from '../../.nuxt/imports'
const categories = ref({
  'All Events': [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: 'So you\'ve bought coffee... now what?',
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  'Twitter Spaces': [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  'LinkedIn Audio': [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: 'The worst advice we\'ve ever heard about coffee',
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
  'Zoom Event': [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: 'The worst advice we\'ve ever heard about coffee',
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})

// const events = useEvents()
onBeforeMount(() => {
  // events.getEventsFromCRM()
})

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <NewHeader class="z-50 bg-white" />
  <section class="mx-auto container relative">
    <div class="relative my-12 text-center z-20 pt-28 h-auto">
      <h1 class="text-6xl font-bold">
        Explore events
      </h1>
    </div>
    <div class="w-full px-2 py-8 sm:px-0">
      <TabGroup>
        <TabList class="flex mx-auto max-w-xl space-x-1 rounded-full bg-gray-200 p-3">
          <Tab
              v-for="category in Object.keys(categories)"
              :key="category"
              v-slot="{ selected }"
              as="template"
          >
            <button
                class="w-full rounded-full py-2.5 text-sm leading-5 text-black font-bold ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2" :class="[
                selected
                  ? 'bg-white shadow'
                  : ' hover:bg-eventPurple hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="container mt-2 py-12">
          <TabPanel
              v-for="(posts, idx) in Object.values(categories)"
              :key="idx"
              class="container rounded-xl bg-white"
          >
            <div id="featured">
              <h1 class="text-4xl font-semibold">
                Featured Events
              </h1>
              <FeaturedEvents format="full"/>
            </div>

            <div id="explore">
              <h1 class="text-4xl font-semibold">
                Explore Events
              </h1>
              <ExploreEvents />
            </div>
            <!--            <ul>-->
            <!--              <li-->
            <!--                v-for="post in posts"-->
            <!--                :key="post.id"-->
            <!--                class="relative rounded-md p-3 hover:bg-gray-100"-->
            <!--              >-->
            <!--                <h3 class="text-sm font-medium leading-5">-->
            <!--                  {{ post.title }}-->
            <!--                </h3>-->

            <!--                <ul-->
            <!--                  class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"-->
            <!--                >-->
            <!--                  <li>{{ post.date }}</li>-->
            <!--                  <li>&middot;</li>-->
            <!--                  <li>{{ post.commentCount }} comments</li>-->
            <!--                  <li>&middot;</li>-->
            <!--                  <li>{{ post.shareCount }} shares</li>-->
            <!--                </ul>-->

            <!--                <a-->
            <!--                  href="#"-->
            <!--                  class="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"-->
            <!--                />-->
            <!--              </li>-->
            <!--            </ul>-->
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </section>
</template>
