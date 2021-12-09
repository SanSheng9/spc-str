<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
   name: 'my-button'
}
</script>

<style scoped>
.btn {
   color: black;
   border: 3px solid gray;
   background: grey;
   padding: 1em;
   
}
</style>