<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useSignup } from '~/store/signup'
import { actions, useFeedback } from '~/store/feedback'
// const signingUp = ref(false)
const router = useRouter()
// const open = ref(false)
const { getProviderAuthenticationUrl, register } = useStrapiAuth()
const onDiscordClick = () => {
  window.location = getProviderAuthenticationUrl('discord')
}
const signup = useSignup()
actions.setTitle('Almost Done')
actions.setText('Please check your inbox. We just sent a confirmation email to verify your email address. you must click the link in the mail to complete the sign up.')
actions.setCTA('Check your inbox')
actions.setSmall('Haven\'t received an email? try searching your spam or social folder. if you did not receive the message in the next hour. you can request another verification email.')
actions.setType('signup')
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col-12">
      <div class="flex flex-col justify-center min-h-full pt-7 pb-12 sm:px-6 lg:px-8 w-full md:w-1/2">
        <Sign-Header :show-link="true" />

        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 mb-6 text-3xl font-bold tracking-tight text-center text-gray-900">
            Create your account ✨
          </h2>
          <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" action="#" method="POST" @submit.prevent="signup.submitForm(true)">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"> Email address <span class="text-red-900">*</span></label>
                <div class="mt-1">
                  <input id="email" v-model="signup.form.email" name="email" type="email" autocomplete="email" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div>
                <label for="name" class="block text-sm font-medium text-gray-700"> Full name <span class="text-red-900">*</span></label>
                <div class="mt-1">
                  <input id="name" v-model="signup.form.fullname" name="name" type="name" autocomplete="name" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                <div class="mt-1">
                  <input id="password" v-model="signup.form.password" name="password" type="password" autocomplete="new-password" required="true" class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div class="flex flex-col items-left justify-between w-full">
                <div class="flex items-left">
                  <input id="remember-me" name="remember-me" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                  <label for="remember-me" class="block ml-2 text-sm text-gray-900"> Email me about EventMonster news </label>
                </div>

                <!-- <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
                </div> -->
                <div class="mt-4 w-full">
                  <button
                    type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <template v-if="signup.callingAPI">
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
                  <span class="px-2 text-gray-500 bg-white">or sign up with</span>
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
                  <a class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50" @click.prevent="onDiscordClick()" @click="onDiscordClick()">
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
      <div class="hidden sm:flex flex-col justify-start w-full sm:w-full md:w-1/2">
        <img class="h-full object-cover" src="/assets/images/man-couch-laptop-meeting.jpg" alt="">
      </div>
    </div>
  </div>
</template>
