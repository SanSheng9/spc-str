<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family:'Courier New', Courier, monospace;
}
*::after{
     font-family:'Courier New', Courier, monospace;


}
body {
  background-color: rgb(0, 0, 0);
  height: 100vh;
  overflow-y: hidden;
  min-width: 100%;
}
</style>