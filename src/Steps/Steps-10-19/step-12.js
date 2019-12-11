// KEY LESSON:
// A React component can be either a class or function that returns a
// React element.

import React from 'react'
import ReactDOM from 'react-dom'

// A React component can be a function that returns
// a React element like so:
function Profile(props) {
  return (
    <div>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.handle}</p>
    </div>
  )
}

// It can also be a class! A class has the benefit
// of managing React-managed state.
class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Profile
          name="Nick Nish"
          handle="@nickjnish"
          image="https://s.gravatar.com/avatar/1975ed1fb4cb3de91c17c4e6c19f2f22?s=80&r=x"
        />
        <Profile
          name="Shane Rogers"
          handle="@shanerogers"
          image="https://cataas.com/c"
        />
        <Profile
          name="Andrew Wen"
          handle="@andrew.wen"
          image="https://cataas.com/c"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
