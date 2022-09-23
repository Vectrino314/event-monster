<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'
// import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { actions, useFeedback } from '~/store/feedback'
// const props = defineProps({
//   open: {
//     type: Boolean,
//     required: false,
//   },
// })
const feedback = useFeedback()

// const open = ref(false)
</script>

<template>
  <TransitionRoot as="template" :show="feedback.openGetter">
    <Dialog as="div" class="relative z-10 w-6/12" @close="actions.openFeedback(false)">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div v-if="feedback.type === 'signup'" class="sm:flex justify-center sm:items-center">
                  <img class="w-40 h-auto object-center object-cover" src="/assets/images/confirm-envelope.png">
                </div>
                <div v-if="feedback.type === 'reset'" class="flex items-center justify-center">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckCircleIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                </div>
                <div class="sm:flex sm:items-start md:items-center w-full">
                  <!-- <ExclamationCircleIcon class="h-6 w-6 text-red-600" aria-hidden="true" /> -->
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 md:ml-0 sm:text-center w-full">
                    <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 mt-4">
                      {{ feedback.title }}
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-700 mt-4  mx-auto w-9/12">
                        {{ feedback.text }}
                      </p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-700 my-6 w-100">
                        <button
                          type="button" class="w-100 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 md:ml-0 sm:w-auto sm:text-sm"
                          @click.prevent="actions.openFeedback(false)"
                        >
                          {{ feedback.cta }}
                        </button>
                      </p>
                      <p class="text-sm text-gray-700  mx-auto">
                        <small v-if="feedback.small.length > 0" style="font-size: 10px">{{ feedback.small }}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="feedback.openFeedback(false)">
                  Deactivate
                </button>
                <button ref="cancelButtonRef" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="feedback.openFeedback(false)">
                  Cancel
                </button>
              </div> -->
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
