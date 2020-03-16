<template>
    <div class='country'>
        <img v-bind:src='country.flag' alt='flag'/>
        <h3>{{country.name}}</h3>
        <p><strong>Population</strong>:{{country.population}}</p>
        <p><strong>Region</strong>:{{country.region}}</p>
        <p><strong>Capital</strong>:{{country.capital}}</p>
    </div>
</template>

<script>
export default {
    name: 'Country',
    props: [
        'country'
    ],
    created() {
        console.log(this.country);
        
    }
}
</script>

<style scoped>
    .country {
        height: 50px;
    }
</style>