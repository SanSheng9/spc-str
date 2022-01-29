<template>
      <!-- Навбар -->
        <header class="header">
      <!-- Контейнер для ширины контента -->     
           <div class="container">
              <!-- Флекс-контейнер -->
              <div class="header__body">
                 <!-- Лого-картинка -->
                  <div class="header__logo">
                     <img src="@/assets/logo.svg" alt="">
                  </div>
                  <!-- Меню-бургер -->
                  <div class="header__burger" :class="{active: activeBurger}"
                  @click="activeBurger = !activeBurger"
                  ><span></span></div>
                  <!-- Ссылки-навигация  -->
                  <div class="header__menu" :class="{active: activeBurger}">
                     <div class="header__list">
                        <p @click="movePage('page-1')" :class="{active_list: activeSs}">Solar_system</p>
                        <p @click="movePage('page-2')" :class="{active_list: activeProd}">Objects</p>
                        <p :class="{ non__visible: watchAdminMode }" @click="$emit('admin', true), activeBurger = false">God_mode</p>
                     </div>
                  </div> 
               </div>
            </div>
        </header>
</template>

<script>
export default {
   emits: ['admin', 'move'],
   props: {
      watchAdminMode: {
         type: Boolean,
         default: true,
      },
      page: {
         type: Number 
      }
   },
   data() {
    return { 
       activeBurger: false,
       selectMain: true,
       selectProducts: false,
       activeSs: true,
       activeProd: false,
    } 
  },
  methods: { 
     movePage(page){
        this.$emit('move', page)
        this.activeBurger = false
     }
},
watch: {
   page(newPage, oldPage){
      if (newPage == 1 && oldPage == 0) {
         this.activeSs = true
         this.activeProd = false
      } else {
         this.activeProd = true
         this.activeSs = false
      }
   }
}
}
</script>

<style scoped>
.header {
   min-width: 100%;
   height: 7vh;
   text-transform: uppercase;
   z-index: 50;
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 41%, rgba(1,1,1,0.6867121848739496) 61%, rgba(1,1,1,0.5998774509803921) 77%, rgba(1,1,1,0.33657212885154064) 90%, rgba(255,255,255,0) 100%);  position: fixed;
   top: 0;
   left: 0;
   padding-bottom: 20px;
}
.container{
   max-width: 70%;
   margin: 0 auto;
   padding-top: 10px;
}

.header__body{
   margin-top: 0.2em;
   position: relative;
   display: flex;
   justify-content: space-between;
   height: 80px;
   align-items: center;
}
.header__logo{
   flex: 0 0 3.5em;
   border-radius: 50%;
   border: 1px solid darkgray;
   padding: 7px;
   position: relative;
   z-index: 3;
}
.header__logo img{
   max-width: 100%;
}
.header__list{
   display: flex;
   position: relative;
   z-index: 2;
}
.header__list p{
   cursor: pointer;
}

.container .header__menu p{
   color: darkgray;
   font-size: 2em;
   margin: 0px 0px 0px 1em;
}

.header__list .link,
.header__list .link:hover{
   text-decoration: none;
   color: darkgray;
}
.header__list p.active_list{
   color: white;
   transition: 1s ease all 0s;
   font-size: 2.2em;
}
.header__burger{
   display: none;
}
@media (max-width: 968px) {

   .header:before{
   }
   .header__burger{
      display: block;
      position: relative;
      width: 30px;
      height: 20px;
      z-index: 3;
   }
   .header__burger span{
      position: absolute;
      background-color: darkgray;
      left: 0;
      width: 100%;
      height: 2px;
      top: 9px;
      transition: all 0.3s ease 0s;
   }
   .header__burger:after,
   .header__burger:before{
      content: "";
      background-color: darkgray;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      transition: all 0.3s ease 0s;
   }
   .header__burger:before{
      top: 0;
   }
   .header__burger:after{
      bottom: 0;
   }
   .header__burger.active:before{
      transform: rotate(45deg);
      top: 9px;
   }
   .header__burger.active:after{
      transform: rotate(-45deg);
      bottom: 9px;
   }
   .header__burger.active span{
      transform: scale(0);
   }

   .header__menu{
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 110px 0px 0px 0px;
      background-color: black;
      transition: all 0.3s ease 0s;
      z-index: 2;

   }
   .header__menu.active{
      top: 0;
   }
   .header__list{
      display: block;
   }
   .container .header__menu p{
   font-size: 2em;
   margin: 1em 0px 0px 0px;
   text-align: center;
}
 .container .header__menu p.selected{
    color: white;
}
}
.non__visible{
   display: none;
}
.link.selected{
   color: white;
}
</style>