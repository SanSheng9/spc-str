<template>
   <div class="wrapper">
   <div class="list" v-if="products.length > 0" >
      <transition-group name="products-list">
      <product-item
      :admin='admin' 
      v-for='product in products' 
      :product="product" 
      v-bind:key="product.id"
      @delete='$emit("delete", product)'>
      </product-item>
      </transition-group>
   </div>
   <div v-else class="no_products">
      <p>All planet is destroyed!</p></div></div>
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
   width: 85%;
}
.no_products{
   color: white;
   position: absolute;
   top: 30%;
   left: 25%;
}
.no_products p{
   font-size: 5em;
}
.list{
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 10px;   
   margin-top: 1em;
}


@media (max-width: 1250px) {
   .list{
      grid-template-columns: 1fr;
   }
}
.products-list-move {
  transition: transform 0.8s ease;
}
</style>
