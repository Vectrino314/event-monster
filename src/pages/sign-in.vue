<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useSignup } from '~/store/signup'
const { getProviderAuthenticationUrl } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const signup = useSignup()
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/2 justify-center min-h-full pt-7 pb-12 sm:px-6 lg:px-8 w-full">
      <Sign-Header :show-link="true" text-pre="Don't you have an account?" cta="sign up" url-link="/sign-up" />
      <div class="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
          welcome back! ✨
        </h2>
        <div class="px-4 py-8 bg-white drop-shadow-md  hover:drop-shadow-lg transition duration-550  sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST" @submit.prevent="signup.submitForm()">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"> Email address <span class="text-red-900">*</span></label>
              <div class="mt-1">
                <input id="email" v-model="signup.form.email" name="email" type="email" autocomplete="email" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
              <div class="mt-1">
                <input id="password" v-model="signup.form.password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div class="flex items-center justify-start">
              <!-- <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div> -->
              <div class="w-full">
                <button
                  type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                >
                  <template v-if="signup.callingAPI">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </template>
                  <template v-else>
                    Sign in
                  </template>
                </button>
              </div>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative pb-1">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 text-gray-500 bg-white"><a href="/reset-password" for="forgot-password" class="underline underline-offset-4 block text-sm text-gray-900"><small>Forgot password?</small></a></span>
              </div>
            </div>

            <div class="flex items-center pt-4">
              <small class="mx-auto">
                Don't you have an account?
                <a class="ml-1 text-indigo-600" href="/sign-up">sign up</a></small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="basis-1/2 hidden sm:flex w-full overflow-hidden w-screen">
      <img class="h-full object-cover" src="/assets/images/welcome-back-cup.jpg" alt="">
    </div>
  </div>
</template>
