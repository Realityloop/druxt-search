import { DruxtRouter } from 'druxt-router'

class DruxtSearch {
  /**
   * Constructor.
   *
   * @param string baseURL
   * @param object options
   */
  constructor (baseURL, options = {}) {
    // Check for URL.
    if (!baseURL) {
      throw new Error('The \'baseURL\' parameter is required.')
    }

    this.options = {
      endpoint: 'jsonapi',

      ...options
    }

    // Setup Druxt Router.
    this.druxtRouter = new DruxtRouter(baseURL, options)

    // Add the JSON API Search API resource to the index.
    this.index = this.druxtRouter.getIndex().then(() => {
      this.druxtRouter.index['index--default'] = { href: `${this.options.endpoint}/index/default` }
    })
  }
}

export { DruxtSearch }
