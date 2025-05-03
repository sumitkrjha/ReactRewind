# 🧠 My Own React

An educational deconstruction of the React.js library to understand its core principles — built from scratch in vanilla JavaScript.

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/cce051cf-b738-4e64-ab63-f6745ec182ae)

![image](https://github.com/user-attachments/assets/cee02b04-af3a-4474-bcc5-bb8112d85255)

---

## 🧩 What is this?

**"My Own React"** is a minimalist implementation of React’s component-based architecture and rendering logic. It simulates how React breaks down UI into components, processes props and styles, and renders them into the DOM using a tree-based approach.

This project is meant for learning and demonstration purposes — a hands-on way to peek under the hood of how React works.

---

## 🛠️ How it Works

Just like a typical React app, the structure starts with a basic `HTML` file that includes a root `<div>` element:

```html
<!-- index.html -->
<body>
  <div id="root"></div>
  <script type="module" src="./components/buttonComponent.js"></script>
</body>
```

Then you create components in **pure JavaScript** using object literals.

### ✅ A sample component (`buttonComponent.js`):

```js
import reactRender from "../index.js";

const reactComponent = {
  type: "button",
  props: {
    style: {
      height: "40px",
      width: "200px",
      borderRadius: "20px",
      cursor: "pointer",
    },
    onclick: `alert("This is Sumit's React")`,
  },
  children: "Click me!",
};

reactRender(reactComponent);
```

### 🚀 The rendering engine (`index.js`):

```js
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
```

---

## 🧠 Concepts Demonstrated

- **Component-based architecture**  
  Each UI element is a self-contained JavaScript object.

- **Props handling**  
  Custom properties like `style` and `onclick` are parsed and applied.

- **DOM rendering**  
  The `reactRender()` method mimics ReactDOM's rendering into the `root` div.

---

## 🔧 How to Run

1. Clone or download the project.
2. Open `index.html` in a browser.
3. See your custom components rendered dynamically into the DOM.

---

## ✨ Future Ideas

- Support for nested components
- JSX-like syntax parser
- Virtual DOM diffing for efficient updates
- Event binding using actual function references

---

## 📚 Why Do This?

Understanding the inner workings of frameworks like React builds a strong foundation for becoming a better frontend developer. "My Own React" is a great sandbox for exploring and learning these ideas.

---

## 💡 Inspired By

- The official [React.js Documentation](https://react.dev/)
- Hitesh Chaudhary (chai aur code) [React Explanation](https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige).
- Curiosity and the desire to learn by building!

---

Made with ❤️ by **Sumit**
