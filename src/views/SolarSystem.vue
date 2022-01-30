<template>
  <div class="solar_system">

    <div class="solar-system" id="solar-system">    
    <div class="axis"><img src="@/assets/ss-bg.png" alt="">
      <my-dialog v-model:show="dialogVisible"><product-selected :number='numberPlanet' :planets='planets'></product-selected></my-dialog>    
              <div class="sun" @click="selectPlanet(0)"><img src="@/assets/Sun.png" alt=""></div>
        <div class="mercury" @click="selectPlanet(1)" :class="{slowed: tmblr}"><img src="@/assets/Mercury.png" alt=""> </div>
        <div class="venus" @click="selectPlanet(2)" :class="{slowed: tmblr}"><img src="@/assets/Venus.png" alt=""> </div>   
        <div class="earth" @click="selectPlanet(3)" :class="{slowed: tmblr}"><img src="@/assets/Earth.png" alt=""></div>
        <div class="mars" @click="selectPlanet(4)" :class="{slowed: tmblr}"><img src="@/assets/Mars.png" alt=""></div>
        <div class="jupiter" @click="selectPlanet(5)" :class="{slowed: tmblr}"><img src="@/assets/jupiter.png" alt=""></div>
        <div class="saturn" @click="selectPlanet(6)" :class="{slowed: tmblr}"><img src="@/assets/Saturn.png" alt=""></div>
        <div class="uranus" @click="selectPlanet(7)" :class="{slowed: tmblr}"><img src="@/assets/Uranus.png" alt=""> </div>
        <div class="neptune" @click="selectPlanet(8)" :class="{slowed: tmblr}"><img src="@/assets/Neptune.png" alt=""></div>
      </div>
      </div>
        <div class="click-me" v-if="page == 'page-1'">
      Click on the planet!
    </div>
  </div>
</template>

<script>
import ProductSelected from '@/components/ProductSelected.vue'

export default {
  name: 'solar-system',
  components: { ProductSelected },
  props: {
    planets: {
      type: Array,
      required: true
    },
    tmblr: {
    type: Boolean,
    default: false
  },
    page: {
      type: String,
      default: 'page-1'
    }
  },
  data() {
    return {
      planet: [],
      dialogVisible: false,
      numberPlanet: '',
      ifPhone: false
    }
    },
    methods: {
      selectPlanet(num){
        this.numberPlanet = num;
        this.dialogVisible = true;
      },
      ifUsePhone(){
        if (window.screen.width < window.screen.height) {
          this.ifPhone = true
        }
      }
},
mounted() {
  this.ifUsePhone()
}
}
</script>

<style>
.solar_system{
  max-width: 80vw;
  margin: 0 auto;
  margin-bottom: 5vh;
}



.solar-system{
  position: relative;
  margin-top: 5vw;
  max-width: 300px;
}
.solar_system img{
  max-width: 100%;
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
  min-width: 80vw;
  margin: 0 auto;
  position: relative;
}
.axis img{
  width: 100%;
}
.axis .stoped{
} 
@keyframes moving {
    100% {
      transform: rotate(-360deg);      
     transition-delay: 0.8s;
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
 .sun.slowed,
 .mercury.slowed,
 .venus.slowed,
 .earth.slowed,
 .mars.slowed,
 .jupiter.slowed,
 .saturn.slowed,
 .neptune.slowed,
 .uranus.slowed{
       animation-play-state:  initial;

 }
.content-planets{
  color: darkgray;
  margin-top: 2em;
}
.click-me{
  margin: 0 auto;
  color: darkgray;
  font-size: 4vw;
  text-align: center;
  animation: blinker 1s linear 999992;
  opacity: 0;
  margin-top: 1vh;
  z-index: 50;
}

@keyframes blinker {
  50% {
    opacity: 100;
  }
}
</style>