<template>
  <div class="search-filter">
    <form class="search" :class="darkMode ? 'dark-element' : 'light-element'" v-if="!isDetail" v-on:submit.prevent="$emit('search', searchTerm)">
      <ion-icon name="search-outline"></ion-icon>
      <input type="text" placeholder="Search for a country..." v-model="searchTerm">
    </form>

    <div class="filter" v-if="!isDetail">
      <v-select
      class="style-chooser"
      placeholder="Filter by Region"
      :options="['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']"
      @input="$emit('getRegion', selected)" v-model="selected"
    />
    </div>

    <div class="back-button" v-if="isDetail" @click="$router.go(-1)">
      <ion-icon name="arrow-back-outline"></ion-icon> 
      <p>Back</p>           
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: 'SearchFilterBack',
  props: [
    "isDetail",
    "darkMode"
  ],
  components: {
    vSelect
  },
  data() {
    return {
      regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
      searchTerm: "",
      tabIndex: 0,
      selected: "",
      open: false,
      
    }
  },
  methods: {
    selectFilter() {
      this.open = !this.open;
    },
    filterByRegion() {
      console.log(this.selected);
      
    },
    getTheme() {
      return localStorage.getItem("darkTheme") || false;
    },
  },
  mounted(){
    this.$emit('input', this.selected);
  }
}
</script>

<style scoped>
  .search-filter {
    padding: 5% 5%;
    display: flex;
    justify-content: space-between;
  }

  .search {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    width: 35%;
  }

  .search ion-icon {
    color: gray;
    --ionicon-stroke-width: 60px;
    font-size: 19px;
  }

  .search input {
    border: none;
    background: none;
    font-size: 15px;
    margin-left: 18px;
    color: black;
  }

  .back-button {
    box-shadow: 0 0 10px rgba(0,0,0,0.13);
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
  }

  .back-button p {
    margin-left: 8px;
  }

  .back-button ion-icon {
    font-size: 20px;
  }
</style>
