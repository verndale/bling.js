# bling.js

Because you want the \$ of jQuery without the jQuery

Originally created by [Paul Irish](https://gist.github.com/paulirish/12fb951a8b893a454b32) modified by **Verndale**.

## Usage

### NPM installation

```bash
npm i @verndale/bling.js
```

### Yarn installation

```bash
yarn add @verndale/bling.js
```

### JS

```js
import "@verndale/bling.js"
```

## Docs

| Vanilla JavaScript                                                         | bling.j s                             |
| -------------------------------------------------------------------------- | ------------------------------------- |
| `document.querySelector('selector')`                                       | `_$('selector')`                      |
| `node.querySelector('selector')`                                           | `node._$('selector')`                 |
| `document.querySelectorAll('selector')`                                    | `_$$('selector')`                     |
| `node.querySelectorAll('selector')`                                        | `node._$$('selector')`                |
| `Array.from(document.querySelectorAll('selector')).filter(callback)` *     | `_$$('selector').filter(callback)` *  |
| `window.addEventListener('eventName', callback)`                           | `window._on('eventName', callback)`   |
| `node.addEventListener('eventName', callback)`                             | `node._on('eventName', callback)`     |
| `nodeList.forEach((node) => node.addEventListener('eventName', callback))` | `nodeList._on('eventName', callback)` |

> \* All array methods are available by default
