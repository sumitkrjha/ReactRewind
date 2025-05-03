import reactRender from "../index.js";

const reactComponent = {
  type: "img",
  props: {
    src: "./assets/react.svg",
    style: {
      height: "200px",
    },
  },
};

reactRender(reactComponent);
