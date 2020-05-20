window._$ = document.querySelector.bind(document);

window._$$ = document.querySelectorAll.bind(document);

Node.prototype._$ = function (...args) {
  return this.querySelector(...args);
};

Node.prototype._$$ = function (...args) {
  return this.querySelectorAll(...args);
};

NodeList.prototype.__proto__ = Array.prototype;

Node.prototype._on = window._on = function (...args) {
  this.addEventListener(...args);
};

NodeList.prototype._on = function (...args) {
  this.forEach((node) => node._on(...args));
};
