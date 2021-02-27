import { DruxtSearch } from '..'

describe('DruxtSearch', () => {
  test('constructor', async () => {
    // Throw error if 'baseUrl' not provided.
    expect(() => { return new DruxtSearch() }).toThrow('The \'baseUrl\' parameter is required.')

    // Ensure class type.
    const search = new DruxtSearch('https://demo-api.druxtjs.org')
    expect(search).toBeInstanceOf(DruxtSearch)
    const index = await search.druxt.getIndex()
    expect(index['index--default'].href).toBe('/jsonapi/index/default')
  })
})
