import { DrupalJsonApiParams } from 'drupal-jsonapi-params'
import md5 from 'md5'

const DruxtSearchStore = ({ store }) => {
  if (typeof store === 'undefined') {
    throw new TypeError('Vuex store not found.')
  }

  const namespace = 'druxtSearch'
  const module = {
    namespaced: true,

    state: () => ({
      queries: {}
    }),

    mutations: {
      addResults (state, { query, results }) {
        const queryHash = md5(query.getQueryString())
        state.queries[queryHash] = results
      }
    },

    actions: {
      getResults ({ commit, state }, options) {
        const query = new DrupalJsonApiParams()
          .addFilter('fulltext', options.query)

        if (options.limit) {
          query.addPageLimit(options.limit)
        }

        const queryHash = md5(query.getQueryString())

        if (state.queries[queryHash]) {
          return state.queries[queryHash]
        }

        return this.$druxtSearch.druxtRouter.getResources(`index--${options.index}`, query).then(results => {
          commit('addResults', { query, results })
          return state.queries[queryHash]
        })
      }
    }
  }

  store.registerModule(namespace, module, {
    preserveState: Boolean(store.state[namespace])
  })
}

export { DruxtSearchStore }
