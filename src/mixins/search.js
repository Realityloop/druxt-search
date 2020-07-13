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

  methods: {
    doSearch() {
      this.getResults({ index: this.index, query: this.query }).then(results => {
        this.results = results
      })
    },

    ...mapActions({
      getResults: 'druxtSearch/getResults'
    })
  }
}

export { DruxtSearchMixin }
