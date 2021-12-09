<template>
  <div class="product">
     <div class="block">
   <div class="block1">
      <img :src='require("../assets/" + product.img)' alt="">
   </div>
   <div class="block2">
   <div class="name" :class="{ admin: admin }">{{ product.name }}</div>
   <div class="body">{{ product.body }}</div></div></div>
  </div>
</template>

<script>
export default {
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
   data() {
      return {

      }
      
      
   },
}
</script>

<style scoped>
.product{
   height: 100%;
   width: 20em;
   margin-left: 10px;
   background-color: darkgray;
   flex-basis: 40%;
   margin: 15px;
}
.block{
   display: flex;
   justify-content: center;
   align-items: center;
}
.block1{
   height: 150px;
   padding: 15px;
}
.block1 img{
   height: 100%;
}

.block2 {
}
.name{
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   font-size: 2em;
}
.admin::after {
   content: '-Удалить?';
   font-size: 0.5em;
   color: red;
}

.body {
   color: gray;
}
</style>