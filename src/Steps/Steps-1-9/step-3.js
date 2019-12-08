import React from "react";
import ReactDOM from "react-dom";

var name = "Nick Nish";
var handle = "@nickjnish";

// FAQ - What's the difference between a React component and an element?
// A component is a function or class that returns a React element
function NameComponent(props) {
  return React.createElement("h1", null, props.name);
}

function HandleComponent(props) {
  return React.createElement("h3", null, props.handle);
}

const wrapperElement = React.createElement(
  "div",
  { id: "container" },
  // We can use React.createElement with a component!
  React.createElement(NameComponent, { name: name }),
  React.createElement(HandleComponent, { handle: handle })
);

ReactDOM.render(wrapperElement, document.getElementById("app"));
