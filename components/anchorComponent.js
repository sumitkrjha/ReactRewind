import reactRender from "../index.js";

const reactComponent = {
  type: "a",
  props: {
    href: "https://sumitkrjha.onrender.com",
    target: "_blank",
  },
  children: "Click to see my work!!",
};

reactRender(reactComponent);
