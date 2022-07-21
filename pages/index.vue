<template>
  <div>
    <h1 class="title">Todo</h1>
    <div class="">{{ example }}</div>
    <br>
    <p ref="dom-element">Count Auto: {{ counter }}</p>
    <br>
    <div id="example-1">
      <button @click="test">testValue add 1</button>
      <p>The button above has been clicked {{ testValue }} times.</p>
    </div>
    <br>
    <p>A = {{ propertyA }}</p>
    <p>B = {{ propertyB }}</p>
    <button v-on:click="a++">Thêm 1 vào a</button>
    <br>
    <button v-on:click="b++">Thêm 1 vào b</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      example: 'Example code',
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

    // a:function(){
    //    return this.testValue;
    // }
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