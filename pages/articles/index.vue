<template>
  <div class="text-left">
    <h1 class="title mb-4 border text-center">Article</h1>

    <h2 class="text-xl font-bold">Article Single</h2>
    <ul class="mt-3 list-disc ml-7">
      <li v-for="(article, index) in articles" :key="index">
        <span>{{ article }}</span>
      </li>
    </ul>

    
    <hr class="my-4">
    <h2 class="text-xl font-bold">Article Modules</h2>

  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  head() {
    return {
      meta: [
        {
          name: 'Article page ',
          content: 'Article page description'
        }
      ]
    }
  },
  computed: mapGetters({
    articles: 'articlesSingle/get',
    // comments: 'articlesSingle/comments/get'
  }),
  methods: {
  },

  created() { //dô phát chạy ngay
    console.log('created')
    console.log(this.articles)
  },
}
</script>