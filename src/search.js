import { DruxtClient } from 'druxt'

class DruxtSearch {
  /**
   * Constructor.
   *
   * @param string baseUrl
   * @param object options
   */
  constructor (baseUrl, options = {}) {
    // Check for URL.
    if (!baseUrl) {
      throw new Error('The \'baseUrl\' parameter is required.')
    }

    this.options = {
      menu: {
        index: 'default',
      },
      ...options
    }

    /**
     * Instance of the Druxt Client.
     *
     * @type {DruxtClient}
     * @see {@link http://druxtjs.org/api/client}
     */
    this.druxt = new DruxtClient(baseUrl, options)

    // Add the JSON API Search API resource to the index.
    this.index = this.druxt.getIndex().then(() => {
      this.druxt.index[`index--${this.options.menu.index}`] = { href: `${this.druxt.options.endpoint}/index/${this.options.menu.index}` }
    })
  }
}

export { DruxtSearch }
