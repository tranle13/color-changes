<template>
    <div class='country-wrap' v-if="countries">
        <button class='country' v-bind:key='country.numericCode' v-for='country in countries' @click="$emit('detail', country)">
            <img v-bind:src='country.flag' alt='flag'/>
            <h2>{{country.name}}</h2>
            <p><span>Population:</span> {{country.population}}</p>
            <p><span>Region:</span> {{country.region}}</p>
            <p><span>Capital:</span> {{country.capital}}</p>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Country',
    props: [
        'countries'
    ]
}
</script>

<style scoped>
    .country-wrap {
        /* display: flex; */
        /* flex-flow: row wrap;
        justify-content: space-between;
        align-content: center; */
        display: grid;
        grid-template-columns: repeat(5, 0.5fr);
        grid-gap: 65px;
    }
    .country {
        /* height: 325px; */
        /* width: 20%; */
        background: white;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        overflow: hidden;
        border: none;
        padding: 0;
        /* margin: 0 3% 3% 0; */
        /* cursor: pointer; */
    }

    .country img {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }

    .country p {
        font-size: 15px;
        margin: 7px 20px;
        text-align: left;
    }

    .country p:last-child {
        margin-bottom: 45px;
    }

    .country h2 {
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