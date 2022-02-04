<template>
  <div class="filters">
      <div class="wrapper">
          <p class="title-filters">Filters</p>
            <div class="burger">
                <span></span>
            </div>
          <div class="content">
            <div class="grid">
                <div v-for='option in options' :key="option.id" class="filter">
                    <div class="filter-text" :class="classFilterText" @click='activateFilter(option.id)'>
                    {{option.name}}
                    </div>
                    <div class="filter-options">
                    <div v-for="object in option.objects" :key="object.id" class="filter-option" :class='classFilterObject'>
                        <div class="option">
                        <input type="checkbox" value="">
                         {{object}}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'my-filters',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            tmbFilter: 'none'
        }
    },
    methods: {
        activateFilter(id){
            this.tmbFilter = 'flex'
        },
    },
    computed: {
    classFilterText() {
        return {
        }
    }
    }
}
</script>

<style scoped>
.filters{
    border: 1px solid gray;
    color: darkgray;
    padding: 0px;
    padding-top: 10px;
    min-width: 100%;
    text-align: center;
    vertical-align: middle
}
.burger{
    display: block;
    position: relative;
    width: 20px;
    height: 10px;
    left: 9px;
    top: -9px;
    z-index: 3;
}
.burger span{
    position: absolute;
    background-color: darkgray;
    left: 12px;
    width: 100%;
    height: 2px;
    transition: all 0.3s ease 0s;
    transform: rotate(45deg);
}
.burger:after{
    content: "";
    background-color: darkgray;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
    transform: rotate(-45deg);

}
.content{
    border-top: 1px solid gray;
    color: darkgrey;
    padding: 15px;
}
.grid{
}
.filter{
   display: grid;
   grid-template-columns: 1fr 3fr;
   grid-template-rows: 1fr;
   grid-gap: 10px; 
}
.filter-text{
    font-size: 1.2em;
    min-height: 100%;
    border-right: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
}
.filter-text.active{
    color: white;
}

.filter.filter-options{
    display: v-bind(tmbFilter);
    flex-direction: column;
}

</style>