import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import { actions } from '~/store/feedback'

// const { getProviderAuthenticationUrl, register } = useStrapiAuth()

interface SignupState {
  callingAPI: Boolean
  form: {
    email: Ref<string>
    fullname: Ref<string>
    password: Ref<string>
  }
}

export const useSignup = defineStore('signup', {
  state: (): SignupState => ({
    callingAPI: false,
    form: {
      email: '',
      fullname: '',
      password: '',

    },
  }),
  actions: {
    calling(bool: Boolean) {
      this.callingAPI = bool
    },
    submitForm(toggleFeedback: Boolean) {
      this.calling(true)
      setTimeout(() => {
        this.calling(false)
        if (toggleFeedback)
          actions.openFeedback(toggleFeedback)
      }, 1000)
    },
  },
})
