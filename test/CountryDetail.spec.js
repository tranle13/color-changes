import { shallowMount } from "@vue/test-utils";
import CountryDetail from "../src/components/CountryDetail";
import json from "./country.json";
import jsonCodes from "./countryCodes.json";

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(CountryDetail, {
        propsData: {
            country: json,
            countryCodes: jsonCodes
        }
    })
}) 

afterEach(() => {
    wrapper.destroy();
})

describe("CountryDetail", () => {
    test("country's detail is populated correctly", () => {
        expect(wrapper.find(".country-name").text()).toBe(json.name)
        
        const texts = wrapper.findAll("p")
        const titles = {
            "Native Name": json.name, 
            "Population": json.population.toLocaleString(), 
            "Region": json.region, 
            "Sub Region": json.subregion, 
            "Capital": json.capital, 
            "Top Level Domain": json.topLevelDomain[0], 
            "Currencies": wrapper.vm.getNames(json.currencies), 
            "Languages": wrapper.vm.getNames(json.languages)}

        Object.entries(titles).forEach(([key, value], i) => {
            expect(texts.at(i).text()).toBe(`${key}: ${value}`)
        })

        // expect(texts.at(0).text()).toBe(`Native Name: ${json.name}`)
        // expect(texts.at(1).text()).toBe(`Population: ${json.population.toLocaleString()}`)
        // expect(texts.at(2).text()).toBe(`Region: ${json.region}`)
        // expect(texts.at(3).text()).toBe(`Sub Region: ${json.subregion}`)
        // expect(texts.at(4).text()).toBe(`Capital: ${json.capital}`)
        // expect(texts.at(5).text()).toBe(`Top Level Domain: ${json.topLevelDomain[0]}`)
        // expect(texts.at(6).text()).toBe(`Currencies: ${currencies}`)
        // expect(texts.at(7).text()).toBe(`Languages: ${languages}`)

        const buttons = wrapper.findAll("button")
        const borders = json.borders

        for (let i = 0; i < json.borders.length; i++) {
            expect(buttons.at(i).text()).toBe(jsonCodes[json.borders[i]])
        }
    })
})