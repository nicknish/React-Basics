import React from 'react'
import ReactDOM from 'react-dom'

// function NameComponent(props) {
//   return <h1>Name: {props.name}</h1>;
// }

// function HandleComponent(props) {
//   return <h3>Handle: {props.handle}</h3>;
// }

// function Avatar(props) {
//   return <img src={props.src} />;
// }

// We can combine chunks of code into a single component
// Then we can reuse these components from anywhere!
function Profile(props) {
  return (
    <div>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.handle}</p>
    </div>
  )
}

function App() {
  return (
    <div id="container">
      <Profile
        name="Nick Nish"
        handle="@nickjnish"
        image="https://avatars.io/twitter/@nickjnish"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
