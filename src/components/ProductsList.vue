<template>
   <div class="wrapper">
   <div class="list">
      <transition-group name="products-list">
      <product-item 
      :admin='admin' 
      v-for='product in products' 
      :product="product" 
      v-bind:key="product.id"
      @delete='$emit("delete", product)'>
      </product-item>
      </transition-group>
   </div></div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
   emit: ['delete'],
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
   width: 80%;
}
.list{
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;   
   margin-top: 5em;
}
.products-list-move {
  transition: transform 0.8s ease;
}
</style>
