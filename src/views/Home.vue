<template>
  <div class="home">
    <SearchFilterBack 
      v-bind:isDarkMode="isDarkMode" 
      v-bind:isDetail="isDetail" 
      v-on:ctrDetail="countryDetail" 
      v-on:search="search" 
      :bind:isDarkMode="isDarkMode"
      v-on:getRegion="getRegion"/>
    <div class="countries component-padding">
      <Country v-bind:countries='countries' v-on:detail="countryDetail" v-bind:countryCodes="countriesCodes"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFilterBack from '@/components/SearchFilterBack';
import Country from '../components/Country';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    SearchFilterBack,
    Country
  },
  props: [
    "isDarkMode"
  ],
  methods: {
    countryDetail(chosenCountry) {
      this.isDetail = !this.isDetail;
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
    console.log(this.isDarkMode);
      
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(res => {
      this.countries = res.data;
      this.countries.forEach(country => this.countriesCodes[country.alpha3Code] = country.name);
    })
    .catch(err => console.log(err));
  }
}
</script>

<style scoped>
  .countries {
    display: flex;
    justify-content: center;
  }
</style>
