<template>
  <div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">User & Article</h2>
        <p class="text-base text-gray-700 md:text-lg sm:px-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
        <hr class="w-full my-8 border-gray-300" />
      </div>
      <div class="max-w-[80%] mx-auto max-h-[60vh] overflow-auto text-center">
        <ul class=" flex justify-center">
          <li>
            <NuxtLink
              :to="`/articles`"
              class="text-left block ml-2 underline"
            >Articles</NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="`/user`"
              class="text-left block ml-2 underline"
            >User</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
