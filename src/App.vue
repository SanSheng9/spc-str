<template>
  <div class="app">
    <navbar @move='callFromNav' :page='pageVisible'></navbar>
    <solar-system id="page-1" :tmblr='tmblr' :planets='planets' :page='pageVisible'></solar-system>
    <products id="page-2" v-bind:style="{ paddingTop: heightPageOne + 'vh'}" @planets='giveProductsFromComp'></products>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SolarSystem from './views/SolarSystem.vue'
import Products from './views/Products.vue'
import $ from 'jquery'
import { watch, ref } from 'vue'

export default {
  components: { Navbar, SolarSystem, Products },
  setup() {
    const planets = ref([''])
    const elements = [
      'page-1', 
      'page-2'
    ]
    const pageVisible = ref('')
    const heightPageOne = ref(140)
    const tmblr = ref(false)
    // Call from Navbar
    function callFromNav(obj) { 
          window.scrollTo({
            top: document.getElementById(obj).offsetTop - 160,     
            behavior: "smooth"})
    }
    const giveProductsFromComp = (products) => planets.value = products;
  // JQUERY BLOCK
  $(function visibleElement(){
    $(window).on('scroll', () => {
  // В первую переменную мы получаем координаты относительно верха блока который нам нужен
  // Во вторую мы получаем вертикальную позиицию скролла окна браузера
    var n = 0;
    while (n < elements.length) {
      console.log(elements[n])
    var target = document.getElementById(elements[n])
      // Все позиции элемента
    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
 
     if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
       pageVisible.value = elements[n]
  }
    n++;
  }
  }
  )
  }
  )

  watch(pageVisible, (newValue, oldValue) => {
    if (pageVisible.value == 'page-1') {
      heightPageOne.value = 50
    } else {
      heightPageOne.value = 0
      callFromNav('page-2')
    }
})
  return {
    elements,pageVisible, tmblr, planets, heightPageOne,
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
#page-1{
  transition: all 0.4s ease 0s;
  min-height: 100vh;
}
#page-2{
  transition: all 0.4s ease 0s;
}
</style>