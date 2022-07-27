<template>

  <h1 class="text-center">User</h1>
  <ul class="list-group">
    <active-user 
    :name="name" 
    :age="age"></active-user>
    <user-data 
     @add-user="transfere"></user-data>
  </ul>

</template>

<script>
export default {
  data() {
    return { 
      name: '',
      age: '',
    }
  },
  methods: {
    transfere(age,name){
      this.name = name;
      this.age = age;
    }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>