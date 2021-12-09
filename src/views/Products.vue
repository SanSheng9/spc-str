<template>
  <div>
    <Navbar :watchAdminMode='false' @admin="adminMode"></Navbar>
    <div class="content">       
      <div class="form"><my-input placeholder="Search planets...">SPACE</my-input>
      <my-button>BTN</my-button></div>
      <div class="flexbox__list">
        </div><ProductsList :products='products' :admin='adminStatus'></ProductsList>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
export default {    
  components: { Navbar, ProductsList },
    data() {
    return {
      products: [
      {name: 'Mercury', img: 'Mercury.jpg', body: 'Is the smallest planet in the Solar System and the closest to the Sun.'},
      {name: 'Venus', img: 'Venus.jpg', body: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth1s night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.'},
      {name: 'Earth', img: 'Earth.jpg', body: 'Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. 29.2% of Earth1s surface is land consisting of continents and islands.'},
      {name: 'Mars', img: 'Mars.jpg', body: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'},
      {name: 'Jupiter', img: 'Jupiter.jpg', body: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.'},
      {name: 'Saturn', img: 'Saturn.jpg', body: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.'},
      {name: 'Uranus', img: 'Uranus.jpg', body: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). '},
      {name: 'Neptune', img: 'Neptune.jpg', body: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.'}],
      adminStatus: false
   } 
  },
  methods: { 
    adminMode() {
      this.adminStatus = !this.adminStatus
    }
    }
}
</script>
<style>
.content{
  margin: 0 auto;
  margin-top: 50px;
}
.form{
  display: flex;
  justify-content: space-between;
  margin: 10px 30px;
}
.flexbox__list{
  display: flex;
  justify-content: center;
  }
</style>
