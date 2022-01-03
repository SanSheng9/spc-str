<template>
  <div class="main">
    <navbar></navbar>
    <div class="solar-system">    
    <div class="axis"     
      v-on:mouseover="stopAnimation"
      v-on:mouseleave="runAnimation" 
      ><img src="@/assets/ss-bg.png" alt="">
      <my-dialog v-model:show="dialogVisible"><product-selected :number='numberPlanet' :products='products'></product-selected></my-dialog>    
              <div class="sun" @click="selectPlanet(0)"><img src="@/assets/Sun.png" alt=""></div>
        <div class="mercury" @click="selectPlanet(1)" :class="{stoped: tmblr}"><img src="@/assets/Mercury.png" alt=""> </div>
        <div class="venus" @click="selectPlanet(2)" :class="{stoped: tmblr}"><img src="@/assets/Venus.png" alt=""> </div>   
        <div class="earth" @click="selectPlanet(3)" :class="{stoped: tmblr}"><img src="@/assets/Earth.png" alt=""></div>
        <div class="mars" @click="selectPlanet(4)" :class="{stoped: tmblr}"><img src="@/assets/Mars.png" alt=""></div>
        <div class="jupiter" @click="selectPlanet(5)" :class="{stoped: tmblr}"><img src="@/assets/jupiter.png" alt=""></div>
        <div class="saturn" @click="selectPlanet(6)" :class="{stoped: tmblr}"><img src="@/assets/Saturn.png" alt=""></div>
        <div class="uranus" @click="selectPlanet(7)" :class="{stoped: tmblr}"><img src="@/assets/Uranus.png" alt=""> </div>
        <div class="neptune" @click="selectPlanet(8)" :class="{stoped: tmblr}"><img src="@/assets/Neptune.png" alt=""></div>
      </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios';
import ProductSelected from '@/components/ProductSelected.vue'

export default {
  components: { Navbar, ProductSelected },
  data() {
    return {
      tmblr: false, 
      products: [],
      planet: [],
      dialogVisible: false,
      numberPlanet: '',
      scrollPosition: 0,
    }
    },
    methods: {
      stopAnimation() {
        this.tmblr = true
      },
      runAnimation() {
        this.tmblr = false
      },
      async fetchProducts(){
      try {
        const response = await axios('https://raw.githubusercontent.com/SanSheng9/spc-str/main/planets.json');
        this.products = response.data;
        console.log(this.products)
      } catch (e) {
        console.log(e)
      } 
      },
      selectPlanet(num){
        this.numberPlanet = num;
        this.dialogVisible = true;
      },
      doScroll(e) {
          this.scrollPosition = e.srcElement.scrollingElement.scrollTop;
          if (scrollPosition > 200) {
            this.tmblr = true;
          } else (scrollPosition > 500) 
          {this.tmblr = false;}
        }
    },
    mounted() {
        this.fetchProducts();
        window.addEventListener ('scroll', this.doScroll);
      },
}
</script>

<style>
.main{
  max-width: 80vw;
  margin: 0 auto;
}
.main img{
  width: 100%;
}


.solar-system{
  position: relative;
  margin-top: 5vw;
}
@media (max-width: 968px) {
  .solar-system{
    margin-top: 10em;
  }
}
.planets{
  color: darkgray;
}
.axis {
  width: 80vw;
  margin: 0 auto;
  position: relative;
}
.axis img{
  width: 100%;
}
.axis .stoped{
  animation-play-state: paused;
} 
@keyframes moving {
    100% {
      transform: rotate(-360deg);      
     transition-delay: 0.3s;
}
}

.sun {
  width: 10vw;
  position: absolute;
  top: 35vw;
  left: 35vw;
}
.mercury {
  width: 1vw;
  position: absolute;
  animation: moving 2s infinite linear;
  top: 45.5vw;
  left: 45.5vw;
  transform-origin: -5.3vw -5.3vw;}
.venus { 
  width: 2.5vw;
  position: absolute;
  animation: moving 4s infinite linear;
 top: 46.96vw;
    left: 45.96vw;
    transform-origin: -6.2vw -6.2vw;
}
.earth {
  width: 2.1vw;
  position: absolute;
  animation: moving 6s infinite linear;
    top: 49vw;
    left: 49vw;
    transform-origin: -8.9vw -8.9vw;
}
.mars {
  width: 3vw;
  position: absolute;
  animation: moving 4s infinite linear;
    top: 51vw;
    left: 51vw;
    transform-origin: -11vw -11vw;
}
.jupiter {
  width: 5vw;
  position: absolute;
  animation: moving 10s infinite linear;
    top: 55vw;
    left: 55vw;
    transform-origin: -15vw -15vw;
}
.saturn {
  width: 4vw;
  position: absolute;
  animation: moving 8s infinite linear;
top: 59vw;
    left: 59vw;
    transform-origin: -18.5vw -18.5vw;
}
.uranus {
  width: 4vw;
  position: absolute;
  animation: moving 14s infinite linear;
    top: 62vw;
    left: 62vw;
    transform-origin: -22vw -22vw;
}
.neptune {
  width: 3vw;
  position: absolute;
  animation: moving 10s infinite linear;
    top: 66vw;
    left: 66vw;
    transform-origin: -26vw -26vw;
}
</style>