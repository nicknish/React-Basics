// Let's start mixing data, HTML, and static content
// and add an image!

import React from 'react'
import ReactDOM from 'react-dom'

function NameComponent(props) {
  return <h1>Name: {props.name}</h1>
}

function HandleComponent(props) {
  return <h3>Handle: {props.handle}</h3>
}

function Avatar(props) {
  return <img src={props.src} />
}

function App() {
  return (
    <div id="container">
      <NameComponent name="Nick" />
      <HandleComponent handle="@nickjnish" />
      <Avatar src="https://avatars.io/twitter/@nickjnish" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
