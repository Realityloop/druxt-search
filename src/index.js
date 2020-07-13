import { resolve } from 'path'

export { DruxtSearch } from './search.js'

export { DruxtSearchMixin } from './mixins/search.js'

export { DruxtSearchStore } from './store'

export default function (moduleOptions = {}) {
  // Use root level Druxt options.
  if (typeof this.options === 'undefined' || !this.options.druxt) {
    throw new TypeError('Druxt settings missing.')
  }
  const options = this.options.druxt

  // Add plugin.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/plugin.js'),
    fileName: 'druxt-search.js',
    options
  })

  // Add Vuex plugin.
  // @TODO - Ensure Vuex store is available.
  this.addPlugin({
    src: resolve(__dirname, '../nuxt/store.js'),
    fileName: 'store/druxt-search.js',
    options
  })
}
