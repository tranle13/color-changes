<template>
  <div class="home">
    <SearchFilter />
    <div class="countries" v-bind:key='country.numericCode' v-for='country in countries'>
      <Country v-bind:todo='country'/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFilter from '@/components/SearchFilter';
import Country from '../components/Country';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    SearchFilter,
    Country
  },
  data() {
    return {
      countries: []
    }
  },
  created() {
    await axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {this.countries = res.data; console.log(this.countries)})
    .catch(err => console.log(err));
  }
}
</script>
