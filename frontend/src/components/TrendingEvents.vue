<script>
import { defineProps } from 'vue'

const props = defineProps({
  format: String,
})

const { format } = toRefs(props)
</script>

<template>
  <!-- not used styles: grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 -->
  <div class="scroll-auto scrollbar grid grid-cols-1 lg:grid-cols-2 p-10 mb-12  gap-5 overflow-y-auto">
    <!-- Card 1 -->
    <SlimEventCard />
    <SlimEventCard />
    <SlimEventCard />
    <SlimEventCard />
    <SlimEventCard />
    <SlimEventCard />

  </div>
</template>
