import { DruxtSearch } from 'druxt-search'

export default (context, inject) => {
  const baseUrl = '<%= options.baseUrl %>'
  const options = {}

  <% if (options.endpoint) { %>
  options.endpoint = '<%= options.endpoint %>'
  <% } %>

  const druxtSearch = new DruxtSearch(baseUrl, options)
  inject('druxtSearch', druxtSearch)
}
