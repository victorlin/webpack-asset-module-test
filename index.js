const x = require(`@extensions/extension.js`).default; // eslint-disable-line

function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello ${x}`;

  return element;
}

document.body.appendChild(component());
