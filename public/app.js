console.log("hello vue");


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hans Muster',
        age: 55
      }
    },
    methods: {
      increaseAge() {this.age++} 
    },
  }).mount('#app')