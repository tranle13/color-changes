<template>
    <div class="country-detail component-padding">
        <img :src="country === undefined ? '' : country.flag" alt="flag"/>
        <div>
            <h2 class="country-name">{{country === undefined ? '' : country.name}}</h2>
            <div class="details">
                <div>
                    <p><span>Native Name:</span> {{country === undefined ? '' : country.nativeName}}</p>
                    <p><span>Population:</span> {{country === undefined ? '' : country.population.toLocaleString()}}</p>
                    <p><span>Region:</span> {{country === undefined ? '' : country.region}}</p>
                    <p><span>Sub Region:</span> {{country === undefined ? '' : country.subregion}}</p>
                    <p><span>Capital:</span> {{country === undefined ? '' : country.capital}}</p>
                </div>
                <div>
                    <p><span>Top Level Domain:</span> {{country === undefined ? '' : country.topLevelDomain[0]}}</p>
                    <p><span>Currencies:</span> {{getNames(country === undefined ? [] : country.currencies)}}</p>
                    <p><span>Languages:</span> {{getNames(country === undefined ? [] :country.languages)}}</p>
                </div>
            </div>
            <div class="border-span" :if="country !== undefined">
                <h4>Border Countries:</h4>
                <button
                    :class="isDarkMode ? 'dark-element' : 'light-element'" 
                    class="border-div" 
                    v-for="(border, index) in getData()" 
                    :key="index"
                    @click="$emit('nearbyCountry', countryCodes[border])">
                        {{countryCodes[border]}}
                </button>
                <p v-if="country === undefined ? false : country.borders.length === 0">None</p>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

export default {
    name: "CountryDetail",
    props: [
        "countryCodes",
        "country",
        "isDarkMode"
    ],
    methods: {
        getNames(objects) {
            let names = [];
            objects.forEach(obj => names.push(obj.name));
            
            return names.join(", ");
        },
        getData() {
            return this.country === undefined ? [] : this.country.borders
        },
    },
}
</script>

<style scoped>
    .country-name {
        font-weight: 800;
        font-size: 27px;
        margin-top: 0;
    }

    .country-detail {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .country-detail > img {
        width: 40vw;
        height: auto;
        object-fit: cover;
    }

    .country-detail > div {
        text-align: left;
    }

    .border-div {
        box-shadow: 0 0 8px rgba(0,0,0,0.1);
        border-radius: 7px;
        display: block;
        min-width: 100px;
        padding: 6px 8px;
        margin: 5px;
        text-align: center;
        border: none;
        font-size: 16px;
    }

    .border-span {
        display: flex;
        flex-flow: row wrap;
    }

    .border-span > h4 {
        margin: auto 5px auto 0;
    }

    .details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .details p span {
        font-weight: 600;
    }

    @media only screen and (max-width: 500px) {
        .country-detail {
            display: block;
        }

        .country-detail > img {
            width: 100%;
        }

        .details {
            display: block;
        }

        .country-name {
            margin-top: 30px;
        }

        .details div:last-child {
            margin: 40px 0;
        }
    }
</style>