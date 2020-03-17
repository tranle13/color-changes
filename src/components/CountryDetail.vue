<template>
    <div class="country-detail" v-if="isDetail">
        <img v-bind:src='selectedCountry.flag' alt='flag'/>
        <div>
            <h2 class="country-name">{{selectedCountry.name}}</h2>
            <div class="details">
                <div>
                    <p><span>Native Name:</span> {{selectedCountry.nativeName}}</p>
                    <p><span>Population:</span> {{selectedCountry.population}}</p>
                    <p><span>Region:</span> {{selectedCountry.region}}</p>
                    <p><span>Sub Region:</span> {{selectedCountry.subregion}}</p>
                    <p><span>Capital:</span> {{selectedCountry.capital}}</p>
                </div>
                <div>
                    <p><span>Top Level Domain:</span> {{selectedCountry.topLevelDomain[0]}}</p>
                    <p><span>Currencies:</span> {{getNames(selectedCountry.currencies)}}</p>
                    <p><span>Languages:</span> {{getNames(selectedCountry.languages)}}</p>
                </div>
            </div>
            <span class="border-span"><p>Border Countries:</p>
                <p class="border-div" v-for="(border, index) in selectedCountry.borders" :key="index">
                    {{countryCodes[border]}}
                </p>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryDetail",
    props: [
        "selectedCountry",
        "isDetail",
        "countryCodes"
    ],
    methods: {
        getNames(objects) {
            let names = [];
            objects.forEach(obj => names.push(obj.name));
            
            return names.join(", ");
        }
    }
}
</script>

<style scoped>
    .country-name {
        font-weight: 800;
        font-size: 27px;
        margin-top: 0;
    }


    .country-detail {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .country-detail > img {
        width: 40vw;
        height: 45vh;
        object-fit: cover;
    }

    .country-detail > div {
        text-align: left;
        margin-left: 8%;
    }

    .border-div {
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-radius: 8px;
        display: grid;
        grid-auto-columns: 3%;
        width: 100px;
        text-align: center;
    }

    .border-span {
        display: flex;
    }

    .details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .details div:first-child {
        flex-grow: 1;
    }

    .details div:last-child {
        flex-grow: 1;
    }
</style>