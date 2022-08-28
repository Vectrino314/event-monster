<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/outline'
const props = defineProps({
  showLink: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-white">
    <div class="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="flex flex-row justify-between items-center w-full">
          <a href="/">
            <img class="w-auto h-7 mx-auto" src="/EventMonster Logo Web.png" alt="Workflow">
          </a>
          <small v-if="showLink">Have an account? <a href="/sign-in" class="text-indigo-600	">
            sign-in
          </a></small>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
