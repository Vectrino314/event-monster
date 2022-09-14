<!-- eslint-disable no-console -->
<!-- <script lang="ts">
export {}
</script>

<script setup lang="ts">
const { authenticateProvider } = useStrapiAuth()
const route = useRoute()
// console.log(route)
await authenticateProvider('github', route.query.access_token)
</script> -->
<!--
<script>
export default {
  data() {
    return {
      provider: this.$route.params.provider,
      access_token: this.$route.query.access_token,
    }
  },
  async mounted() {
    const res = await this.$axios.$get(
      `/auth/${this.provider}/callback?access_token=${this.access_token}`,
    )

    const { jwt, user } = res
    // store jwt and user object in localStorage
    this.$auth.$storage.setUniversal('jwt', jwt)
    this.$auth.$storage.setUniversal('user', { username: user.username, id: user.id, email: user.email })

    this.$router.push(`/users/${user.id}`)
  },
}
</script> -->
<script setup lang="ts">
import { thisTypeAnnotation } from '@babel/types'

const { authenticateProvider, fetchUser } = useStrapiAuth()
const route = useRoute()
console.log(route.params.provider)
console.log(route.query.access_token)

try {
  await authenticateProvider(route.params.provider, route.query.access_token)
}
catch (e) {
  console.log(e)
}

const user = await fetchUser()
console.log(user)

// redirect to main page of the application

</script>

<template>
  <div>
    <h1>user page</h1>
  </div>
</template>

<style lang="scss" scoped></style>
