<template>
  <div class="home">
    <SearchFilter v-bind:isDetail="isDetail" v-on:ctrDetail="countryDetail"/>
    <div class="countries component-padding">
      <Country v-bind:countries='countries' v-if="!isDetail" v-on:detail="countryDetail"/>
      <CountryDetail v-bind:isDetail="isDetail" v-bind:selectedCountry="chosenCountry" v-bind:countryCode="countriesCodes"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFilter from '@/components/SearchFilter';
import Country from '../components/Country';
import CountryDetail from '../components/CountryDetail';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    SearchFilter,
    Country,
    CountryDetail
  },
  methods: {
    countryDetail(chosenCountry) {
      this.isDetail = !this.isDetail;
      this.chosenCountry = chosenCountry;
    }
  },
  data() {
    return {
      countries: [],
      countriesCodes: {},
      isDetail: false,
      chosenCountry: {},
    }
  },
  created() {
    axios.get('https://restcountries.eu/rest/v2/all')
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
  }
</style>
