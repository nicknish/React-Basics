// KEY LESSON:
//
// Use JSX, an "extension" to the JavaScript language, that allows
// us to write HTML-like syntax in JavaScript. This is a perfect
// pairing with React.

import React from 'react'
import ReactDOM from 'react-dom'

function NameComponent(props) {
  // return React.createElement("h1", null, props.name);
  return <h1>{props.name}</h1>
}

function HandleComponent(props) {
  // return React.createElement("h3", null, props.handle);
  return <h3>{props.handle}</h3>
}

function App() {
  return (
    <div id="container">
      <NameComponent name={'Nick Nish'} />
      <HandleComponent handle={'@nickjnish'} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
