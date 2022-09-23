import { Ref, ref } from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { defineStore } from 'pinia'

// export type RootState = ReturnType<typeof state>

interface FeedbackState {
  open: Boolean
  title: Ref<string>
  text: Ref<string>
  cta: Ref<string>
  small: Ref<string>
  type: Ref<string>
}

export const useFeedback = defineStore({
  id: 'feedback',
  state: (): FeedbackState => ({
    open: false,
    title: ref(''),
    text: ref(''),
    cta: ref(''),
    small: ref(''),
    type: ref(''),
  }),
  getters: {
    openGetter: state => state.open,
  },
})

export const actions: ActionTree<RootState, RootState> = {
  openFeedback(bool: Boolean) {
    useFeedback().open = bool
  },
  setTitle(title) {
    useFeedback().title = title
  },
  setText(text) {
    this.text = text
    useFeedback().text = text
  },
  setCTA(cta) {
    useFeedback().cta = cta
  },
  setSmall(small) {
    useFeedback().small = small
  },
  setType(type) {
    useFeedback().type = type
  },
}
