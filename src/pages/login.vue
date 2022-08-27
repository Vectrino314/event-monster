<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<script setup lang="ts">
let signingUp = ref(false)
const { getProviderAuthenticationUrl } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const sendMessage = () => {
  signingUp = true
  // console.log('start', signingUp)
  setTimeout(() => {
    signingUp = ref(false)
    // console.log('end', signingUp)
  }, 10000)
}
</script>

<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex flex-col">
    <div class="flex flex-col-12">
      <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8" style="width:50%;">
        <div class="flex flex-col justify-start">
          <img class="w-auto h-12 mx-auto" src="/EventMonster Logo Web.png" alt="Workflow">
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
            Create your account ✨
          </h2>
          <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" action="#" method="POST" @submit.prevent="sendMessage()">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"> Email address <span class="text-red-900">*</span></label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div>
                <label for="fullname" class="block text-sm font-medium text-gray-700"> Full name <span class="text-red-900">*</span></label>
                <div class="mt-1">
                  <input id="fullname" name="fullname" type="fullname" autocomplete="fullname" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                <div class="mt-1">
                  <input id="password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                  <label for="remember-me" class="block ml-2 text-sm text-gray-900"> Email me about EventMonster news </label>
                </div>

                <!-- <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div> -->
                <div>
                  {{ signingUp }}
                  <button
                    type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    @click="sendMessage"
                  >
                    <template v-if="signingUp">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </template>
                    <template v-else>
                      Sign up
                    </template>
                  </button>
                </div>
              </div>
            </form>

            <div class="mt-6">
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 text-gray-500 bg-white">or create account with</span>
                </div>
              </div>

              <div class="grid grid-row-3 gap-3 mt-6">
                <div>
                  <a href="#" class="inline-flex justify-start w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    <span class="sr-only">Sign up with Google</span>
                    <img src="/assets/svg/google.svg" style="width: 20px;height:20px">
                    <div class="inline-flex justify-center w-full">
                      Google
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                    <span class="sr-only">Sign up with Twitter</span>
                    <img src="/assets/svg/twitter.svg" style="width: 20px;height:20px">
                    <div class="inline-flex justify-center w-full">
                      Twitter
                    </div>
                  </a>
                </div>
                <div>
                  <a class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50" @click="onDiscordClick()">
                    <span class="sr-only">Sign up with Discord</span>
                    <img src="/assets/svg/discord.svg" style="width: 20px;height:20px">
                    <div class="inline-flex justify-center w-full">
                      Discord
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-local bg-no-repeat object-cover" style="width:50%;background-image: url(/assets/images/man-couch-laptop-meeting.jpg)">
        &nbsp;
      </div>
    </div>
  </div>
</template>
