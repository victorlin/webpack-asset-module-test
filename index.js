const x = require("./circular-tree.png");

function component() {
  const element = document.createElement('div');

  element.innerHTML = `hello ${x}`;

  return element;
}

document.body.appendChild(component());
