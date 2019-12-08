// We can use JSX, an extension to JavaScript, that allows
// us to write HTML-like syntax in JavaScript.

import React from "react";
import ReactDOM from "react-dom";

var name = "Nick Nish";
var handle = "@nickjnish";

function NameComponent(props) {
  return <h1>{props.name}</h1>;
}

function HandleComponent(props) {
  return <h3>{props.handle}</h3>;
}

function App() {
  return (
    <div id="container">
      <NameComponent name={name} />
      <HandleComponent handle={handle} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
