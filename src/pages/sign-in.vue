<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useSignup } from '~/store/signup'
definePageMeta({ layout: 'sign' })
const { getProviderAuthenticationUrl } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const signup = useSignup()
</script>

<template>
  <div class="px-4 py-8 bg-white drop-shadow-md  hover:drop-shadow-lg transition duration-550  sm:rounded-lg sm:px-10">
    <form class="space-y-6" action="#" method="POST" @submit.prevent="signup.submitForm()">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Email address <span class="text-indigo-600">*</span></label>
        <div class="mt-1">
          <input
            id="email" v-model="signup.form.email" :invalid="!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(signup.form.email)" name="email" type="email" autocomplete="email" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"> Password <span class="text-indigo-600">*</span></label>
        <div class="mt-1">
          <input id="password" v-model="signup.form.password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>

      <div class="flex items-center justify-start">
        <div class="w-full">
          <button
            type="submit" :disabled="signup.disabledForm('sign-in')" :class="{ 'disabled:opacity-75': signup.disabledForm('sign-in') }" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
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
      <div class="flex justify-end items-center pt-4">
        <span class="px-2 text-gray-500 bg-white"><a href="/reset-password" for="forgot-password" class="underline underline-offset-4 block text-sm text-gray-900"><small>Forgot password?</small></a></span>
      </div>
    </div>
  </div>
</template>
