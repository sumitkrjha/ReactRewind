const container = document.getElementById("root");

function reactRender(reactComponent) {
  const newDomElement = document.createElement(reactComponent.type);
  newDomElement.innerHTML = reactComponent.children;

  for (let prop in reactComponent.props) {
    if (prop === "style") {
      Object.assign(newDomElement.style, reactComponent.props[prop]);
    } else {
      newDomElement.setAttribute(prop, reactComponent.props[prop]);
    }
  }

  container.appendChild(newDomElement);
}

export default reactRender;
