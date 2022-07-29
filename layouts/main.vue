<template>
  <div>
    <Loading />
    <div class="container-fluid text-[#fff]">
      <div class="flex justify-start">
        <div class="w-[20%] border-r-1 border-[#fff] bg-[#1f374a] h-screen overflow-y-auto">
          <Logo />
          <Menu />
        </div>
        <div class="flex-1 bg-[#2f495e] p-5">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: 'Home page',
    }
  },
  head() {
    return {
      title: this.$route.name === 'index' ? 'Todo - Home' : 'Todo - ' + this.$route.name,
      meta: [
        {
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
<style>
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
