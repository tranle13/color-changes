<template>
  <div class="country-detail">
    <SearchFilterBack v-bind:isDetail=true v-on:ctrDetail="countryDetail" v-on:search="search"/>
    <CountryDetail v-bind:countryCodes="countryCodes" v-bind:country="country[0]"/>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchFilterBack from "../components/SearchFilterBack";
import CountryDetail from "../components/CountryDetail";
import axios from "axios";

Vue.use(VueRouter)

export default {
  name: 'Detail',
  components: {
    SearchFilterBack,
    CountryDetail
  },
  data() {
    return {
      country: {},
      countryCodes: {}
    }
  },
  created() {
    let name = this.$route.params.name;
    this.countryCodes = this.$route.params.codes;

    if (name === undefined) {
      name = localStorage.getItem("countryName")
      this.countryCodes = localStorage.getItem("countryCodes")
    } else {
      localStorage.setItem("countryName", name)
      localStorage.setItem("countryCodes", this.countryCodes)
    }
    
    axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    .then(res => {this.country = res.data})
    .catch(err => console.log(err))

    window.scrollTo(0,0)
  }
}
</script>
