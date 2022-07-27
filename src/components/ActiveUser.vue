<template>
     <div class="container my-1">
    <ul class="list-group">
        <img src="" alt="">
      <h2 class="list-group-item">{{ name }}</h2>
      <hr>
      <h2 class="list-group-item">{{ age }}</h2>
    </ul>
  </div>
</template>

<script>
export default {
        props: {
        name: { type: String, required: true },
        age: { type: String, required: true },
    }

}
</script>

<style>

</style>

