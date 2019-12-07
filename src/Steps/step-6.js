import React from "react";
import ReactDOM from "react-dom";

// We can combine chunks of code into a single component
// Then we can reuse these components from anywhere!
function Avatar(props) {
  return (
    <div>
      <img src={props.src} />
      <h3>Name: {props.name}</h3>
      <p>Handle: {props.handle}</p>
    </div>
  );
}

function Avatars() {
  return (
    <div>
      <h1>Friends List</h1>
      <Avatar
        src="https://s.gravatar.com/avatar/1975ed1fb4cb3de91c17c4e6c19f2f22?s=80&r=x"
        name="Nick Nish"
        handle="@nickjnish"
      />
      <Avatar
        src="https://cataas.com/c"
        name="Kevin Rose"
        handle="@kevinrose"
      />
      <Avatar src="https://cataas.com/c" name="Sam" handle="@sharkysam" />
    </div>
  );
}

function App() {
  return (
    <div id="container">
      <Avatars />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
