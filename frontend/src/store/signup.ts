import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import { actions } from '~/store/feedback'

// const { getProviderAuthenticationUrl, register } = useStrapiAuth()

interface SignupState {
  callingAPI: Boolean
  disabledForm: Boolean
  pages: [
    {
      id: Ref<string>
      title: Ref<string>
      cta: Ref<string>
      img: Ref<string>
    },
  ]
  form: {
    email: Ref<string>
    fullname: Ref<string>
    password: Ref<string>
    newsletter: Boolean
  }
}

export const useSignup = defineStore('signup', {
  state: (): SignupState => ({
    callingAPI: false,
    formDisabled: false,
    pages: [
      {
        id: 'sign-up',
        title: 'Create your account ✨',
        link: 'sign in',
        linkUrl: '/sign-in',
        cta: 'Sign up',
        img: '/assets/images/man-couch-laptop-meeting.jpg',
      },
      {
        id: 'sign-in',
        title: 'welcome back! ✨',
        link: 'sign up',
        linkUrl: '/sign-up',
        cta: 'Sign in',
        img: '/assets/images/welcome-back-cup.jpg',
      },
      {
        id: 'reset-password',
        title: 'Reset your Password ✨',
        link: 'sign in',
        linkUrl: '/sign-in',
        cta: 'Send Reset Link',
        img: '/assets/images/man-forgot-his-password.jpg',
      },
      {
        id: 'onboarded',
        title: 'Awesome!<br />Nice to have you',
        link: 'sign in',
        linkUrl: '/sign-up',
        cta: 'Go to dashboard',
        img: '/assets/images/happy-group-standing-together.jpg',
      },
    ],
    form: {
      email: '',
      fullname: '',
      password: '',
      newsletter: '',
    },
  }),
  getters: {
    disabledForm: state => (route) => {
      const keys = Object.keys(state.form)
      const filtered = keys.map((key) => {
        if (key === 'newsletter')
          return undefined
        if (route === 'sign-up')
          return state.form[key]
        if (route === 'sign-in' && key !== 'fullname')
          return state.form[key]
        if (route === 'reset' && key === 'email')
          return state.form[key]
      }).filter(f => f !== undefined)
      const newFilter = filtered.filter(ff => ff !== '')
      return filtered.length !== newFilter.length
    },
    pageData: state => (routeName) => {
      return state.pages.find((s) => {
        return s.id === routeName
      })
    },
  },
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
