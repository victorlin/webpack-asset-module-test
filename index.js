import NavBar from "./components/navbar";

function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello ${NavBar}`;

  return element;
}

document.body.appendChild(component());
