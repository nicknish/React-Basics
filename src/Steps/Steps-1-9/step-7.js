import React from "react";
import ReactDOM from "react-dom";

// A React component can be a function that returns
// a React element like so:
// function App() {
//   return <div>Hello world</div>;
// }

// It can also be a class! A class has the benefit
// of managing React-managed state.
class App extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
