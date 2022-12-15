<script setup>
definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div class="p-12 grid grid-cols-12 gap-y-2 place-items-center lg:h-screen">
    <!--    <div></div> -->
    <div class="flex flex-col col-span-12 gap-8 flex-shrink-0 items-center px-4">
      <img
        class="block mb-12 dark:hidden h-6 sm:h-12 md:h-24 lg:h-32 w-auto" src="../assets/images/eventralize-logo-highres.png"
        alt="Event Monster"
      >
      <img
          class="hidden dark:block h-6 sm:h-12 md:h-24 lg:h-32 w-auto" src="../assets/images/eventralize-logo-highres-white.png"
          alt="Event Monster"
      >
      <div class="dark:text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Your Favorite Tech Events & Meetups in One Place
      </div>
      <div class="dark:text-white font-medium text-lg max-w-xl">
        Welcome to the first event site where you can post and promote your online events like Twitter Spaces, LinkedIn
        Audio and more.
      </div>
      <div class="dark:text-white font-medium text-lg max-w-xl">
        With a roadmap that also includes tickets, web3 and unique payment API, we are excited to help you promote your
        hard work.
      </div>
      <div class="dark:text-white font-medium text-lg max-w-xl">
        MVP is expected to launch in Q4 2022!
      </div>
      <div class="dark:text-white font-medium text-lg max-w-xl">
        <!--        additional space -->
      </div>
      <div class="dark:text-white font-bold text-lg max-w-xl">
        Until then, please join us on Twitter, LinkedIn, or Discord
      </div>
      <div class="grid grid-cols-3 place-items-center">
        <a target="_blank" href="https://twitter.com/eventralize">
          <img
              class="h-12 w-auto" src="../assets/images/Twitter-Emblem.png"
              alt="Twitter"
          >
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/eventralize">
          <img
              class="h-12 w-auto" src="../assets/images/Linkedin-Emblem.png"
              alt="LinkedIn"
          >
        </a>
        <a target="_blank" href="https://discord.gg/CE39CtrmnX">
          <img
              class="h-12 w-auto" src="../assets/images/Discord-Emblem.png"
              alt="Discord"
          >
        </a>

      </div>
    </div>

    <!--    <Header /> -->
    <!--    <Starter/> -->
  </div>
</template>
