<template>
  <div class="navbar">
     <div class="wrapper">
        <div class="navbar__flexbox">
        <div class="logo" >Space</div>
        <div class="links">
           <p><router-link class="link" to="/">Solar_system</router-link></p>
           <p><router-link class="link" to="/products">Objects</router-link></p>
          <p :class="{ non__visible: watchAdminMode }" @click="$emit('admin', true)">Admin_mode</p>
        </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   emits: ['admin', 'run'],
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
   width: 100%;
   height: 7vh;
   text-transform: uppercase;
   display: block;
}
.wrapper {
   padding: 10px 0px 20px;
}

.navbar__flexbox {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.logo, 
.links {
   color: darkgrey;
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