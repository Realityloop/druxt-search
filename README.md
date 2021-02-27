# \<druxt-search />

[![CircleCI](https://circleci.com/gh/Realityloop/druxt-search.svg?style=svg)](https://circleci.com/gh/Realityloop/druxt-search)
[![Known Vulnerabilities](https://snyk.io/test/github/Realityloop/druxt-search/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Realityloop/druxt-search?targetFile=package.json)
[![codecov](https://codecov.io/gh/Realityloop/druxt-search/branch/develop/graph/badge.svg)](https://codecov.io/gh/Realityloop/druxt-search)

Provides JSON API Search integration for a Druxt (DRUpal nuXT) project.

## Install

`$ npm install druxt-search`

## Usage

Add module to `nuxt.config.js`

```js
module.exports = {
  modules: [
    'druxt-search'
  ],

  druxt: {
    baseUrl: 'https://demo-api.druxtjs.org'
  }
}
```

## Options

### Base Druxt options

These options are available to all Druxt modules.

| Option | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `axios` | `object` | No | `{}` | [Axios instance settings](https://github.com/axios/axios#axioscreateconfig). |
| `baseUrl` | `string` | Yes | `null` | Base URL for the Drupal installation. |
