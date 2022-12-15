import { defineStore } from 'pinia'
// import { useStrapi4 } from '../../.nuxt/imports'

// const strapi$ = useStrapi4()

interface EventsState {
  featuredEvents: any[]
  loadingAllEvents: boolean
  allEvents: any[]
}

export const useEvents = defineStore('events', {
  state: (): EventsState => ({
    allEvents: [],
    loadingAllEvents: true,
    featuredEvents: [],
  }),
  actions: {
    async getEventsFromCRM() {
      try {
        // this.allEvents = strapi$.find('events').then(() => this.loadingAllEvents = false)
      }
      catch (e) {
        console.error(e)
      }
    },
  },
})
