<template>
  <div class="search-filter">
    <form class="search" 
      :class="isDarkMode ? 'dark-element' : 'light-element'" 
      v-on:submit.prevent="$emit('search', searchTerm)">
      <ion-icon :class="isDarkMode ? 'icon-dark' : 'icon-light'" name="search-outline"></ion-icon>
      <input :class="isDarkMode ? 'icon-dark' : 'text-light'" type="text" placeholder="Search for a country..." v-model="searchTerm">
    </form>

    <div class="filter">
      <v-select
      class="style-chooser"
      placeholder="Filter by Region"
      :options="['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']"
      @input="$emit('getRegion', selected)" v-model="selected"
    />
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  name: 'SearchFilter',
  props: [
    "isDarkMode"
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
  .search {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    min-width: 40%;
  }

  .search ion-icon {
    --ionicon-stroke-width: 60px;
    font-size: 19px;
  }

  .icon-light {
    color: gray;
  }

  .icon-dark {
    color: white;
  }

  .text-light {
    color: #111517;
  }

  .search input {
    border: none;
    background: none;
    font-size: 15px;
    margin-left: 18px;
    flex-grow: 2;
    min-width: 0;
  }

  @media only screen and (max-width:600px) {
    .search {
      width: 100%;
      margin-bottom: 20px;
    }
  }
</style>
