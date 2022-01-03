<template>
  <div class="container_products">
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
        <ProductsList v-if="!isProductsLoading" @delete='deleteProducts' :products='sortedAndSearchProducts' :admin='adminStatus'></ProductsList>
        <div v-else class="loading"><img src="@/assets/loading.gif" alt=""></div>
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
      isProductsLoading: true,
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
        this.isProductsLoading = true;
        setTimeout(async () => {
          const response = await axios('https://raw.githubusercontent.com/SanSheng9/spc-str/main/planets.json');
          this.products = response.data;
          this.isProductsLoading = false
          }, 1000)
      } catch (e) {
        alert('AHAHA ERROR')
      } finally {}
    },
    deleteProducts(planet){
      if (this.adminStatus == true) {
        this.products = this.products.filter(p => p.id !== planet.id)}
    },
 
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
.container_products{
  max-width: 80vw;
  margin: 0 auto;
}
.content{
  max-width: 1200px;
  margin: 0 auto;
}
.loading {
  margin: 20vw 30vw;
}
.form{
  display: flex;
  max-width: 100%;
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
  @media (max-width: 968px) {
    .form {
      margin-top: 10vw;
      margin-bottom: 10vw;
      display: block;
    }
  }
</style>
