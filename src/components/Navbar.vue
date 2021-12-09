<template>
  <div class="navbar">
     <div class="wrapper">
        <div class="navbar__flexbox">
        <div class="logo">PLANETS</div>
        <div class="links">
           <p><router-link class="link" to="/">Solar system</router-link></p>
           <p><router-link class="link" to="/products">Planets</router-link></p>
          <p :class="{ non__visible: watchAdminMode }" @click="$emit('admin', true)">Admin mode</p>
        </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   emits: ['admin'],
   props: {
      watchAdminMode: {
         type: Boolean,
         default: true,
      }
   },
   data() {
    return { 
    } 
  },
  methods: {
     }
}
</script>

<style scoped>
.navbar {
   display: block;
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100px;
}
.wrapper {
   width: 80%;
   padding: 10px;
   margin: 0 auto;
}

.navbar__flexbox {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.logo, 
.links {
   color: darkgrey;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
   font-size: 2em;
}
.logo {}
.links{
   display: flex;
}
p {
   margin-left: 30px;
}

.link,
.link:hover,
.link:active {
   text-decoration: none;
   color: darkgrey;
}
.non__visible{
   display: none;
}

</style>