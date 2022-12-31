const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste React"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste React Again"
);
const heading3 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone!"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2, heading3]
);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
