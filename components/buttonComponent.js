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
    onclick: `alert("This is sumit's react")`,
  },
  children: "Click me!",
};

reactRender(reactComponent);
