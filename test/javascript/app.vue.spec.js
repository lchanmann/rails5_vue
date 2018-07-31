import { shallowMount } from '@vue/test-utils'
import App from '../../app/javascript/app'
describe("app.vue", () => {
  it("renders message", () => {
    const wrapper = shallowMount(App)
    expect(wrapper.text()).toEqual('Hello Vue!')
  })

  it("reverse message text", () => {
    const wrapper = shallowMount(App)
    wrapper.vm.reverseMessage()
    expect(wrapper.text()).toEqual('!euV olleH')
  })
})
