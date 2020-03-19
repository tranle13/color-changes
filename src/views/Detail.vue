<template>
  <div class="country-detail">
    <Back v-bind:isDarkMode="isDark"/>
    <CountryDetail 
      v-bind:countryCodes="countryCodes" 
      v-bind:country="country[0]" 
      v-on:nearbyCountry="nearbyCountry"
      v-bind:isDarkMode="isDark"/>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Back from "@/components/Back";
import CountryDetail from "../components/CountryDetail";
import axios from "axios";

Vue.use(VueRouter)

export default {
  name: "Detail",
  props: [
    "isDark"
  ],
  components: {
    Back,
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
  },
  methods: {
    nearbyCountry(name) {
      axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then(res => {this.country = res.data})
      .catch(err => console.log(err));
    }
  }
}
</script>
