<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'
InitApp()
const locale = useState<string>('locale.i18n')
const route = useRoute()
</script>

<template>
  <Html class="font-sans" :lang="locale">
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
  </Head>
    <Body
      class="bg-white text-gray-800 antialiased font-body transition-colors duration-300"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Feedback />
    </Body>
  </Html>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>
