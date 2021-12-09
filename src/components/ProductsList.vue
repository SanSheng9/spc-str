<template>
   <div class="wrapper">
   <div class="list">
      <product-item :admin='admin' v-for='product in products' :product="product" :key="product.id"></product-item>
   </div></div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
  components: { ProductItem },
   props: {
      products: {
         type: Array,
         required: true
      },
      admin: {
         type: Boolean,
         default: false,
      }
   }
}
</script>

<style scoped>
.wrapper{
   margin: 0 auto;
}
.list{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-top: 5em;
}
</style>