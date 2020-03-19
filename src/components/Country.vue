<template>
    <div class='country-wrap' v-if="countries">
        <button
        :class="isDarkMode ? 'dark-element' : 'light-element'"
        @click="toDetail(country.name, countryCodes)" 
        class='country' 
        v-bind:key="country.numericCode"
        v-for='country in countries'>
            <div v-bind:style="{backgroundImage: `url(${country.flag})`}" alt='flag' class="image"/>
            <h1>{{country.name}}</h1>
            <p><span>Population:</span> {{localeString(country.population)}}</p>
            <p><span>Region:</span> {{country.region}}</p>
            <p><span>Capital:</span> {{country.capital}}</p>
        </button>
    </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default {
    name: 'Country',
    props: [
        "countries",
        "countryCodes",
        "isDarkMode"
    ],
    methods: {
      toDetail(name, codes) {
          this.$router.push({ name: "Detail", params: {name: name, codes: codes}})
      },
      localeString(num) {
          return num.toLocaleString();
      }
    }
}
</script>

<style scoped>
    .country-wrap {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, .5fr);
        grid-gap: 65px;
        justify-content: center;
    }
    .country {
        min-height: 370px;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        overflow: hidden;
        border: none;
        padding: 0;
    }

    .country .image {
        width: 100%;
        height: 160px;
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: -25px;
        background-position: 50% 50%;
    }

    .country p {
        font-size: 15px;
        margin: 7px 20px;
        text-align: left;
    }

    .country p:last-child {
        margin-bottom: 45px;
    }

    .country h1 {
        margin: 17px 20px;
        text-align: left;
        font-weight: 900;
    }

    .country span {
        font-weight: 600;
    }

    @media only screen and (max-width: 1500px) {
        .country-wrap {
            grid-template-columns: repeat(4, 0.5fr);
        }
    }

    @media only screen and (max-width: 1140px) {
        .country-wrap {
            grid-template-columns: repeat(3, 0.5fr);
        }
    }

    @media only screen and (max-width: 780px) {
        .country-wrap {
            grid-template-columns: repeat(2, 0.5fr);
        }
    }

    @media only screen and (max-width: 520px) {
        .country-wrap {
            grid-template-columns: repeat(1, 0.8fr);
        }
    }
</style>