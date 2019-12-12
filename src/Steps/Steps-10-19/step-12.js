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
