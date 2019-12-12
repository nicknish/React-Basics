import React from 'react'
import ReactDOM from 'react-dom'

function NameComponent(props) {
  return <h1>Name: {props.name}</h1>
}

function HandleComponent(props) {
  return <h3>Handle: {props.handle}</h3>
}

function AvatarComponent(props) {
  return <img src={props.src} />
}

// TODO: Fill the props with your own info!
function App() {
  return (
    <div id="container">
      <NameComponent name="Nick Nish" />
      <HandleComponent handle="@nickjnish" />
      <AvatarComponent src="https://avatars.io/twitter/@nickjnish" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
