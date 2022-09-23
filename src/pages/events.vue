<script setup lang="ts">
import Event from '~/components/event.vue'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboard',
})
</script>

<template>
  <p>Working!</p>
  <Event></Event>
</template>
