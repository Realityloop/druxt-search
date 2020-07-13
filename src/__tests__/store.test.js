import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { DruxtSearchStore } from '..'

// Setup local vue instance.
const localVue = createLocalVue()
localVue.use(Vuex)

let store

const query = { getQueryString: () => '?querystring' }

describe('DruxtSearchStore', () => {
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

  test('init', () => {
    expect(() => { DruxtSearchStore({}) }).toThrow('Vuex store not found.')
  })

  test('addResults', () => {
    expect(store.state.druxtSearch.queries).toStrictEqual({})

    store.commit('druxtSearch/addResults', { query, results: true })

    const queryKeys = Object.keys(store.state.druxtSearch.queries)
    expect(queryKeys.length).toBe(1)
    expect(queryKeys[0]).toBe('ec289173bfef4b077dc5d721b3efcc98')
    expect(store.state.druxtSearch.queries[queryKeys[0]]).toBe(true)
  })

  test('getResults', async () => {
    expect(store.state.druxtSearch.queries).toStrictEqual({})

    const results = await store.dispatch('druxtSearch/getResults', { query, limit: 1 })
    expect(results).toBe(true)

    // @TODO - Check this returns value from cache.
    await store.dispatch('druxtSearch/getResults', { query, limit: 1 })
  })
})
