<template>
  <div class="post-detail relative flex flex-col w-full h-full min-h-screen items-center work-animation">

    <Head>
      <Title>Blog | {{ blogDetail.title }}</Title> 
     <Meta
        name="description"
        :content="blogDetail.meta_description?blogDetail.meta_description:blogDetail.title"
      />
      <Meta
        name="og:title"
        :content="blogDetail.meta_title?blogDetail.meta_title:blogDetail.title"
      />
      <Meta
        name="og:description"
        :content="blogDetail.meta_description?blogDetail.meta_description:blogDetail.title"
      />
      <Meta
        name="og:url"
        :content="'https://tmrw.com.sg' + $route.path"
      />
      <Meta
        name="author"
        :content="blogDetail.author"
      />
      <Link
        rel="stylesheet"
        href="https://use.typekit.net/owf4cjy.css"
        prefetch
        preconnect
      /> 
    </Head>
    <div class="post-detail-wrap container pt-10 lg:pt-12 lg:pb-20">
      <img
        v-show="blogDetail.imgLink"
        :src="'https://cms.tmrw.com.sg/assets/'+blogDetail.imgLink"
        :alt="blogDetail.title"
        class="w-full h-auto mt-2 mb-5 border-2 border-white"
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-16">
        <div class="col-span-12">

          <div class="flex flex-col">
            <h1 class="font-normal tracking-normal text-2xl">
              <span class="uppercase">{{ blogDetail.title }}</span>
              <span
                class="text-base block"
                v-html="blogDetail.sub_title"
              ></span>
            </h1>
          </div>

          <!-- description from cms  -->
          <div
            class="grid grid-cols-1 gap-y-8 lg:gap-y-0 lg:gap-x-10 my-4 lg:my-16"
            v-html="blogDetail.description"
          ></div>
          <p class="font-normal tracking-normal mt-20 uppercase">
            {{blogDetail.author}}
          </p>

          <!-- static  -->
          <span class="border-t border-neutral-400 block w-full my-8"></span>
          <div class="block lg:hidden">
            <span
              class=" w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-full transition duration-300 rotate-180 cursor-pointer"
              :class="!scrolled && 'opacity-0 -z-30'"
              @click="backToTop()"
            >
              <Arrowdown />
            </span>
          </div>
          
        </div>
      </div>

      <div class="hidden lg:block lg:fixed lg:bottom-24 cursor-pointer">
        <span
          class="w-8 h-8 p-1 flex items-center justify-center border-2 border-white rounded-full transition duration-300 rotate-180 cursor-pointe "
          :class="!scrolled && 'opacity-0 -z-30'"
          @click="backToTop()"
        >
          <Arrowdown />
        </span>
      </div>

    </div>
  </div>
</template>
    
<script setup>
import { onMounted, ref, computed } from "vue";


const config = useRuntimeConfig();

const route = useRoute();
const slug = route.params.id;
const blogDetail = ref({});
const blogList = ref([]);
const id = ref();

/////////////////////////////////////////////////
console.log({slug});
const postDetail = ref();
const post = await fetch(
  `https://cms.tmrw.com.sg/items/blogs/${slug}?filter[status][_eq]=published&fields=id,title,sub_title,path,description,author,img.id,thumb.id,meta_title,meta_description` 
)
  .then(response => response.json())
  .then(json => {
    json.data.imgLink = json.data.img.id;
    json.data.thumbLink = json.data.thumb.id;
    blogDetail.value = json.data;
    
  });

  console.log(blogDetail);

/////////////////////////////////////////////////
onMounted(() => {
  console.log("onMounted");

  // detail
  id.value = slug;
  // getBlogDetail(id);

  // list
  // getBlogList();
});

const getBlogDetail = async params => {
  $fetch(
    `https://cms.tmrw.com.sg/items/blogs/${params.value}?filter[status][_eq]=published&fields=id,title,sub_title,path,description,author,img.id,thumb.id,meta_title,meta_description`
  ).then(function(response) {
    response.data.imgLink = response.data.img.id;
    response.data.thumbLink = response.data.thumb.id;

    blogDetail.value = response.data;
    // console.log({ blogDetail });

  });
};

const getBlogList = async () => {
  $fetch(
    `https://cms.tmrw.com.sg/items/blogs?filter[status][_eq]=published&fields=id,title,path,description,author,img.id,thumb.id,meta_title,meta_description&sort=sort,+sort`
  ).then(function(response) {
    // mapping to old data
    response.data.forEach(element => {
      element.thumbLink = element.thumb.id;
      element.path = element.id + "&" + element.path;
    });

    blogList.value = response.data;
    // console.log({blogList});
  });
};
</script>



<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      scrolled: false,
      blogDetail2: {},
    };
  },
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      if (window.pageYOffset > window.innerHeight - 350) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    getBlogDetail() {
      let result = this.$router;
      // console.log({result},result.currentRoute.value.params.slug);
      const id = result.currentRoute.value.params.slug;
      // console.log({id});
      $fetch(
        `https://cms.tmrw.com.sg/items/blogs/${id}?filter[status][_eq]=published&fields=id,title,sub_title,path,description,author,img.id,thumb.id,meta_title,meta_description`
      ).then(function(response) {
        response.data.imgLink = response.data.img.id;
        response.data.thumbLink = response.data.thumb.id;
        // this.blogDetail2 = response.data
        // console.log(888,response.data);
      });
    }
  },
  head() {
    return {
      // title: this.blogDetail2.title || "title-2"
      // title: "title-2"
    };
  },
  mounted() {
    // this.getBlogDetail();
    this.backToTop();

    window.addEventListener("scroll", this.handleScroll);
    if (window.pageYOffset > window.innerHeight - 350) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  },
 
});
</script>

<style scoped lang="scss">
p {
  @apply mb-4;
}
.entry {
  img {
    @apply transition-all duration-300 ease-in-out hover:opacity-90;
  }
  a {
    @apply transition-all duration-300 ease-in-out hover:opacity-90;
  }
}
@mixin fade-in($waitTime) {
  animation: wait #{$waitTime}, fade-in 500ms #{$waitTime};
  animation-fill-mode: forwards;
}
@keyframes wait {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
$initialDelay: 0;
.content-fade-in-delayed {
  @include fade-in($initialDelay + "ms");
}
.work-animation {
  & > div:nth-child(1) {
    @include fade-in("150ms");
  }
  & > div:nth-child(2) {
    @include fade-in("600ms");
  }
  & > div:nth-child(3) {
    @include fade-in("450ms");
  }
}
</style>