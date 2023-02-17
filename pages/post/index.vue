<template>
  <div class="grid grid-cols-1 lg:pt-12 lg:px-12 w-full h-full min-h-screen gap-0 lg:gap-1 work-animation items-star">

    <Head>
      <Title>TMRW SG | Blog</Title>
      <Meta
        name="description"
        content="Strategy built on insights. Ideas that exist beyond boundaries. Campaigns centred around communities."
      />
      <Meta
        name="og:image"
        content="https://cdn.tmrw.com.sg/tmrw-assets/og-image-tmrw-works.jpg"
      />
      <Meta
        name="og:url"
        :content="'https://tmrw.com.sg' + $route.path"
      />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      />
    </Head>
    <!-- <div>ádfasdf
      <WorkoverviewBlog
        :isBlog="true"
        :workData="blogList"
      />
    </div> -->

    <ul>
        <li
          v-for="(item, index) in blogList"
          :key="index"
        >
          <NuxtLink :to="{ path: '/post/'+item.id}" class="hover:underline">
            {{ index +1}}. {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import WorkoverviewBlog from "../../components/WorkoverviewBlog.vue";

const blogList = ref();
//////////////////////////////////
const resultPosts = ref();

const posts = await fetch("https://cms.tmrw.com.sg/items/blogs?filter[status][_eq]=published&fields=id,title,path,description,author,img.id,thumb.id,meta_title,meta_description&sort=sort,+sort")
  .then(response => response.json())
  .then(json => {
    console.log({json});
    json.data.forEach(element => {
      element.img = element.thumb.id;
      element.path = element.id;
    });
    blogList.value = json.data;
  });

  console.log({blogList});

///////////////////////////////////

const getBlogList = async () => {
  $fetch(
    `https://cms.tmrw.com.sg/items/blogs?filter[status][_eq]=published&fields=id,title,path,description,author,img.id,thumb.id,meta_title,meta_description&sort=sort,+sort`
  ).then(function(response) {
    // mapping to old data
    response.data.forEach(element => {
      element.img = element.thumb.id;
      element.path = element.id + "&" + element.path;
    });

    // console.log(333,response.data);
    blogList.value = response.data;
    console.log({ blogList });
  });
};

onMounted(() => {
  console.log("onMounted");
  // getBlogList();
});
</script>

<script>
export default {
  methods: {
    hideVideo() {
      document
        .getElementById("blog-video-container")
        .classList.add("content-fade-out-delayed");
      document
        .getElementById("blog-content-container")
        .classList.add("content-fade-in-delayed");
      document.getElementById("blog-content-container").style.zIndex = "38";
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.backToTop();
  },
};
</script>

<style scoped lang="scss">
@mixin fade-in($waitTime) {
  animation: wait #{$waitTime}, fade-in 500ms #{$waitTime};
  animation-fill-mode: forwards;
}

@mixin fade-out($waitTime) {
  animation: wait2 #{$waitTime}, fade-out 500ms #{$waitTime};
  animation-fill-mode: forwards;
}

@keyframes wait {
  0% {
    opacity: 0;
    overflow: hidden;
    height: 1px;
  }

  100% {
    opacity: 0;
    overflow: hidden;
    height: 1px;
  }
}

@keyframes wait2 {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    overflow: auto;
    height: auto;
  }

  100% {
    opacity: 1;
    height: auto;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

$initialDelay: 0;

.content-fade-in-delayed {
  @media screen and (min-width: 992px) {
    @include fade-in("1ms");
  }
}

.content-fade-out-delayed {
  @media screen and (min-width: 992px) {
    @include fade-out("1ms");
  }
}
</style>