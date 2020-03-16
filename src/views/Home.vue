<template>
  <div class="home">
    <SearchFilter v-bind:isDetail="isDetail"/>
    <div class="countries component-padding">
      <Country v-bind:countries='countries' v-if="!isDetail" v-on:detail="countryDetail"/>
      <CountryDetail v-if="isDetail"/>
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
    countryDetail() {
      this.isDetail = !this.isDetail;
    }
  },
  data() {
    return {
      countries: [],
      isDetail: false
    }
  },
  created() {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {this.countries = res.data; console.log(this.countries)})
    .catch(err => console.log(err));
  }
}
</script>

<style scoped>
</style>
