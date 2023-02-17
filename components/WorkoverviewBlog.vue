<template>
  <div>
    <div v-if="isShowCarousel">
        <div
          v-for="(entry, index) in workData"
          :key="'slide-' + index + entry.path"
        >
          <div class="work-list entry">
            <div class="work-image">
              <nuxt-link
                :to="entry.path"
                class="group btn-gtm"
                :data-gtm-category="gtmCategory"
                :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                :data-gtm-label="gtmCategory + '_' + entry.title"
              >
                <img
                  :src="isBlog ? 'https://cms.tmrw.com.sg/assets/' + entry.img : config.imgBaseUrl + `/img/${entry.img}`"
                  :alt="entry.title"
                  :style="{ objectPosition: `` + entry.imgPos ? entry.imgPos : '50% 50%'}"
                  class="work-image-img"
                />

                <div
                  class="bg-overlap btn-gtm"
                  :data-gtm-category="gtmCategory"
                  :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                  :data-gtm-label="gtmCategory + '_' + entry.title"
                ></div>
                <div class="bg-overlap-title"></div>
                <div class="work-title">
                  <div class="work-title-child">
                    {{ entry.title }}
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="work-readmore work-desc">
              <div class="work-readmore--wrap">
                <h4 class="work-readmore--content">
                  <nuxt-link
                    :to="entry.path"
                    class="btn-gtm"
                    :data-gtm-category="gtmCategory"
                    :data-gtm-action="'Clicked_' + gtmCategory + '_Link'"
                    :data-gtm-label="gtmCategory + '_' + entry.title"
                  >
                    <span class="icon-plus">
                      <span class="icon-plus-circle">
                        <Pluscircle /></span>
                      READ MORE
                    </span>
                  </nuxt-link>
                </h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>


<script>

export default {

  methods: {
   
  },
  props: {
    workData: Array,
    isBlog: Boolean
  },
  data: () => ({
    isShowCarousel: false,
  }),

  computeds: {},
  watch: {
    // workData: {
    //   // the callback will be called immediately after the start of the observation
    //   immediate: true,
    //   handler(val, oldVal) {
    //     console.log(val);
    //     if (val) {
    //       this.isShowCarousel = true;
    //     }
    //   }
    // }
  }
};
</script>

<style scoped lang="scss">
.gradientBg {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 90%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 90%
  );
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 90%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
p {
  @apply text-white;
}
.entry {
  img {
    @apply transition-all duration-300 ease-in-out hover:opacity-90;
  }
  a {
    @apply transition-all duration-300 ease-in-out hover:opacity-90;
  }
}
.carousel__next,
.carousel__prev {
  @apply lg:mb-40;
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
.work-animation .carousel__track {
  & > li:nth-child(1) {
    @include fade-in("150ms");
  }
  & > li:nth-child(2) {
    @include fade-in("300ms");
  }
  & > li:nth-child(3) {
    @include fade-in("450ms");
  }
}

// work style
.work-list {
  @apply flex flex-col w-full h-full;
}
.work-image {
  @apply relative lg:h-4/5 overflow-hidden;
}
.work-image-img {
  @apply w-full h-[30vh] lg:h-full object-cover;
}
.work-title {
  @apply absolute hidden lg:flex w-full justify-center bottom-8 left-0 transition-all duration-200 z-20 group-hover:bottom-6;
}
.work-title-child {
  @apply text-white font-semibold uppercase text-center px-3 lg:px-5;
}
.bg-overlap {
  @apply absolute bg-black opacity-80 bottom-0 left-0 w-full h-full hidden lg:block transition-all duration-200 group-hover:opacity-0;
}
.bg-overlap-title {
  @apply absolute bottom-0 left-0 w-full h-1/4 gradientBg hidden lg:block z-10;
}
.work-readmore {
  &--wrap {
    @apply flex lg:items-center h-full flex-col lg:flex-row lg:justify-center space-y-2 lg:space-y-0 lg:space-x-4;
  }
  &--content {
    @apply font-semibold tracking-normal text-xl mb-5 lg:mb-0;
  }
  .icon-plus {
    @apply flex items-center;
  }
  .icon-plus-circle {
    @apply w-8 h-8 bg-[#df6136] border-2 border-white rounded-full inline-block mr-3;
  }
}
</style>