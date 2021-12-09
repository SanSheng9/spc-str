<template>
  <div><navbar></navbar>
  <div class="solar-system">
    <img src="@/assets/Solar-system.jpg" alt=""></div></div>
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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>