import { Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import { StrapiUser } from '@nuxtjs/strapi/dist/runtime/types'

interface UserState {
  user: StrapiUser
  myRef: Ref<string>
}

export const useUser = defineStore('user', {
  state: (): UserState => ({
    user: null,
    myRef: ref('hello'),
  }),
  actions: {
    signInUser(user: StrapiUser) {
      this.user = user
      console.log(user)
    },
  },
})
