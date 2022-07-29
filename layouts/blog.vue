<template>
  <div>
    <Loading />
    <div class="page-blog text-[#333]">
      <NuxtLink class="underline uppercase font-bold m-3 flex" to="/">
        <figure class="max-w-[15px] inline-flex">
          <svg xmlns="http://www.w3.org/2000/svg" style="width:100%" className="mr-3" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </figure>
        Home
      </NuxtLink>
      <div class="container">
        <Logo />
        <ul class="flex">
          <li class="hover:underline uppercase font-bold m-3 cursor-pointer">Blog 1</li>
          <li class="hover:underline uppercase font-bold m-3 cursor-pointer">Blog 2</li>
          <li class="hover:underline uppercase font-bold m-3 cursor-pointer">Blog 3</li>
        </ul>
        <div class="mt-5 text-center">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>