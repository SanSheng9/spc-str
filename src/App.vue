<template>
  <div class="app" @scroll="visibleElement">
    <navbar @move='callFromNav' :page='pageVisible'></navbar>
    <solar-system id="page-1" :tmblr='tmblr' :planets='planets'></solar-system>
    <products id="page-2" @planets='giveProductsFromComp'></products>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SolarSystem from './views/SolarSystem.vue'
import Products from './views/Products.vue'
import $ from 'jquery'
import { ref } from 'vue'

export default {
  components: { Navbar, SolarSystem, Products },
  setup() {
    const planets = ref(['']) 
    const elements = ref(['page-1', 'page-2'])
    const pageVisible = ref('')
    const tmblr = ref(false)
    // Call from Navbar
    function callFromNav(obj) { 
          window.scrollTo({
            top: document.getElementById(obj).offsetTop - 120,     
            behavior: "smooth"})
    }
    const giveProductsFromComp = (products) => planets.value = products;
  // JQUERY BLOCK
  $(function visibleElement(){
    $(window).on('scroll', () => {
  // В первую переменную мы получаем координаты относительно верха блока который нам нужен
  // Во вторую мы получаем вертикальную позиицию скролла окна браузера
    var blockPosition = document.getElementById('page-1').offsetTop
    var windowScrollPosition = $(window).scrollTop();
    if( blockPosition + 700 < windowScrollPosition ) {
        pageVisible.value = 0
        tmblr.value = false
    } else { pageVisible.value = 1
            tmblr.value = true
    }
    })})

  return {
    elements,pageVisible, tmblr, planets,
    callFromNav, giveProductsFromComp
  }
  }
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
}
.app{
}
</style>