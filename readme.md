# tina-loading
> :hourglass_flowing_sand: Loading plugin for [Tina.js](https://github.com/tinajs/tina)

[![npm](https://img.shields.io/npm/v/@tinajs/tina-loading.svg?style=flat-square)](https://www.npmjs.com/package/@tinajs/tina-loading)
[![license](https://img.shields.io/github/license/tinajs/tina-loading.svg?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Setup
1. Install from npm
```bash
npm i --save @tinajs/tina-loading
```

2. Mix into Page & Component
```javascript
// app.js
import { Page, Component } from '@tinajs/tina'
import loading from '@tinajs/tina-loading'

Page.mixin(loading())
Component.mixin(loading())
```

## Usage
Normally use ``$loading.push()`` and ``$loading.pop()`` methods:
```javascript
// pages/some-page.js
import { Page } from '@tinajs/tina'
import { fetchData } from '../api'
Page.define({
  async onLoad () {
    this.$loading.push()
    try {
      const data = await fetchData()
      // ...balabala
    } catch () {}
    this.$loading.pop()
  },
})
```
> Each time calling ``$loading.push()`` method should come with one ``$loading.pop()``.

Or simply use ``$loading()`` with ``Promise.prototype.finally``:
```javascript
// pages/some-page.js
import { Page } from '@tinajs/tina'
import { fetchData } from '../api'
Page.define({
  onLoad () {
    fetchData()
      .then((data) => {
        // ...balabala
      })
      // trick here
      .finally(this.$loading())
  },
})
```

## API
### Page and Component Injections
#### $loading()
- Returns: ``Function``
- Details:

  Just a short way to call ``$loading.push()`` and return ``$loading.pop``

#### $loading.push()
- Details:

  Shows the loading spinner on the navigator bar, and pushes a loading-request to the cached stack.

#### $loading.pop()
- Details:

  Pops a loading-request from the cached stack, and hides the loading spinner on the navigator bar if the cached stack is empty.

#### $loading.isLoading()
- Returns: ``Boolean``

## License
MIT @ [yelo](https://github.com/imyelo)
