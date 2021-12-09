<template>
  <div class="product">
     <div class="block">
   <div class="block1">
      <img :src='require("../assets/" + product.img)' alt="">
   </div>
   <div class="block2">
   <div class="name" :class="{ admin: admin }">{{ product.name }}</div>
   <div class="body">
      <div class="mass">Mass: {{product.mass}}</div>
      <div class="description">{{ product.body }}</div>
   </div>
   </div>
      </div>
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
   margin-left: 10px;
   flex-basis: 40%;
   margin: 15px;
}
.block{
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
}
.block1{
   height: 12em;
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
   color: darkgray;

}
.admin::after {
   content: ' - Удалить?';
   font-size: 1em;
   color: red;
}

.body {
   color: gray;
}
</style>