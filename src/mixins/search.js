import { mapActions } from 'vuex'

/**
 * @mixin
 */
const DruxtSearchMixin = {
  props: {
    index: {
      type: String,
      default: 'default'
    },

    mode: {
      type: String,
      default: 'search_result'
    }
  },

  data: () => ({
    loading: false,
    results: [],
    query: '',
  }),

  watch: {
    query() {
      this.doSearch()
    }
  },

  computed: {
    searchOptions: () => ({
      limit: 10
    }),
  },

  methods: {
    doSearch() {
      const options = {
        index: this.index,
        query: this.query,

        ...this.searchOptions
      }

      this.getResults(options).then(results => {
        this.results = results
      })
    },

    ...mapActions({
      getResults: 'druxtSearch/getResults'
    })
  }
}

export { DruxtSearchMixin }
