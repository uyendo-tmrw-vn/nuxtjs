<template>
  <div class="mt-3 ml-5 flex flex-col">
    <NuxtLink class="hover:underline font-bold m-3" to="/">Home</NuxtLink>
    <NuxtLink class="hover:underline font-bold m-3" to="/lifecycle">Lifecycle</NuxtLink>
    <NuxtLink class="hover:underline font-bold m-3" to="/articles">Articles (Store)</NuxtLink>
    <NuxtLink class="hover:underline font-bold m-3" to="/about">About</NuxtLink>
    <NuxtLink class="hover:underline font-bold m-3" to="/blog">Blog</NuxtLink>
  </div>
</template>

<style>
.nuxt-link-exact-active{
  text-decoration: underline;
}
</style>