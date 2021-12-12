<template>
  <div><navbar></navbar>
  <div class="solar-system">
    <div class="center">
      <div class="sun"><img src="@/assets/Sun.png" alt="">
        <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="mercury"><img src="@/assets/Mercury.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="venus"><img src="@/assets/Venus.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="mars"><img src="@/assets/Mars.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="earth"><img src="@/assets/Earth.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="upiter"><img src="@/assets/jupiter.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="saturn"><img src="@/assets/Saturn.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="uranus"><img src="@/assets/Uranus.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
      <div class="neptune"><img src="@/assets/Neptune.png" alt="">
      <div class="description">
          <div class="description__text"></div></div>
      </div>
    </div>>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {

    }
  }
}
  
</script>

<style scoped>
.solar-system{
  min-width: 1760px;
}

.solar-system img{
  width: 100%;
}
.center{
  position: absolute;
  top: 44%;
  left: 46%;
}

.sun {
  width: 200px;
  position: relative;
  top: 0;
  left: -0.8em;
}
.sun:hover::before {
  content: 'SUN';
  color: gray;
  position: absolute;
  top: 1em;
  left: -0.38em;
  display: block;
  font-size: 12em;
}
.mercury {
  width: 30px;
  position: relative;
  left: 14em;
  top: -7em;
}
.mercury:hover::before {
  content: 'MERCURY';
  color: gray;
  position: absolute;
  top: 1em;
  left: -0.38em;
  display: block;
  font-size: 2em;}

.venus { 
  width: 50px;
  position: relative;
  left: 14em;
  top: -19em;
}
.venus:hover::before {
  content: 'VENUS';
  color: gray;
  position: absolute;
  top: 1em;
  left: -0.38em;
  display: block;
  font-size: 3em;}
.mars {
  width: 70px;
  position: relative;
  left: 25em;
  top: 3em;
}
.mars:hover::before {
  content: 'MARS';
  color: gray;
  position: absolute;
  top: 1em;
  left: -0.38em;
  display: block;
  font-size: 4em;}

.earth {
  width: 80px;
  position: relative;
  left: -15em;
  top: -30em;
}
.earth:hover::before {
  content: 'EARTH';
  color: gray;
  position: absolute;
  top: 1.2em;
  left: -0.38em;
  display: block;
  font-size: 4em;}
.upiter {
  width: 130px;
  position: relative;
  left: -30em;
  top: -5em;
}
.upiter:hover::before {
  content: 'JUPITER';
  color: gray;
  position: absolute;
  top: 1.5em;
  left: -0.38em;
  display: block;
  font-size: 5em;}
.saturn {
  width: 150px;
  position: relative;
  left: 30em;
  top: -57em;
}
.saturn:hover::before {
  content: 'SATURN';
  color: gray;
  position: absolute;
  top: 1.5em;
  left: -0.38em;
  display: block;
  font-size: 5em;}
.uranus {
  width: 140px;
  position: relative;
  left: 0em;
  top: -78em;
}
.uranus:hover::before {
  content: 'URANUS';
  color: gray;
  position: absolute;
  top: 1.5em;
  left: -0.38em;
  display: block;
  font-size: 5em;}
.neptune {
  width: 100px;
  position: relative;
  left: -50em;
  top: -58em;
}
.neptune:hover::before {
  content: 'NEPTUNE';
  color: gray;
  position: absolute;
  top: 1.5em;
  left: 0em;
  display: block;
  font-size: 5em;}
</style>