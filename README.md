# normalized-map

![Downloads](https://img.shields.io/npm/dw/normalized-map?style=flat-square) ![Version@npm](https://img.shields.io/npm/v/normalized-map?label=version%40npm&style=flat-square) ![Version@git](https://img.shields.io/github/package-json/v/szikszail/normalized-map/main?label=version%40git&style=flat-square) ![CI](https://img.shields.io/github/actions/workflow/status/szikszail/normalized-map/ci.yml?branch=main&label=ci&style=flat-square) ![Docs](https://img.shields.io/github/actions/workflow/status/szikszail/normalized-map/docs.yml?branch=main&label=docs&style=flat-square)

The `normalized-map` is an open-source Javascript map object that handles and normalizes string keys. It treats all keys as case-insensitive and ignores special characters. This powerful tool helps developers handle diverse input scenarios where the string key's case and presence of special characters should not affect the map's functionality.

## Usage

First, you need to install the package:

```shell
npm install normalized-map
```

After the `normalized-map` is installed, you can import it into your JavaScript file:

```javascript
const NormalizedMap = require('normalized-map');
```
Create a map:

```javascript
const map = new NormalizedMap();
```

Or with initial values:

```javascript
const map = new NormalizedMap([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
```

Now you can use this map just like a common Map. The difference is you don't have to worry about the case and special characters in the keys:

```javascript
// set value
map.set('Key', 'value');

// get value
console.log(map.get('key')); // Output: 'value'
console.log(map.get('KEY')); // Output: 'value'
console.log(map.get('kEy')); // Output: 'value'

// ignoring special characters
map.set('#Hello',123);
console.log(map.get('hello')); // Output: 123
console.log(map.get('#hello')); // Output: 123
``` 

Like a typical Map object, `NormalizedMap` has methods such as `delete(key)`, `has(key)`, and `clear()`:

```javascript
// delete key-value pair
map.delete('key');

// check if map has key
console.log(map.has('key')); // Output: false

// clear map
map.clear();
```

By using `NormalizedMap`, you no longer need to worry about case sensitivity and special characters when dealing with JavaScript Map keys.

## Other

For detailed documentation see the [TypeDocs documentation](https://szikszail.github.io/normalized-map/).

This package uses [debug](https://www.npmjs.com/package/debug) for logging, use `normalized-map` to see debug logs:

```shell
DEBUG=normalized-map node my-script.js
```
