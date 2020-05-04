# bling.js

Because you want the \$ of jQuery without the jQuery

Originally created by [Paul Irish](https://gist.github.com/paulirish/12fb951a8b893a454b32) modified by **Verndale**.

## Usage

### NPM installation

```bash
npm i @verndale/object-fit
```

### Yarn installation

```bash
npm i @verndale/object-fit
```

### JS

```js
import "@verndale/bling.js"
```

## Docs

| Vanilla JavaScript                                                       | bling.js                           |
| ------------------------------------------------------------------------ | ---------------------------------- |
| document.querySelector('selector')                                       | \$('selector')                     |
| node.querySelector('selector')                                           | node.\$('selector')                |
| document.querySelectorAll('selector')                                    | \$\$('selector')                   |
| node.querySelectorAll('selector')                                        | node.\$\$('selector')              |
| Array.from(document.querySelectorAll('selector')).filter(callback)       | \$\$('selector').filter(callback)  |
| window.addEventListener('eventName', callback)                           | window.on('eventName', callback)   |
| node.addEventListener('eventName', callback)                             | node.on('eventName', callback)     |
| nodeList.forEach((node) => node.addEventListener('eventName', callback)) | nodeList.on('eventName', callback) |
