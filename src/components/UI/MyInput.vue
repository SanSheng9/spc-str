<template>
  <input :value='modelValue' @input="updateInput" class="input" type="text">
</template>

<script>
export default {
   name: 'my-input',
   props: {
      modelValue: [String, Number]
   },
   methods: {
      updateInput(event) {
         this.$emit('update:modelValue', event.target.value)
      }
   }
}
</script>

<style scoped>
.input {
   border: 2px solid gray;
   height: 2em;
   background-color: black;
   border: none;
   border-bottom: 1px solid gray;
   width: 100%;
   color: darkgray;
   outline: none;
}
.input:focus{
   border-bottom: 1px solid darkgray;
   
}
</style>