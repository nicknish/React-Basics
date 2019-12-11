import React from "react";
import ReactDOM from "react-dom";

// Let's combine components now!
// We are now passing our friends list to
// a component to render the list.

function FriendsList(props) {
  return (
    <ul>
      {props.list.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

class App extends React.Component {
  render() {
    const friends = ["Jordan", "Mckenzie", "Jake"];

    return <FriendsList list={friends} />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
