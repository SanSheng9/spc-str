<template>
  <div class="main"><navbar></navbar>
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
      }
    },
    mounted() {
        this.fetchProducts();
      },
}
</script>

<style scoped>
.solar-system{
  min-width: 1760px;
}
.planets{
  color: darkgray;
}
.axis img{
}
.axis {
position: absolute;
  top: 12vh;
  left: 25%;
  width: 85vh;
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
  width: 10vh;
  position: absolute;
  top: 38vh;
  left: 38vh;
}

.mercury {
  width: 1vh;
  position: absolute;
  animation: moving 2s infinite linear;
     top: 48.5vh;
    left: 48.5vh;
    transform-origin: -5.7vh -5.7vh;}
  
.venus { 
  width: 2.5vh;
  position: absolute;
  animation: moving 4s infinite linear;
  top: 49vh;
  left: 49vh;
  transform-origin: -6.5vh -6.5vh;
}

.earth {
  width: 2.1vh;
  position: absolute;
  animation: moving 6s infinite linear;
top: 52vh;
    left: 52vh;
    transform-origin: -9.25vh -9.25vh;
}

.mars {
  width: 3vh;
  position: absolute;
  animation: moving 8s infinite linear;
    top: 54vh;
    left: 54vh;
    transform-origin: -11.75vh -11.75vh;
}

.jupiter {
  width: 5vh;
  position: absolute;
  animation: moving 10s infinite linear;
top: 59vh;
    left: 59vh;
    transform-origin: -16vh -16vh;
}

.saturn {
  width: 4vh;
  position: absolute;
  animation: moving 12s infinite linear;
    top: 63vh;
    left: 62vh;
    transform-origin: -20vh -20vh;
}

.uranus {
  width: 4vh;
  position: absolute;
  animation: moving 14s infinite linear;
    top: 67vh;
    left: 66vh;
    transform-origin: -23.75vh -23.75vh;

}

.neptune {
  width: 3vh;
  position: absolute;
  animation: moving 16s infinite linear;
top: 71vh;
    left: 70vh;
    transform-origin: -27.5vh -27.5vh;
}


.description {
  width : 99%;
  text-align: center;
  height: 48px;
  line-height: 48px;
  font-size : 37px;
  position : absolute;
  top: 3em;
  left: 3em;
  color: grey;
  z-index: 10;
}


</style>