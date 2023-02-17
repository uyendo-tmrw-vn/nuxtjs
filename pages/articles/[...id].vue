<template>
  <div class="px-4 mt-[20vh] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <NuxtLink
      to="/user"
      class="text-left block ml-2 font-semibold underline fixed right-[20px] top-[10vh]"
    >Article</NuxtLink>

    <Head>
      <Title>Article - {{ postDetail.id }}.{{ postDetail.title}}</Title>
      <Meta
        name="description"
        :content="`${postDetail.id}`+'.'+`${postDetail.body}`"
      />
      <Meta
        name="og:description"
        :content="`${postDetail.id}`+'.'+`${postDetail.body}`"
      />
      <Meta
        name="og:title"
        :content="`${postDetail.id}`+'.'+`${postDetail.title}`"
      />
    </Head>

    <div class="max-w-[80%] mx-auto max-h-[60vh] overflow-auto">
      <table class="min-w-full table-auto ">
        <thead class="justify-between">
          <tr class="bg-gray-800 border-4 border-gray-800">
            <th class="py-2 px-4 text-center w-[100px]">
              <span class="text-gray-300 block">User ID</span>
            </th>
            <th class="py-2 px-4 text-center">
              <span class="text-gray-300">Title</span>
            </th>
            <th class="py-2 px-4 text-center">
              <span class="text-gray-300">Description</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          <tr
            class="bg-white border-4 border-gray-200"
            v-show="postDetail"
          >
            <td>
              <span class="text-left block ml-2 font-semibold">{{ postDetail.id }}</span>
            </td>
            <td>
              <span class="text-left block ml-2 font-semibold">{{ postDetail.title}}</span>
            </td>
            <td>
              <span class="text-left block ml-2 font-semibold">{{ postDetail.body }}</span>
            </td>
          </tr>
          <tr
            class="bg-white border-4 border-gray-200"
            v-show="!postDetail"
          >
            <td colspan="3">
              <span class="block ml-2 font-semibold text-center">No data</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();

const postDetail = ref();

const post = await fetch(
  "https://jsonplaceholder.typicode.com/posts/" + route.params.id
)
  .then(response => response.json())
  .then(json => {
    postDetail.value = json;
  });

// console.log(postDetail);
</script>
