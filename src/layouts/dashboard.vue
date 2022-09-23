<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = [
  {
    name: 'Online Events',
    icon: UsersIcon,
    current: true,
    children: [
      { name: 'Discord AMAs', href: '#' },
      { name: 'Twitter Spaces', href: '#' },
      { name: 'LinkedIn Live Events', href: '#' },
      { name: 'Facebook Lives', href: '#' },
    ],
  },
  { name: 'Events', icon: HomeIcon, current: false, href: '#' },
  { name: 'Meetups', icon: HomeIcon, current: false, href: '#' },
]
const userNavigation = [
  { name: 'Your Profile', href: 'settings/account' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)
</script>

<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100" leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
              <TransitionChild
                as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto" src="/EventMonster%20Logo%20Web.png"
                  alt="Event Monster"
                >
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
                  <template v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">
                      <a href="#" class="group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
                        <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                    </div>
                    <Disclosure v-else v-slot="{ open }" as="div" class="space-y-1">
                      <DisclosureButton class="group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
                        <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <span class="flex-1">{{ item.name }}</span>
                        <svg class="ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400" :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300']" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>
                      </DisclosureButton>
                      <DisclosurePanel class="space-y-1">
                        <DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                          {{ subItem.name }}
                        </DisclosureButton>
                      </DisclosurePanel>
                    </Disclosure>
                  </template>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-grow flex-col overflow-y-auto bg-slate-200 pt-5">
        <div class="flex flex-shrink-0 items-center px-4">
          <a href="/">
            <img
              class="h-8 w-auto" src="/EventMonster%20Logo%20Web.png"
              alt="Event Monster"
            >
          </a>
        </div>
        <div class="mt-5 flex flex-1 flex-col">
          <nav class="flex-1 space-y-1 bg-slate-200 px-2" aria-label="Sidebar">
            <template v-for="item in navigation" :key="item.name">
              <div v-if="!item.children">
                <a href="#" class="group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
                  <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
              <Disclosure v-else v-slot="{ open }" as="div" class="space-y-1">
                <DisclosureButton class="group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
                  <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  <span class="flex-1">{{ item.name }}</span>
                  <svg class="ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400" :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300']" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                </DisclosureButton>
                <DisclosurePanel class="space-y-1">
                  <DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                    {{ subItem.name }}
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
            </template>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-slate-50 shadow">
        <button
          type="button"
          class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-1 justify-between px-4 ">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block h-full w-full bg-slate-50 border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search" type="search" name="search"
                >
              </div>
            </form>
          </div>
          <div class="ml-4 gap-4 flex items-center md:ml-6">
            <a
              href="/add-event"
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
            >
              Post Event </a>
            <button
              type="button"
              class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative fit-content">
              <div>
                <MenuButton
                  class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-full rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  >
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a
                      :href="item.href" class="block px-4 py-2 text-sm text-gray-700"
                      :class="[active ? 'bg-gray-100' : '']"
                    >{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main>
        <div class="py-6">
          <!--          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8"> -->
          <!--            <h1 class="text-2xl font-semibold text-gray-900"> -->
          <!--              Dashboard -->
          <!--            </h1> -->
          <!--          </div> -->
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <slot />
<!--              <div class="h-96 rounded-lg border-4 border-dashed border-gray-200" />-->
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
