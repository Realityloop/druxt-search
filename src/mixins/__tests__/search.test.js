import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { DruxtSearchMixin, DruxtSearchStore } from '../..'

// Setup local vue instance.
const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  getResults: () => jest.fn(() => Promise.resolve(true))
}

let store

const testComponent = {
  render () {},
  mixins: [DruxtSearchMixin]
}

const mountWrapper = () => {
  return shallowMount(testComponent, { localVue, mocks, store })
}

describe('DruxtSearchMixin', () => {
  beforeEach(() => {
    // Setup vuex store.
    store = new Vuex.Store()
    DruxtSearchStore({ store })
    store.$druxtSearch = {
      druxtRouter: {
        getResources: () => Promise.resolve(true)
      }
    }
  })

  test('default', () => {
    const wrapper = mountWrapper()

    expect(wrapper.vm.index).toBe('default')
    expect(wrapper.vm.mode).toBe('search_result')

    expect(wrapper.vm.loading).toBe(false)
    expect(wrapper.vm.results).toStrictEqual([])
    expect(wrapper.vm.query).toBe('')

    expect(wrapper.vm.searchOptions).toStrictEqual({ limit: 10 })
  })

  test('watch', () => {
    const watch = {
      doSearch: jest.fn(),
      ...DruxtSearchMixin.watch
    }
    watch.query()
    expect(watch.doSearch).toHaveBeenCalled()
  })

  test('doSearch', async () => {
    const wrapper = mountWrapper()

    wrapper.vm.doSearch()
    await localVue.nextTick()
    await localVue.nextTick()

    expect(wrapper.vm.results).toBe(true)
  })
})
