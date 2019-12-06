import React from "react";
import ReactDOM from "react-dom";

// Whoa! We can mix HTML with JavaScript!
function NameComponent(props) {
  return <h1>Name: {props.name}</h1>;
}

function HandleComponent(props) {
  return <h3>Handle: {props.handle}</h3>;
}

function AvatarComponent(props) {
  return <img src={props.src} />;
}

function App() {
  return (
    <div id="container">
      <NameComponent name="Nick" />
      <HandleComponent handle="@nickjnish" />
      <AvatarComponent src="https://s.gravatar.com/avatar/1975ed1fb4cb3de91c17c4e6c19f2f22?s=80&r=x" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
