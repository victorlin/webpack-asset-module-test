function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello ${x}`;

  const file = "extension.js";
  const x = require(`@extensions/${file}`).default;

  return element;
}

document.body.appendChild(component());
