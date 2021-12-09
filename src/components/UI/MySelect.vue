<template>
  <select v-model="modelValue" @change="changeOptions" class="select">
      <option disabled value="">Select from the list...</option>
      <option 
      v-for='option in options' 
      :key="option.value" 
      :value="option.value">
      {{option.name}}</option>
  </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update:modelValue', event.model.target)
        }
    }
}
</script>

<style scoped>
.select{
     border: 2px solid gray;
   height: 2em;
   background-color: darkgrey;
   width: 100%;
}
</style>