<template>
  <div>
    <h1 class="title mb-4 border text-center">Lifecycle</h1>
    <div class="">{{ example }}</div>
    <br>
    <p ref="dom-element">Count Auto: {{ counter }}</p>
    <br>
    <div id="example-1" class="flex items-center">
      <p class="mr-3">The button above has been clicked {{ testValue }} times.</p>
      <v-btn @click="test">testValue add 1</v-btn>
    </div>
    <br>

    <div class="flex items-center">
      <p class="mr-3">A = {{ propertyA }}</p>
      <v-btn v-on:click="a++">Thêm 1 vào a</v-btn>
    </div>
    <br>
    <div class="flex items-center">
      <p class="mr-3">B = {{ propertyB }}</p>
      <v-btn v-on:click="b++">Thêm 1 vào b</v-btn>
    </div>

  </div>
</template>

<script>

export default {
  layout: 'main',
  head() {
    return {
      meta: [
        {
          name: 'Lifecycle page ',
          content: 'Lifecycle page description'
        }
      ]
    }
  },
  data() {
    return {
      example: 'Example code with static variable ',
      counter: 0,
      testValue: 0,
      a: 0,
      b: 0
    }
  },
  methods: {
    counterUpdate() {
      console.log('counterUpdate');
      setInterval(() => {
        this.counter++;
      }, 1000)
    },
    test: function () {
      this.testValue += 1
    }
  },

  // 1. Khởi tạo
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() { //dô phát chạy ngay
    console.log('created')
    this.counterUpdate()
  },
  //chứa function (giống như useEffect trong react)
  computed: {
    propertyA: function () {
      console.log('Tính toán thuộc tính A');
      return this.a;
    },
    propertyB: function () {
      console.log('Tính toán thuộc tính B');
      return this.b;
    },
  },

  /*2. Chèn vào DOM*/
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
    console.log(111, this.$el);
  },

  /*sau khi mount (thuc hien khi cos data thay doi)*/
  beforeUpdate() {
    // console.log(this.counter);
  },
  update() {
    // gọi mỗi giây
    // console.log(+this.$refs['dom-element'].textContent === this.counter)
  },

  /*4.xoa */
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
}
</script>