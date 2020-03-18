<template>
    <div class="country-detail component-padding">
        <img v-bind:src='country.flag' alt='flag'/>
        <div>
            <h2 class="country-name">{{country.name}}</h2>
            <div class="details">
                <div>
                    <p><span>Native Name:</span> {{country.nativeName}}</p>
                    <p><span>Population:</span> {{country.population.toLocaleString()}}</p>
                    <p><span>Region:</span> {{country.region}}</p>
                    <p><span>Sub Region:</span> {{country.subregion}}</p>
                    <p><span>Capital:</span> {{country.capital}}</p>
                </div>
                <div>
                    <p><span>Top Level Domain:</span> {{country.topLevelDomain[0]}}</p>
                    <p><span>Currencies:</span> {{getNames(country.currencies)}}</p>
                    <p><span>Languages:</span> {{getNames(country.languages)}}</p>
                </div>
            </div>
            <div class="border-span"><h4>Border Countries:</h4>
                <button class="border-div" v-for="(border, index) in country.borders" :key="index">
                    {{countryCodes[border]}}
                </button>
                <p v-if="country.borders.length === 0">None</p>
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
        "country"
    ],
    methods: {
        getNames(objects) {
            let names = [];
            objects.forEach(obj => names.push(obj.name));
            
            return names.join(", ");
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
        /* width: 100%; */
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

    .details div:first-child {
        flex-grow: 1;
    }

    .details div:last-child {
        flex-grow: 1;
    }
</style>