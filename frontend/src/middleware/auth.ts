import { useUser } from '../store/user'

export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useStrapiUser()
  const userState = useUser()
  userState.signInUser(user.value)
  if (!user.value) {
    useCookie('redirect', { path: '/' }).value = to.fullPath
    return navigateTo('/sign-in')
  }
})
