import React from "react";
import ReactDOM from "react-dom";

// In this example, we're having <App />
// manage the state using React manage state
// and passing the state to <FriendsList />
// as props!

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
  constructor(props) {
    super(props);

    this.state = {
      friends: ["Jordan", "Mckenzie", "Jake"]
    };
  }

  render() {
    return <FriendsList list={this.state.friends} />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
