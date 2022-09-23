<script setup>
definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div class="p-12 grid gap-y-2 place-items-center h-screen">
    <!--    <div></div> -->
    <div class="flex flex-col gap-8 flex-shrink-0 items-center px-4">
      <img
        class="h-12 sm:h-24 md:h-32 lg:h-48 xl:h-56 w-auto" src="/src/assets/images/EventMonster%20Logo%20Web.png"
        alt="Event Monster"
      >
      <div class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Your Favorite Tech Events & Meetups in One Place
      </div>
      <div class="font-medium text-lg max-w-xl">
        Welcome to the first event site where you can post and promote your online events like Twitter Spaces, LinkedIn
        Audio and more.
      </div>
      <div class="font-medium text-lg max-w-xl">
        With a roadmap that also includes tickets, web3 and unique payment API, we are excited to help you promote your
        hard work.
      </div>
      <div class="font-medium text-lg max-w-xl">
        MVP is expected to launch in October/November 2022!
      </div>
      <div class="font-medium text-lg max-w-xl">
        <!--        additional space -->
      </div>
      <div class="font-bold text-lg max-w-xl">
        Until then, please join us on Twitter, LinkedIn, or Discord
      </div>
      <div class="grid grid-cols-3 place-items-center">
        <a target="_blank" href="https://twitter.com/ItsEventMonster">
          <img
              class="h-12 w-auto" src="/src/assets/images/Twitter-Emblem.png"
              alt="Twitter"
          >
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/eventmonsterco">
          <img
              class="h-12 w-auto" src="/src/assets/images/Linkedin-Emblem.png"
              alt="LinkedIn"
          >
        </a>
        <a target="_blank" href="https://discord.gg/CE39CtrmnX">
          <img
              class="h-12 w-auto" src="/src/assets/images/Discord-Emblem.png"
              alt="Discord"
          >
        </a>

      </div>
    </div>

    <!--    <Header /> -->
    <!--    <Starter/> -->
  </div>
</template>
