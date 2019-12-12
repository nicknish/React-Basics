// KEY LESSON:
// To add CSS styles we can primarily do either:
// - Use the style attribute
// - Use the `className` attribute.
//
// Why `className`? Although we have JSX to provide an HTML-like
// experience, it's not HTML. It uses the DOM APIs that JavaScript
// uses.

import React from 'react'
import ReactDOM from 'react-dom'

function Profile(props) {
  return (
    <div className="profile">
      <img className="avatar" src={props.image} />
      <div className="profile-info">
        <h3 className="name">{props.name}</h3>
        <p className="handle">{props.handle}</p>
      </div>
    </div>
  )
}

function App() {
  const friends = [
    {
      name: 'Nick Nish',
      handle: '@nickjnish',
      image: 'https://avatars.io/twitter/@nickjnish'
    },
    {
      name: 'Shane Rogers',
      handle: '@shanerogers',
      image: 'https://avatars.io/twitter/@shanedjrogers'
    },
    {
      name: 'Andrew Wen',
      handle: '@andrew.wen',
      image: 'https://cataas.com/c'
    }
  ]

  return (
    <div id="container">
      {friends.map(friend => {
        return (
          <Profile
            name={friend.name}
            handle={friend.handle}
            image={friend.image}
          />
        )
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
