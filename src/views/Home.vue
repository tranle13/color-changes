<template>
  <div class="home">
    <SearchFilter
      v-bind:isDarkMode="isDark" 
      v-on:ctrDetail="countryDetail" 
      v-on:search="search"
      v-on:getRegion="getRegion"/>
    <div class="countries component-padding">
      <Country 
        v-bind:isDarkMode="isDark"
        v-bind:countries='countries' 
        v-on:detail="countryDetail" 
        v-bind:countryCodes="countriesCodes"/>
    </div>
  </div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter';
import Country from '../components/Country';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    SearchFilter,
    Country
  },
  props: [
    "isDark"
  ],
  methods: {
    countryDetail(chosenCountry) {
      this.chosenCountry = chosenCountry;
    },
    search(term) {
      axios.get(`https://restcountries.eu/rest/v2/name/${term}`)
      .then(res => {
        this.countries = res.data;
        this.countries.forEach(country => this.countriesCodes[country.alpha3Code] = country.name);
      })
      .catch(err => console.log(err));
    },
    getRegion(region) {
      axios.get(region !== null ? `https://restcountries.eu/rest/v2/region/${region}` : `https://restcountries.eu/rest/v2/all`)
      .then(res => this.countries = res.data)
      .catch(err => console.log(err));
    }
  },
  data() {
    return {
      countries: [],
      countriesCodes: {},
      isDetail: false,
      chosenCountry: {}
    }
  },
  created() {  
    console.log(this.isDark);
      
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      this.countries = res.data;
      this.countries.forEach(country => this.countriesCodes[country.alpha3Code] = country.name);
    })
    .catch(err => console.log(err));
  },
  watch: {
    isDark: function() {

    }
  }
}
</script>

<style scoped>
  .countries {
    display: flex;
    justify-content: center;
  }
</style>
