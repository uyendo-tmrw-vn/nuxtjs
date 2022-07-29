<template>
  <div v-if="isLoading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  transition: all .3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>