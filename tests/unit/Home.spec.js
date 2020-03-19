import { shallowMount } from "@vue/test-utils"
import Country from "@/component/Country"
import countries from "./countries.JSON"

let countryWrapper = null
let detailWrapper = null

beforeEach(() => {
    countryWrapper = shallowMount(Country, {
        propsData: {
            countries: JSON.parse(countries),
            countryCodes: {
                "BRA": "Brazil",
                "ECU": "Ecuador",
                "PAN": "Panama",
                "PER": "Peru",
                "VEN": "Venezuela (Bolivarian Republic of)",
                "FIN": "Finland",
                "SWE": "Sweden",
                "RUS": "Russian Federation"
            }
        }
    })
})

afterEach(() => {
    countryWrapper.destroy()
})

describe([])