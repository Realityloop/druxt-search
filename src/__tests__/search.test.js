import { DruxtSearch } from '..'

const baseURL = 'https://example.com'

describe('DruxtSearch', () => {
  test('constructor', async () => {
    // Throw error if 'baseURL' not provided.
    expect(() => { return new DruxtSearch() }).toThrow('The \'baseURL\' parameter is required.')

    // Ensure class type.
    const search = new DruxtSearch(baseURL)
    expect(search).toBeInstanceOf(DruxtSearch)
    const index = await search.druxtRouter.getIndex()
    expect(index['index--default'].href).toBe('jsonapi/index/default')
  })
})
