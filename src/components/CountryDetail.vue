<template>
    <div>
        <img />
        <div>
            <h3>{{theCountry.name}}</h3>
            <p><span>Native Name:</span> {{country.nativeName}}</p>
            <p><span>Population:</span> {{country.nativeName}}</p>
            <p><span>Region:</span> {{country.nativeName}}</p>
            <p><span>Sub Region:</span> {{country.nativeName}}</p>
            <p><span>Capital:</span> {{country.nativeName}}</p>
            <p><span>Top Level Domain:</span> {{country.nativeName}}</p>
            <p><span>Currencies:</span> {{country.nativeName}}</p>
            <p><span>Languages:</span> {{country.nativeName}}</p>
            <span><p>Border Countries:</p>
            
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryDetail",
    props: [
        "theCountry"
    ]
}
</script>

<style scoped>

</style>