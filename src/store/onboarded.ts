import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import { actions } from '~/store/feedback'

// const { getProviderAuthenticationUrl, register } = useStrapiAuth()

interface OnboardedState {
  callingAPI: Boolean
  disabledForm: Boolean
  steps: [
    {
      id: Ref<string>
      name: Ref<string>
      href: Ref<string>
      title: Ref<string>
      text: Ref<string>
      status: Ref<string>
      completed: Boolean
    },
  ]
  form: {
    type: Ref<string>
  }
}

export const useOnboarded = defineStore('onboarded', {
  state: (): OnboardedState => ({
    callingAPI: false,
    formDisabled: false,
    steps: [
      {
        id: '1',
        img: '/assets/images/woman-laptop-meeting.jpg',
        name: 'start',
        href: '#start',
        title: 'Tell us a little about you',
        text: 'To help us delivery the most relevant experience for you, we would love to know if you are using EventMonster as an individual or on the behalf of an organization.',
        textSecondBold: 'Please note, that we DO NOT sell your information to any third-party entity.',
        textSecond: 'We appreciate your trust and use your information only to enhance your experience.',
        cta: 'Read more.',
        status: 'current',
        completed: false,
      },
      {
        id: '2',
        img: '/assets/images/man-couch-laptop-meeting.jpg',
        name: 'individual',
        href: '#individual',
        title: 'Why did you sign up?',
        text: 'Learning more about why you signed up with EventMonster helps us focus on the reasons you are here. We can better help connect you with relevant events, so you don’t miss anything great.',
        status: '',
        completed: false,
        list: [
          { answer: 'Meet people like me', active: false },
          { answer: 'Develop a skill', active: false },
          { answer: 'Grow my tech/business network', active: false },
          { answer: 'Find and go to real-life events', active: false },
          { answer: 'Participate in online-events', active: false },
          { answer: 'Something else', active: false },
        ],
      },
      {
        id: '2',
        img: '/assets/images/people-attending-live-event.png',
        name: 'organization',
        href: '#organization',
        title: 'Why did you sign up?',
        text: 'Learning more about why you signed up with EventMonster helps us focus on the reasons you are here. This also helps us show your events to the relevant visitors.',
        status: '',
        completed: false,
        list: [
          { answer: 'Promote my personal brand', active: false },
          { answer: 'Promote a startup', active: false },
          { answer: 'Promote real- life event', active: false },
          { answer: 'Promote online events', active: false },
          { answer: 'Something else', active: false },
        ],
      },
      {
        id: '3',
        img: '/assets/images/happy-group-standing-together.jpg',
        name: 'complete',
        href: '#complete',
        title: 'Awesome! Nice to have you',
        text: 'Learning more about why you signed up with EventMonster helps us focus on the reasons you are here. We can better help connect you with relevant events, so you don’t miss anything great.',
        status: '',
        completed: false,
      },
    ],
    form: {
      type: 'individual',
    },
  }),
  getters: {
    anyActive: state => (list) => {
      if (list && list.length)
        return list.some(l => !!l.active)
      else return true
    },
    filterSteps: (state) => {
      return state.steps.filter((s) => {
        return s.id !== '2' || s.name === state.form.type
      })
    },
    currentStep: (state) => {
      return state.steps.find((s) => {
        return s.status === 'current'
        // return s.id !== '2' || s.name === state.form.type
      })
    },
    stepsData: state => (routeName) => {
      return state.steps.find((s) => {
        return routeName.split('-').includes(s.name)
      })
    },
  },
  actions: {
    setStatus(step: Object, status: String) {
      console.log(step.step.status, status, 'setSt')
      this.steps.find((s) => {
        console.log(s)
        return true
      })
    },
    setType(types: String) {
      this.form.type = types
    },
    setList(answer: Object, step: Object) {
      // this.steps
      if (!answer.active) {
        const nonActive = step.list.map((s) => {
          s.active = false
        })
        answer.active = true
      }
      else { answer.active = false }

      // this.form.type = types
    },
    navigateBack(route: Object, step: Object) {
      const newFormat = this.steps.map((ii) => {
        if (ii.name === step.name) {
          ii.completed = false
          ii.status = ''
        }
        else {
          console.log(ii.status, ii.completed, ii.name, step.name)
        }
        return ii
      })
      this.steps = newFormat

      navigateTo({
        path: ['complete'].includes(step.name) ? `/onboarded/${this.form.type}` : ['individual', 'organization'].includes(step.name) ? '/onboarded/start' : '',
      })
    },
    navigate(route: Object, step: Object) {
      const newFormat = this.steps.map((ii) => {
        if (['complete'].includes(step.name)) {
          ii.status = ii.name === 'start' ? 'current' : ''
        }
        else {
          if (ii.name === step.name) {
            ii.completed = true
            ii.status = 'complete'
          }

          if (parseInt(step.id) + 1 === parseInt(ii.id) && ii.status !== 'completed')
            ii.status = 'current'
        }

        return ii
      })
      this.steps = newFormat

      navigateTo({
        path: ['complete'].includes(step.name) ? '/onboarded/start' : ['individual', 'organization'].includes(step.name) ? '/onboarded/complete' : `/onboarded/${this.form.type}`,
      })
    },

  },
})
