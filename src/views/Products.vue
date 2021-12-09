<template>
  <div>
    <Navbar :watchAdminMode='false' @admin="adminMode"></Navbar>
    <div class="content">       
      <div class="form">
        <div class="form__search">
          <my-input class="form__search__input" placeholder="Search planets...">SPACE</my-input>
          <my-button class="form__search__btn">Search</my-button>
          <my-button @click='fetchProducts'>Get</my-button>
        </div>
        <div class="form__select">
          <my-select :options='sortOptions' v-model="selectedSort"/>
        </div>
      </div>
      <div class="flexbox__list">
        </div>
        <transition-group name="p-list"><ProductsList :products='sortedProducts' :admin='adminStatus'></ProductsList></transition-group>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import axios from 'axios';

export default {    
  components: { Navbar, ProductsList },
    data() {
    return {
      products: [],
      adminStatus: false,
      selectedSort: '',
      sortOptions: [
        {value: 'name', name: 'By name'},
        {value: 'body', name: 'By dicsription'},
        {value: 'mass', name: 'By mass'},
        ]
   } 
  },
  
  methods: { 
    adminMode() {
      this.adminStatus = !this.adminStatus
    },
    async fetchProducts(){
      try {
        const response = await axios('https://raw.githubusercontent.com/SanSheng9/spc-str/main/planets.json')
        this.products = response.data;
      } catch (e) {
        alert('AHAHA ERROR')
      }
    }
    },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    sortedProducts() {
      return [...this.products].sort((product1, product2) => product1[this.selectedSort]?.localeCompare(product2[this.selectedSort])
    )
    },
  },
}
</script>
<style>
.content{
  margin: 0 auto;
  margin-top: 100px;
}
.form{
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.form__search,
.form__select{
  flex-basis: 50%;
  padding: 5px 20px;
}
.form__search{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form__search__input{
  flex-basis: 80%;
  margin-right: 10px;
}
.form__search__btn{
  flex-basis: 20%;
}
.flexbox__list{
  display: flex;
  justify-content: center;
  }
.p-list-item {
  display: inline-block;
  margin-right: 10px;
}
.p-list-enter-active,
.p-list-leave-active {
  transition: all 1s ease;
}
.p-list-enter-from,
.p-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
