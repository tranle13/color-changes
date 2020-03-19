import { shallowMount } from "@vue/test-utils";
import Country from "../src/components/Country";

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Country, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {}
    })
})

afterEach(() => {
    wrapper.destroy();
})

describe("Country", () => {
    test("is a Vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    })
})