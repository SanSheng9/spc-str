<template>
  <div><navbar></navbar>
  <div class="solar-system">    
    <div class="axis"     
      v-on:mouseover="stopAnimation"
      v-on:mouseleave="runAnimation" 
      ><img src="@/assets/ss-bg.png" alt="">
      <my-dialog v-model:show="dialogVisible"><div class="planets">
        {{planet.name}}
        </div></my-dialog>
      <div class="sun"><img src="@/assets/Sun.png" alt=""></div>
      <div class="mercury" @click="selectPlanet('Mercury')" :class="{stoped: tmblr}"><img src="@/assets/Mercury.png" alt=""> </div>
      <div class="venus" @click="selectPlanet('Venus')" :class="{stoped: tmblr}"><img src="@/assets/Venus.png" alt=""> </div>   
      <div class="earth" @click="selectPlanet('Earth')" :class="{stoped: tmblr}"><img src="@/assets/Earth.png" alt=""></div>
      <div class="mars" @click="selectPlanet('Mars')" :class="{stoped: tmblr}"><img src="@/assets/Mars.png" alt=""></div>
      <div class="jupiter" @click="selectPlanet('Jupiter')" :class="{stoped: tmblr}"><img src="@/assets/jupiter.png" alt=""></div>
      <div class="saturn" @click="selectPlanet('Saturn')" :class="{stoped: tmblr}"><img src="@/assets/Saturn.png" alt=""></div>
      <div class="uranus" @click="selectPlanet('Uranus')" :class="{stoped: tmblr}"><img src="@/assets/Uranus.png" alt=""> </div>
      <div class="neptune" @click="selectPlanet('Neptune')" :class="{stoped: tmblr}"><img src="@/assets/Neptune.png" alt=""></div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      tmblr: false, 
      products: [],
      planet: [],
      selectedPlanets: '',
      dialogVisible: false,
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
        const response = await axios('https://raw.githubusercontent.com/SanSheng9/spc-str/main/planets.json')
        this.products = response.data;
        console.log(this.products)
      } catch (e) {
        alert('AHAHA ERROR')
      } 
      },
      selectPlanet(namePlanet) {
        this.selectedPlanets = namePlanet,
        this.dialogVisible = true
        for (p in this.products) {
          console.log(this.p)
          if (this.p.name == this.selectedPlanets) {
            this.planet = p;
          } else {console.log('Этой планеты не существует')}
        } 
      },
      mounted() {
        this.fetchProducts();
      },
    
      
    }

}
</script>

<style scoped>
.solar-system{
  min-width: 1760px;
  min-height: 93vh;
  margin-top: 5vh;
}
.planets{
  color: darkgray;
}
.solar-system img{
  width: 100%;
}
.axis {
  position: relative;
  top: 25%;
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
  animation: moving 3s infinite linear;
  top: 47.5vh;
  left: 47vh;
  transform-origin: -5.25vh -5.25vh;}
  
.venus { 
  width: 2.5vh;
  position: absolute;
  animation: moving 4s infinite linear;
  top: 17vh;
  left: 12vh;
  transform-origin: -6vh -6vh;
}

.earth {
  width: 2.1vh;
  position: relative;
  animation: moving 5s infinite linear;
  top: 20vh;
  left: 15vh;
  transform-origin: -8.5vh -8.5vh;
}

.mars {
  width: 3vh;
  position: relative;
  animation: moving 6s infinite linear;
  top: -39px;
  left: 237px;
  transform-origin: -170px -170px;
}

.jupiter {
  width: 90px;
  position: relative;
  animation: moving 7s infinite linear;
  top: -40px;
  left: 305px;
  transform-origin: -230px -230px;
}

.saturn {
  width: 115px;
  position: relative;
  animation: moving 7s infinite linear;
  top: -77px;
  left: 341px;
  transform-origin: -275px -275px;
}

.uranus {
  width: 115px;
  position: relative;
  animation: moving 8s infinite linear;
  top: -140px;
  left: 394px;
  transform-origin: -330px -330px;

}

.neptune {
  width: 100px;
  position: relative;
  animation: moving 9s infinite linear;
  top: -206px;
  left: 445px;
  transform-origin: -385px -385px;
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