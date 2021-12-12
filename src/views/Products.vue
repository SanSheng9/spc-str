<template>
  <div>
    <Navbar :watchAdminMode='false' @admin="adminMode"></Navbar>
    <div class="content">       
      <div class="form">
        <div class="form__search">
          <my-input class="form__search__input" 
          placeholder="Search planets..."
          v-model='searchQuery'
          >SPACE</my-input>
          <my-button class="form__search__btn">Search</my-button>
        </div>
        <div class="form__select">
          <my-select :options='sortOptions' v-model="selectedSort"/>
        </div>
      </div>
      <div class="flexbox__list">
        </div>
        <ProductsList v-if="products.length > 0" @delete='deleteProducts' :products='sortedAndSearchProducts' :admin='adminStatus'></ProductsList>
        <div v-else class="none__planets">You destroied all planets!!!</div>
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
      searchQuery: '',
      sortOptions: [
        {value: 'name', name: 'By name'},
        {value: 'mass', name: 'By mass'},
        ],
      dialogVisible: false,
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
    deleteProducts(product){
      this.products = this.products.filter(p => p.id ==! product.id)
    },
  mounted() {
    this.fetchProducts();
  },
    
  computed: {
    sortedProducts() {
      return [...this.products].sort((product1, product2) => product1[this.selectedSort]?.localeCompare(product2[this.selectedSort])
    )
    },
    sortedAndSearchProducts() {
      return this.sortedProducts.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
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
</style>
