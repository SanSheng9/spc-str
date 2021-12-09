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
   padding: 0px 10px;
   margin: 0 auto;
   margin-top: 80px;
}
.list{
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
}
</style>