<template>
  <div v-for="product in products" :key='product.id'>
      <div v-if="product.id == number" class="planet">
          <product-item :product="product"></product-item>
      </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  components: { ProductItem },
      props: {
      products: {
         type: Array,
         required: true
      },
      number: {
          type: Number,
          required: true,
      }

      },
    data() {
        return {
        }
    },
    methods:{
    }
}
</script>

<style scoped>
</style>