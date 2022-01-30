<template>
  <div class="product" @click='$emit("delete", product)'>
     <div class="block">
   <div class="block1">
      <img :src='require("../assets/" + product.img)' alt="">
   </div>
   <div class="block2">
   <div class="name"  :class="{ admin: admin }">{{ product.name }}</div>
   <div class="body">
      <div class="mass">Mass (kg): ~{{product.mass}}e15 </div>
      <div class="description">{{ product.body }}</div>
   </div>
   </div>
      </div>
  </div>
</template>

<script>
export default {
   emit: ['delete'],
   props: {
      product: {
         type: Object,
         required: true,
      },
      admin: {
         type: Boolean,
         default: false,
      }
   },
   methods: {
      }
   }

   
   
</script>

<style scoped>

.product{
   margin-left: 10px;
   margin: 15px;
}
.block{
   display: grid;
   grid-template-columns: 1fr 2fr;
   grid-gap: 5px;   
   width: 100%;
   align-items: center;
}
.block1{
   padding: 15px;
}
.block1 img{
   max-width: 100%;
}

.block2 {
   
}
.name{
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   font-size: 2em;
   color: darkgray;

}
.admin::after {
   content: ' - Delete?';
   font-size: 1em;
   color: red;
}

.body {
   color: gray;
   font-size: 1em;
}

@media (max-width: 1250px) {
   .block{
      display: block;
      margin: 0 auto;
   }
   .block1{
      max-width: 18em;
      margin: 0 auto;
   }
   .body{
      font-size: 3vw;
   }
   .product{
      margin: 0;
   }
}
</style>