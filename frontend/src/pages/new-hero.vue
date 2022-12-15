<script setup>
// import {Popover, PopoverButton} from '@headlessui/vue'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

import NewHeader from '../components/new-header'
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

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <NewHeader class="z-50 bg-white" />
  <section class="relative h-screen">
    <!--      <div -->
    <!--          class="absolute z-10 hidden overflow-hidden lg:block lg:transform lg:scale-150 left-0 lg:top-96 max-w-xs w-full h-full"> -->
    <!--        <img src="../assets/images/hero-flag.png" alt=""> -->
    <!--      </div> -->
    <!--      <div class="container mx-auto overflow-hidden"> -->
    <!--        <div class="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent"> -->
    <!--          <div class="w-auto"> -->
    <!--            <div class="flex flex-wrap items-center"> -->
    <!--              <div class="w-auto mr-14"> -->
    <!--                <a href="#"> -->
    <!--                  <img class="h-8 w-auto" src="../assets/images/eventralize_logo_web.png" alt=""></a> -->
    <!--              </div> -->
    <!--              <div class="w-auto hidden lg:block"> -->
    <!--                <ul class="flex items-center mr-16"> -->
    <!--                  <li class="mr-9 font-medium hover:text-gray-700"> -->
    <!--                    <a href="#">Features</a> -->
    <!--                  </li> -->
    <!--                  <li class="mr-9 font-medium hover:text-gray-700"> -->
    <!--                    <a href="#">Solutions</a> -->
    <!--                  </li> -->
    <!--                  <li class="mr-9 font-medium hover:text-gray-700"> -->
    <!--                    <a href="#">Resources</a> -->
    <!--                  </li> -->
    <!--                  <li class="font-medium hover:text-gray-700"> -->
    <!--                    <a href="#">Pricing</a> -->
    <!--                  </li> -->
    <!--                </ul> -->
    <!--              </div> -->
    <!--            </div> -->
    <!--          </div> -->
    <!--          <div class="w-auto"> -->
    <!--            <div class="flex flex-wrap items-center"> -->
    <!--              <div class="w-auto hidden mr-5 lg:block"> -->
    <!--                <div class="inline-block"> -->
    <!--                  <button -->
    <!--                      class="py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200" -->
    <!--                      type="button" -->
    <!--                  > -->
    <!--                    Sign In -->
    <!--                  </button> -->
    <!--                </div> -->
    <!--              </div> -->
    <!--              <div class="w-auto hidden lg:block"> -->
    <!--                <div class="inline-block"> -->
    <!--                  <button -->
    <!--                      class="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" -->
    <!--                      type="button" -->
    <!--                  > -->
    <!--                    Create Free Account -->
    <!--                  </button> -->
    <!--                </div> -->
    <!--              </div> -->
    <!--              <div class="w-auto lg:hidden"> -->
    <!--                <a href="#"> -->
    <!--                  <svg -->
    <!--                      class="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" -->
    <!--                      xmlns="http://www.w3.org/2000/svg" -->
    <!--                  > -->
    <!--                    <rect width="56" height="56" rx="28" fill="currentColor"/> -->
    <!--                    <path -->
    <!--                        d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" -->
    <!--                        stroke-linejoin="round" -->
    <!--                    /> -->
    <!--                  </svg> -->
    <!--                </a> -->
    <!--              </div> -->
    <!--            </div> -->
    <!--          </div> -->
    <!--        </div> -->
    <!--        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50"> -->
    <!--          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"/> -->
    <!--          <nav class="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto"> -->
    <!--            <div class="flex flex-wrap justify-between h-full"> -->
    <!--              <div class="w-full"> -->
    <!--                <div class="flex items-center justify-between -m-2"> -->
    <!--                  <div class="w-auto p-2"> -->
    <!--                    &lt;!&ndash;                  <a class="inline-block" href="#">&ndash;&gt; -->
    <!--                    &lt;!&ndash;                    <img src="flaro-assets/logos/flaro-logo-black.svg" alt=""></a>&ndash;&gt; -->
    <!--                  </div> -->
    <!--                  <div class="w-auto p-2"> -->
    <!--                    <a class="navbar-burger" href="#"> -->
    <!--                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
    <!--                        <path -->
    <!--                            d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" -->
    <!--                            stroke-linejoin="round" -->
    <!--                        /> -->
    <!--                      </svg> -->
    <!--                    </a> -->
    <!--                  </div> -->
    <!--                </div> -->
    <!--              </div> -->
    <!--              <div class="flex flex-col justify-center py-16 w-full"> -->
    <!--                <ul> -->
    <!--                  <li class="mb-12"> -->
    <!--                    <a class="font-medium hover:text-gray-700" href="#">Features</a> -->
    <!--                  </li> -->
    <!--                  <li class="mb-12"> -->
    <!--                    <a class="font-medium hover:text-gray-700" href="#">Solutions</a> -->
    <!--                  </li> -->
    <!--                  <li class="mb-12"> -->
    <!--                    <a class="font-medium hover:text-gray-700" href="#">Resources</a> -->
    <!--                  </li> -->
    <!--                  <li><a class="font-medium hover:text-gray-700" href="#">Pricing</a></li> -->
    <!--                </ul> -->
    <!--              </div> -->
    <!--              <div class="flex flex-col justify-end w-full pb-8"> -->
    <!--                <div class="flex flex-wrap"> -->
    <!--                  <div class="w-full mb-3"> -->
    <!--                    <div class="block"> -->
    <!--                      <button -->
    <!--                          class="py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200" -->
    <!--                          type="button" -->
    <!--                      > -->
    <!--                        Sign In -->
    <!--                      </button> -->
    <!--                    </div> -->
    <!--                  </div> -->
    <!--                  <div class="w-full"> -->
    <!--                    <div class="block"> -->
    <!--                      <button -->
    <!--                          class="py-3 px-5 w-full font-semibold border hover:border-gray-300 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" -->
    <!--                          type="button" -->
    <!--                      > -->
    <!--                        Create Free Account -->
    <!--                      </button> -->
    <!--                    </div> -->
    <!--                  </div> -->
    <!--                </div> -->
    <!--              </div> -->
    <!--            </div> -->
    <!--          </nav> -->
    <!--        </div> -->
    <!--      </div> -->
    <div class="relative  z-20 pt-28 h-auto">
      <div class="container grid grid-cols-12 gap-7 px-4 mx-auto">
        <div class="col-span-12 flex justify-between">
          <div class="col-span-6">
            <div class="xl:max-w-2xl">
              <h1
                class="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none [max-inline-size:min-content;]"
                contenteditable="false"
              >
                Tech
                events,
                <span class="text-eventPurple">reimagined.</span>
              </h1>
              <p class="mb-9 text-lg text-gray-900 font-medium md:max-w-md">
                Promote or find online events in the
                tech-space. Twitter Spaces, LinkedIn Audio, Zoom Meetups and more
              </p>
              <div
                class="mb-16 p-3 xl:pl-7 inline-block md:max-w-xl w-full drop-shadow-lg focus-within:ring-indigo-500 focus-within:ring-2 shadow-indigo-200 rounded-full bg-white"
              >
                <div class="flex flex-wrap items-center">
                  <div class="w-full xl:flex-1">
                    <input
                      id="headerInput3-1"
                      class="p-3 border-none focus:[box-shadow:none] xl:p-0 xl:pr-7 w-full text-gray-600 placeholder-gray-600 outline-none"
                      type="text" placeholder="Search for event"
                    >
                  </div>
                  <div class="w-full xl:w-auto">
                    <div class="block">
                      <button
                        class="py-1.5 px-8 w-full bg-eventPurple font-semibold text-white rounded-full focus:ring focus:ring-indigo-300 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap items-center -m-16">
                <div class="w-auto p-16">
                  <div class="flex flex-wrap -m-0.5 mb-3">
                    <div class="w-auto p-0.5">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z"
                          fill="#00B67A"
                        />
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z"
                          fill="#00B67A"
                        />
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z"
                          fill="#00B67A"
                        />
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z"
                          fill="#00B67A"
                        />
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.16159 1.21266C7.48271 0.224341 8.88091 0.224342 9.20203 1.21266L10.3494 4.74386C10.493 5.18585 10.9049 5.48509 11.3696 5.48509H15.0825C16.1217 5.48509 16.5538 6.81486 15.7131 7.42568L12.7093 9.60808C12.3333 9.88124 12.176 10.3654 12.3196 10.8074L13.4669 14.3386C13.788 15.3269 12.6569 16.1488 11.8162 15.538L8.81234 13.3556C8.43637 13.0824 7.92725 13.0824 7.55128 13.3556L4.54746 15.538C3.70675 16.1488 2.57558 15.3269 2.8967 14.3386L4.04406 10.8074C4.18767 10.3654 4.03034 9.88124 3.65437 9.60808L0.650549 7.42567C-0.190162 6.81486 0.241906 5.48509 1.28108 5.48509H4.99401C5.45874 5.48509 5.87062 5.18585 6.01423 4.74386L7.16159 1.21266Z"
                          fill="#00B67A"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-wrap -m-0.5 mb-2.5">
                    <div class="w-auto p-0.5">
                      <p class="text-gray-900 font-bold">
                        4.2/5
                      </p>
                    </div>
                    <div class="w-auto p-0.5">
                      <p class="text-gray-600 font-medium">
                        (45k Reviews)
                      </p>
                    </div>
                  </div>
                  <!--                  <img src="flaro-assets/logos/brands/brand-trustpilot.png" alt=""> -->
                </div>
                <div class="w-auto">
                  <div class="h-16 w-px bg-gray-200" />
                </div>
                <div class="w-auto p-16">
                  <div class="flex flex-col justify-between">
                    <div class="flex flex-wrap -m-0.5 mb-3">
                      <div class="w-auto p-0.5">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z"
                            fill="#FF9D28"
                          />
                        </svg>
                      </div>
                      <div class="w-auto p-0.5">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z"
                            fill="#FF9D28"
                          />
                        </svg>
                      </div>
                      <div class="w-auto p-0.5">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z"
                            fill="#FF9D28"
                          />
                        </svg>
                      </div>
                      <div class="w-auto p-0.5">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z"
                            fill="#FF9D28"
                          />
                        </svg>
                      </div>
                      <div class="w-auto p-0.5">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.707 1.21266C8.02812 0.224341 9.42632 0.224342 9.74744 1.21266L10.8948 4.74386C11.0384 5.18585 11.4503 5.48509 11.915 5.48509H15.6279C16.6671 5.48509 17.0992 6.81486 16.2585 7.42568L13.2547 9.60808C12.8787 9.88124 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.3269 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.3269 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88124 4.19978 9.60808L1.19596 7.42567C0.355248 6.81486 0.787317 5.48509 1.82649 5.48509H5.53942C6.00415 5.48509 6.41603 5.18585 6.55964 4.74386L7.707 1.21266Z"
                            fill="#FF9D28"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="flex flex-wrap -m-0.5 mb-4">
                      <div class="w-auto p-0.5">
                        <p class="text-gray-900 font-bold">
                          4.1/5
                        </p>
                      </div>
                      <div class="w-auto p-0.5">
                        <p class="text-gray-600 font-medium">
                          (18k Reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                  <!--                  <img src="flaro-assets/logos/brands/brand-capterra.png" alt=""> -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 self-end">
            <div class="w-full relative">
              <div class="p-8 [writing-mode:tb-rl] absolute bottom-0 -right-24 w-full">
                <img
                  class="w-auto rounded-lg"
                  src="/assets/images/purplehalfcircle.png" alt=""
                >
              </div>
              <div class="rounded-lg">
                <!--                transform hover:scale-105 transition ease-in-out duration-1000 --><img
                  class="w-full rounded-lg" src="/assets/images/greenbackcircle.png" alt=""
                >
              </div>
              <div class="p-8 absolute -top-4 -left-44 w-full">
                <img
                  class="w-full md:w-auto rounded-lg"
                  src="/assets/images/greenhalfcircle.png" alt=""
                >
              </div>
              <div class="p-8 absolute -top-16 -left-16 w-full">
                <img
                  class="w-full transform scale-75 md:w-auto rounded-lg"
                  src="/assets/images/Phone%20Left.png" alt=""
                >
              </div>
              <div class="p-8 absolute -top-36 left-16 w-full">
                <img
                  class="w-full transform scale-75 md:w-auto rounded-lg"
                  src="/assets/images/Phone%20Right.png"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <div class="absolute w-screen self-center bottom-0 z-20 pt-28 h-auto"> -->
    <!--      <div class="flex justify-center"> -->
    <!--        &lt;!&ndash; Back to top button &ndash;&gt; -->
    <!--        <button -->
    <!--            type="button" -->
    <!--            data-mdb-ripple="true" -->
    <!--            data-mdb-ripple-color="light" -->
    <!--            class="inline-block p-3" -->
    <!--            id="btn-back-to-top" -->
    <!--        > -->
    <!--          <div class="flex flex-col items-center animate-bounce"> -->
    <!--            <h2 class="text-4xl font-semibold text-purple-500"> -->
    <!--              Learn More! -->
    <!--            </h2> -->
    <!--            <svg -->
    <!--                aria-hidden="true" -->
    <!--                focusable="false" -->
    <!--                data-prefix="fas" -->
    <!--                class="w-4 h-4 transform rotate-180" -->
    <!--                role="img" -->
    <!--                xmlns="http://www.w3.org/2000/svg" -->
    <!--                viewBox="0 0 448 512" -->
    <!--            > -->
    <!--              <path -->
    <!--                  fill="currentColor" -->
    <!--                  d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" -->
    <!--              ></path> -->
    <!--            </svg> -->
    <!--          </div> -->
    <!--        </button> -->
    <!--      </div> -->
    <!--    </div> -->
  </section>

  <section class="mx-auto container relative">
    <div class="relative my-12 text-center z-20 h-auto">
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
              class="w-full rounded-full py-2.5 text-sm leading-5 text-black font-bold ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2"
              :class="[
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
              <FeaturedEvents format="full" />
            </div>
            <div id="featured">
              <h1 class="text-xl font-semibold">
                Trending Events
              </h1>
              <TrendingEvents />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </section>

  <!--  &lt;!&ndash; Featured Events &ndash;&gt; -->
  <!--  <section class="py-26"> -->
  <!--    <div class="container px-4 mx-auto"> -->
  <!--      &lt;!&ndash;      <div class="max-w-4xl mx-auto mb-16 text-center">&ndash;&gt; -->
  <!--      &lt;!&ndash;        <span class="text-lg font-extrabold text-indigo-500">Section label</span>&ndash;&gt; -->
  <!--      &lt;!&ndash;        <h1 class="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">Our mission is to make knowledge and news accessible for everyone.</h1>&ndash;&gt; -->
  <!--      &lt;!&ndash;        <p class="text-xl font-extrabold leading-8 mb-12">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</p>&ndash;&gt; -->
  <!--      &lt;!&ndash;      </div>&ndash;&gt; -->
  <!--      <span class="text-3xl font-extrabold text-indigo-500">Events</span> -->
  <!--      <div class="my-10"> -->
  <!--        <div class="lg:flex items-center -mb-4"><a class="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold" -->
  <!--                                                   href="#">Featured</a><a -->
  <!--            class="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-gray-400 hover:text-gray-500" href="#">Twitter Spaces</a><a -->
  <!--            class="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-gray-400 hover:text-gray-500" href="#">LinkedIn Audios</a><a -->
  <!--            class="inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold text-gray-400 hover:text-gray-500" href="#">Discord AMAs</a><a -->
  <!--            class="inline-block mb-4 text-xl font-extrabold text-gray-400 hover:text-gray-500" href="#">Facebook Lives</a> -->
  <!--        </div> -->
  <!--      </div> -->
  <!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mx-4 -mb-8"> -->
  <!--        <div class="col-span-1 bg-white border-3 border-red-50"> -->
  <!--          <div class="flex flex-col bg-white border-3 border-red-50 shadow-md rounded-2xl overflow-hidden"> -->
  <!-- &lt;!&ndash;            <div class="w-full md:w-1/2">&ndash;&gt; -->
  <!-- &lt;!&ndash;              <img class="h-72 lg:h-full w-full block object-cover" src="nigodo-assets/blog/laptops.jpeg" alt="">&ndash;&gt; -->
  <!-- &lt;!&ndash;            </div>&ndash;&gt; -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <div class="p-8"> -->
  <!--                <h2 class="text-2xl font-extrabold mb-16">A small business is only as good as its tools and it is -->
  <!--                  totally true.</h2> -->
  <!--                <a class="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600" href="#">Read More</a> -->
  <!--              </div> -->
  <!--            </div> -->
  <!--          </div> -->
  <!--        </div> -->
  <!--        <div class="col-span-1 "> -->
  <!--          <div class="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden"> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <img class="h-72 lg:h-full w-full block object-cover" src="nigodo-assets/blog/laptops2.jpeg" alt=""> -->
  <!--            </div> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <div class="p-8"> -->
  <!--                <h2 class="text-2xl font-extrabold mb-16">A small business is only as good as its tools and it is -->
  <!--                  totally true.</h2> -->
  <!--                <a class="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600" href="#">Read More</a> -->
  <!--              </div> -->
  <!--            </div> -->
  <!--          </div> -->
  <!--        </div> -->
  <!--        <div class="col-span-1 "> -->
  <!--          <div class="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden"> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <img class="h-72 lg:h-full w-full block object-cover" src="nigodo-assets/blog/office1.jpeg" alt=""> -->
  <!--            </div> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <div class="p-8"> -->
  <!--                <h2 class="text-2xl font-extrabold mb-16">A small business is only as good as its tools and it is -->
  <!--                  totally true.</h2> -->
  <!--                <a class="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600" href="#">Read More</a> -->
  <!--              </div> -->
  <!--            </div> -->
  <!--          </div> -->
  <!--        </div> -->
  <!--        <div class="col-span-1 "> -->
  <!--          <div class="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden"> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <img class="h-72 lg:h-full w-full block object-cover" src="nigodo-assets/blog/office2.jpeg" alt=""> -->
  <!--            </div> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <div class="p-8"> -->
  <!--                <h2 class="text-2xl font-extrabold mb-16">A small business is only as good as its tools and it is -->
  <!--                  totally true.</h2> -->
  <!--                <a class="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600" href="#">Read More</a> -->
  <!--              </div> -->
  <!--            </div> -->
  <!--          </div> -->
  <!--        </div> -->
  <!--        <div class="col-span-1 "> -->
  <!--          <div class="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden"> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <img class="h-72 lg:h-full w-full block object-cover" src="nigodo-assets/blog/laptops.jpeg" alt=""> -->
  <!--            </div> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <div class="p-8"> -->
  <!--                <h2 class="text-2xl font-extrabold mb-16">A small business is only as good as its tools and it is -->
  <!--                  totally true.</h2> -->
  <!--                <a class="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600" href="#">Read More</a> -->
  <!--              </div> -->
  <!--            </div> -->
  <!--          </div> -->
  <!--        </div> -->
  <!--        <div class="col-span-1 "> -->
  <!--          <div class="md:flex bg-white border-3 border-indigo-900 shadow-md rounded-2xl overflow-hidden"> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <img class="h-72 lg:h-full w-full block object-cover" src="nigodo-assets/blog/laptops2.jpeg" alt=""> -->
  <!--            </div> -->
  <!--            <div class="w-full md:w-1/2"> -->
  <!--              <div class="p-8"> -->
  <!--                <h2 class="text-2xl font-extrabold mb-16">A small business is only as good as its tools and it is -->
  <!--                  totally true.</h2> -->
  <!--                <a class="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600" href="#">Read More</a> -->
  <!--              </div> -->
  <!--            </div> -->
  <!--          </div> -->
  <!--        </div> -->
  <!--      </div> -->
  <!--      <div class="mt-20 text-center"> -->
  <!--        <div class="inline-flex h-14 bg-white rounded border-3 border-indigo-900 shadow"> -->
  <!--          <a class="flex items-center justify-center h-full w-14 border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200" -->
  <!--             href="#"> -->
  <!--            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
  <!--              <path -->
  <!--                  d="M9.17006 12.7101L13.4101 16.9501C13.503 17.0438 13.6136 17.1182 13.7355 17.1689C13.8573 17.2197 13.988 17.2458 14.1201 17.2458C14.2521 17.2458 14.3828 17.2197 14.5046 17.1689C14.6265 17.1182 14.7371 17.0438 14.8301 16.9501C15.0163 16.7627 15.1208 16.5092 15.1208 16.2451C15.1208 15.9809 15.0163 15.7274 14.8301 15.5401L11.2901 12.0001L14.8301 8.46005C15.0163 8.27269 15.1208 8.01924 15.1208 7.75505C15.1208 7.49086 15.0163 7.23741 14.8301 7.05005C14.7366 6.95737 14.6258 6.88404 14.504 6.83428C14.3821 6.78452 14.2517 6.75929 14.1201 6.76005C13.9884 6.75929 13.858 6.78452 13.7361 6.83428C13.6143 6.88404 13.5035 6.95737 13.4101 7.05005L9.17006 11.2901C9.07633 11.383 9.00193 11.4936 8.95117 11.6155C8.9004 11.7373 8.87426 11.868 8.87426 12.0001C8.87426 12.1321 8.9004 12.2628 8.95117 12.3846C9.00193 12.5065 9.07633 12.6171 9.17006 12.7101Z" -->
  <!--                  fill="currentColor"></path> -->
  <!--            </svg> -->
  <!--          </a> -->
  <!--          <a class="flex items-center justify-center h-full w-14 font-extrabold text-white bg-indigo-900 border-r-3 border-indigo-900 transition duration-200" -->
  <!--             href="#">1</a><a -->
  <!--            class="flex items-center justify-center h-full w-14 font-extrabold border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200" -->
  <!--            href="#">2</a><a -->
  <!--            class="flex items-center justify-center h-full w-14 font-extrabold border-r-3 border-indigo-900 hover:bg-indigo-900 hover:text-white transition duration-200" -->
  <!--            href="#">3</a> -->
  <!--          <a class="flex items-center justify-center h-full w-14 hover:bg-indigo-900 hover:text-white transition duration-200" -->
  <!--             href="#"> -->
  <!--            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
  <!--              <path -->
  <!--                  d="M14.8299 11.2899L10.5899 7.04995C10.497 6.95622 10.3864 6.88183 10.2645 6.83106C10.1427 6.78029 10.012 6.75415 9.87994 6.75415C9.74793 6.75415 9.61723 6.78029 9.49537 6.83106C9.37351 6.88183 9.26291 6.95622 9.16994 7.04995C8.98369 7.23731 8.87915 7.49076 8.87915 7.75495C8.87915 8.01913 8.98369 8.27259 9.16994 8.45995L12.7099 11.9999L9.16994 15.5399C8.98369 15.7273 8.87915 15.9808 8.87915 16.2449C8.87915 16.5091 8.98369 16.7626 9.16994 16.9499C9.26338 17.0426 9.3742 17.116 9.49603 17.1657C9.61787 17.2155 9.74833 17.2407 9.87994 17.2399C10.0115 17.2407 10.142 17.2155 10.2638 17.1657C10.3857 17.116 10.4965 17.0426 10.5899 16.9499L14.8299 12.7099C14.9237 12.617 14.9981 12.5064 15.0488 12.3845C15.0996 12.2627 15.1257 12.132 15.1257 11.9999C15.1257 11.8679 15.0996 11.7372 15.0488 11.6154C14.9981 11.4935 14.9237 11.3829 14.8299 11.2899Z" -->
  <!--                  fill="currentColor"></path> -->
  <!--            </svg> -->
  <!--          </a> -->
  <!--        </div> -->
  <!--      </div> -->
  <!--    </div> -->
  <!--  </section> -->

  <!--  Logo Cloud -->
<!--  <section class="pt-36 pb-28 bg-blueGray-100 overflow-hidden">-->
<!--    <div class="container px-4 mx-auto">-->
<!--      <div class="flex flex-wrap justify-center">-->
<!--        <div class="w-auto">-->
<!--          <img src="flaro-assets/logos/brands/logo-square-white.png" alt="">-->
<!--        </div>-->
<!--        <div class="w-auto">-->
<!--          <img src="flaro-assets/logos/brands/logo-square-white2.png" alt="">-->
<!--        </div>-->
<!--        <div class="w-auto">-->
<!--          <img src="flaro-assets/logos/brands/logo-square-white3.png" alt="">-->
<!--        </div>-->
<!--        <div class="w-auto">-->
<!--          <img src="flaro-assets/logos/brands/logo-square-white4.png" alt="">-->
<!--        </div>-->
<!--        <div class="w-auto">-->
<!--          <img src="flaro-assets/logos/brands/logo-square-white5.png" alt="">-->
<!--        </div>-->
<!--        <div class="w-auto">-->
<!--          <img src="flaro-assets/logos/brands/logo-square-white6.png" alt="">-->
<!--        </div>-->
<!--      </div>-->
<!--      <h2 class="mb-6 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto">-->
<!--        Loved by the incredible community-->
<!--      </h2>-->
<!--      <p class="text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">-->
<!--        Lorem ipsum dolor sit-->
<!--        amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.-->
<!--      </p>-->
<!--    </div>-->
<!--  </section>-->
  <!-- Newsletter -->
  <section class="py-24 bg-white overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap xl:items-center -m-8">
        <div class="w-full md:w-1/2 p-8">
          <div class="md:max-w-xl">
            <h2 class="mb-3 text-4xl md:text-5xl font-bold font-heading tracking-px-n leading-tight">
              Cool events in your
              inbox
            </h2>
            <p class="mb-9 font-medium text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, to the consectr
              adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.
            </p>
            <div
              class="mb-3 p-2 xl:pl-6 inline-block md:max-w-xl w-full border border-gray-300 rounded-lg focus-within:ring focus-within:ring-indigo-300"
            >
              <div class="flex flex-wrap items-center">
                <div class="w-full xl:flex-1">
                  <input
                    id="newsletterInput2-1"
                    class="p-3 border-transparent  border-none focus:[box-shadow:none] xl:p-0 xl:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none"
                    type="text" placeholder="Email address"
                  >
                </div>
                <div class="w-full xl:w-auto">
                  <div class="block">
                    <button
                      class="py-4 px-8 w-full text-white font-semibold border border-indigo-700 rounded-lg focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 font-medium">
              Get the latest content in your inbox every week. We don&rsquo;t
              spam.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-8">
          <div class="flex flex-wrap -m-4">
            <div class="w-full xl:w-1/2 p-4">
              <div class="p-7 bg-gray-50 rounded-2xl">
                <h2 class="mb-2 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  47k+
                </h2>
                <p class="mb-6 text-gray-800 font-semibold">
                  Designer, Developers &amp; Marketers
                </p>
                <p class="text-gray-600 font-medium">
                  Get the latest content on your inbox of every week. We don&rsquo;t
                  need to spam.
                </p>
              </div>
            </div>
            <div class="w-full xl:w-1/2 p-4">
              <div class="p-7 bg-gray-50 rounded-2xl">
                <h2 class="mb-2 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  12
                </h2>
                <p class="mb-6 text-gray-800 font-semibold">
                  Hand-made reports every week
                </p>
                <p class="text-gray-600 font-medium">
                  Get the latest content on your inbox of every week. We don&rsquo;t
                  need to spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <section class="relative pt-24 bg-eventPurple overflow-hidden">
    <img
      class="absolute left-1/2 bottom-0 h-full transform -translate-x-1/2"
      src="flaro-assets/images/footers/gradient.svg" alt=""
    >
    <div class="relative z-10 container px-4 mx-auto">
      <div class="pb-24 border-b border-gray-900">
        <div class="flex flex-wrap -m-8">
          <div class="w-full sm:w-1/2 lg:w-6/12 p-8">
            <div class="lg:max-w-sm">
              <a class="mb-8 inline-block" href="#">
                <img src="../assets/images/eventralize_web_white.png" alt="">
              </a>
              <p class="mb-20 text-gray-400 font-medium leading-relaxed md:max-w-xs">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lectus interdum facilisis odio scelerisque vel neque.
              </p>
              <div class="flex flex-wrap -m-1.5">
                <div class="w-auto p-1.5">
                  <a href="#">
                    <div
                      class="flex items-center justify-center w-9 h-9 border border-gray-800 hover:border-gray-900 rounded-full"
                    >
                      <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.81589 5.30371L5.81589 3.80371C5.81589 3.15371 5.97379 2.80371 7.07905 2.80371H8.44747V0.303711L6.34221 0.303711C3.71063 0.303711 2.658 1.95371 2.658 3.80371V5.30371H0.552734L0.552734 7.80371H2.658L2.658 15.3037H5.81589L5.81589 7.80371H8.13168L8.44747 5.30371H5.81589Z"
                          fill="#D4D4D8"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div class="w-auto p-1.5">
                  <a href="#">
                    <div
                      class="flex items-center justify-center w-9 h-9 border border-gray-800 hover:border-gray-900 rounded-full"
                    >
                      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.8462 2.25418C14.306 2.48722 13.7182 2.65493 13.1126 2.72025C13.7413 2.34675 14.2121 1.75669 14.4367 1.06076C13.8467 1.41171 13.2004 1.6578 12.5265 1.78811C12.2448 1.48698 11.9041 1.24708 11.5257 1.08337C11.1472 0.919662 10.7391 0.835644 10.3268 0.836555C8.65848 0.836555 7.31676 2.18886 7.31676 3.84835C7.31676 4.08139 7.34501 4.31442 7.39091 4.53863C4.89285 4.40799 2.6649 3.21457 1.18372 1.38736C0.913833 1.84834 0.772403 2.37322 0.774144 2.90739C0.774144 3.95251 1.30553 4.87406 2.11586 5.41604C1.63832 5.39724 1.17197 5.26598 0.754725 5.03295V5.07002C0.754725 6.53355 1.78926 7.74639 3.16804 8.02533C2.90916 8.09257 2.64285 8.12697 2.37537 8.12772C2.17941 8.12772 1.99404 8.1083 1.80691 8.08182C2.18824 9.27524 3.29868 10.1421 4.62098 10.1703C3.58645 10.9806 2.29063 11.4573 0.8836 11.4573C0.631146 11.4573 0.398112 11.4485 0.15625 11.4202C1.4909 12.2764 3.07448 12.7708 4.77987 12.7708C10.3162 12.7708 13.3456 8.18421 13.3456 4.2032C13.3456 4.07256 13.3456 3.94192 13.3368 3.81128C13.9229 3.38228 14.4367 2.85089 14.8462 2.25418Z"
                          fill="#D4D4D8"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div class="w-auto p-1.5">
                  <a href="#">
                    <div
                      class="flex items-center justify-center w-9 h-9 border border-gray-800 hover:border-gray-900 rounded-full"
                    >
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.5 0.803711C6.329 0.803711 6.056 0.813711 5.203 0.851711C4.35 0.891711 3.769 1.02571 3.26 1.22371C2.72609 1.42453 2.24249 1.73954 1.843 2.14671C1.43608 2.54641 1.12111 3.02995 0.92 3.56371C0.722 4.07171 0.587 4.65371 0.548 5.50371C0.51 6.35871 0.5 6.63071 0.5 8.80471C0.5 10.9767 0.51 11.2487 0.548 12.1017C0.588 12.9537 0.722 13.5347 0.92 14.0437C1.125 14.5697 1.398 15.0157 1.843 15.4607C2.287 15.9057 2.733 16.1797 3.259 16.3837C3.769 16.5817 4.349 16.7167 5.201 16.7557C6.055 16.7937 6.327 16.8037 8.5 16.8037C10.673 16.8037 10.944 16.7937 11.798 16.7557C12.649 16.7157 13.232 16.5817 13.741 16.3837C14.2746 16.1828 14.7578 15.8678 15.157 15.4607C15.602 15.0157 15.875 14.5697 16.08 14.0437C16.277 13.5347 16.412 12.9537 16.452 12.1017C16.49 11.2487 16.5 10.9767 16.5 8.80371C16.5 6.63071 16.49 6.35871 16.452 5.50471C16.412 4.65371 16.277 4.07171 16.08 3.56371C15.8789 3.02994 15.5639 2.54639 15.157 2.14671C14.7576 1.73939 14.274 1.42436 13.74 1.22371C13.23 1.02571 12.648 0.890711 11.797 0.851711C10.943 0.813711 10.672 0.803711 8.498 0.803711H8.501H8.5ZM7.783 2.24571H8.501C10.637 2.24571 10.89 2.25271 11.733 2.29171C12.513 2.32671 12.937 2.45771 13.219 2.56671C13.592 2.71171 13.859 2.88571 14.139 3.16571C14.419 3.44571 14.592 3.71171 14.737 4.08571C14.847 4.36671 14.977 4.79071 15.012 5.57071C15.051 6.41371 15.059 6.66671 15.059 8.80171C15.059 10.9367 15.051 11.1907 15.012 12.0337C14.977 12.8137 14.846 13.2367 14.737 13.5187C14.6087 13.8661 14.404 14.1801 14.138 14.4377C13.858 14.7177 13.592 14.8907 13.218 15.0357C12.938 15.1457 12.514 15.2757 11.733 15.3117C10.89 15.3497 10.637 15.3587 8.501 15.3587C6.365 15.3587 6.111 15.3497 5.268 15.3117C4.488 15.2757 4.065 15.1457 3.783 15.0357C3.4355 14.9076 3.12113 14.7033 2.863 14.4377C2.59675 14.1797 2.39172 13.8654 2.263 13.5177C2.154 13.2367 2.023 12.8127 1.988 12.0327C1.95 11.1897 1.942 10.9367 1.942 8.79971C1.942 6.66371 1.95 6.41171 1.988 5.56871C2.024 4.78871 2.154 4.36471 2.264 4.08271C2.409 3.70971 2.583 3.44271 2.863 3.16271C3.143 2.88271 3.409 2.70971 3.783 2.56471C4.065 2.45471 4.488 2.32471 5.268 2.28871C6.006 2.25471 6.292 2.24471 7.783 2.24371V2.24571ZM12.771 3.57371C12.6449 3.57371 12.5201 3.59854 12.4036 3.64679C12.2872 3.69503 12.1813 3.76574 12.0922 3.85489C12.003 3.94403 11.9323 4.04986 11.8841 4.16633C11.8358 4.28281 11.811 4.40764 11.811 4.53371C11.811 4.65978 11.8358 4.78461 11.8841 4.90109C11.9323 5.01756 12.003 5.12339 12.0922 5.21253C12.1813 5.30168 12.2872 5.37239 12.4036 5.42064C12.5201 5.46888 12.6449 5.49371 12.771 5.49371C13.0256 5.49371 13.2698 5.39257 13.4498 5.21253C13.6299 5.0325 13.731 4.78832 13.731 4.53371C13.731 4.2791 13.6299 4.03492 13.4498 3.85489C13.2698 3.67485 13.0256 3.57371 12.771 3.57371ZM8.501 4.69571C7.95607 4.68721 7.41489 4.7872 6.90898 4.98985C6.40306 5.19251 5.94251 5.49378 5.55415 5.87613C5.16579 6.25849 4.85736 6.71428 4.64684 7.21697C4.43632 7.71966 4.3279 8.25921 4.3279 8.80421C4.3279 9.34921 4.43632 9.88876 4.64684 10.3915C4.85736 10.8941 5.16579 11.3499 5.55415 11.7323C5.94251 12.1146 6.40306 12.4159 6.90898 12.6186C7.41489 12.8212 7.95607 12.9212 8.501 12.9127C9.57954 12.8959 10.6082 12.4556 11.365 11.687C12.1217 10.9183 12.5459 9.88288 12.5459 8.80421C12.5459 7.72554 12.1217 6.69012 11.365 5.92146C10.6082 5.1528 9.57954 4.71254 8.501 4.69571ZM8.501 6.13671C9.20833 6.13671 9.88669 6.4177 10.3869 6.91786C10.887 7.41802 11.168 8.09638 11.168 8.80371C11.168 9.51104 10.887 10.1894 10.3869 10.6896C9.88669 11.1897 9.20833 11.4707 8.501 11.4707C7.79367 11.4707 7.11531 11.1897 6.61515 10.6896C6.11499 10.1894 5.834 9.51104 5.834 8.80371C5.834 8.09638 6.11499 7.41802 6.61515 6.91786C7.11531 6.4177 7.79367 6.13671 8.501 6.13671Z"
                          fill="#D4D4D8"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 p-8">
            <h3 class="mb-8 text-sm text-white uppercase font-semibold leading-normal tracking-px">
              Products
            </h3>
            <ul>
              <li class="mb-5">
                <a
                  class="text-white hover:text-gray-200 font-medium leading-relaxed"
                  href="#"
                >Services</a>
              </li>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">About
                  Us</a>
              </li>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">News &amp;
                  Stories</a>
              </li>
              <li><a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Roadmap</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 p-8">
            <h3 class="mb-8 text-sm text-white uppercase font-semibold leading-normal tracking-px">
              Important
              links
            </h3>
            <ul>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Our
                  Journeys</a>
              </li>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Pricing
                  Plans</a>
              </li>
              <li class="mb-5">
                <a
                  class="text-white hover:text-gray-200 font-medium leading-relaxed"
                  href="#"
                >Roadmap</a>
              </li>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Terms
                  &amp; Conditions</a>
              </li>
              <li><a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 p-8">
            <h3 class="mb-8 text-sm text-white uppercase font-semibold leading-normal tracking-px">
              Company
            </h3>
            <ul>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">About
                  Us</a>
              </li>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Jobs</a>
              </li>
              <li class="mb-5">
                <a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Press</a>
              </li>
              <li><a class="text-white hover:text-gray-200 font-medium leading-relaxed" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="py-5 text-sm text-gray-300 font-medium text-center leading-normal">
        Copyright © 2022 Eventralize. All
        Rights Reserved
      </p>
    </div>
  </section>
</template>
