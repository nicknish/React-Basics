import React from 'react'
import ReactDOM from 'react-dom'

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
      {/* Reuse components! */}
      <Profile
        name="Nick Nish"
        handle="@nickjnish"
        image="https://avatars.io/twitter/@nickjnish"
      />
      <Profile
        name="Shane Rogers"
        handle="@shanerogers"
        image="https://avatars.io/twitter/@shanedjrogers"
      />
      <Profile
        name="Andrew Wen"
        handle="@andrew.wen"
        image="https://cataas.com/c"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
