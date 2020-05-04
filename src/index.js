window.$ = document.querySelector.bind(document);

window.$$ = document.querySelectorAll.bind(document);

Node.prototype.$ = function (...args) {
  return this.querySelector(...args);
};

Node.prototype.$$ = function (...args) {
  return this.querySelectorAll(...args);
};

NodeList.prototype.__proto__ = Array.prototype;

Node.prototype.on = window.on = function (...args) {
  this.addEventListener(...args);
};

NodeList.prototype.on = function (...args) {
  this.forEach((node) => node.on(...args));
};
