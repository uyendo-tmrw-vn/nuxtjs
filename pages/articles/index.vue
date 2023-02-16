<template>
  <div>
    <NuxtLink
      to="/"
      class="text-left block ml-2 font-semibold underline fixed right-[20px] top-[10vh]"
    >Home</NuxtLink>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">Article</h2>
        <p class="text-base text-gray-700 md:text-lg sm:px-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
        <hr class="w-full my-8 border-gray-300" />
      </div>
      <div class="max-w-[80%] mx-auto max-h-[60vh] overflow-auto">
        <table class="min-w-full table-auto ">
          <thead class="justify-between">
            <tr class="bg-gray-800">
              <th class="py-2 px-4 text-center w-[100px]">
                <span class="text-gray-300 block">ID</span>
              </th>
              <th class="py-2 px-4 text-center">
                <span class="text-gray-300">Title</span>
              </th>
              <th class="py-2 px-4 text-center">
                <span class="text-gray-300">Description</span>
              </th>
              <th class="py-2 px-4 text-center"></th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            <tr
              class="bg-white border-4 border-gray-200"
              v-for="(post,index) in resultPosts"
              :key="index"
            >
              <td>
                <span class="text-left block ml-2 font-semibold">{{ post.id }}</span>
              </td>
              <td>
                <NuxtLink
                  :to="`/articles/${post.id}`"
                  class="text-left block ml-2 font-semibold hover:underline "
                >{{ post.title }}</NuxtLink>
              </td>
              <td>
                <span class="text-left block ml-2 font-semibold">{{ post.body }}</span>
              </td>
              <td class="py-2 px-4 text-center">
                <NuxtLink
                  :to="`/articles/${post.id}`"
                  class="text-left block ml-2 hover:underline bg-[green] px-2 py-1 text-[#fff]"
                >View</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const resultPosts = ref();

const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {
    resultPosts.value = json;
  });

  console.log({resultPosts});

</script>
