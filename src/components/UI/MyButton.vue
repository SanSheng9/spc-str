<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
   name: 'my-button'
}
</script>

<style scoped>
.btn{
border-radius: 4px;
-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08);
-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08);
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.08);
color: gray;
display:block;
width:100px;
text-align: center;
font-size: 14px;
padding: 8px 16px;
margin: 0 auto;
text-decoration: none;
text-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
-webkit-transition: background-color 0.1s linear;
-moz-transition: background-color 0.1s linear;
-o-transition: background-color 0.1s linear;
transition: background-color 0.1s linear;        
}
.btn {
background-color: rgb(0, 0, 0);
border: 1px solid gray;
}
        
.btn:hover {
  border: 1px solid darkgray;
color: darkgray;

}
</style>