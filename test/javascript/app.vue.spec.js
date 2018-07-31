import { shallowMount } from '@vue/test-utils'
import App from '../../app/javascript/app'
describe("app.vue", () => {
  it("renders message", () => {
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toEqual('Hello Vue!')
  })
})
