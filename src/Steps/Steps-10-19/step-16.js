// Let's add a way to remove a friend.
// First let's add the UI.

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: [
        {
          name: 'Nick Nish',
          handle: '@nickjnish',
          image:
            'https://s.gravatar.com/avatar/1975ed1fb4cb3de91c17c4e6c19f2f22?s=80&r=x'
        },
        {
          name: 'Shane Rogers',
          handle: '@shanerogers',
          image: 'https://source.unsplash.com/random'
        },
        {
          name: 'Andrew Wen',
          handle: '@andrewwen',
          image: 'https://cataas.com/c'
        }
      ]
    }
  }

  render() {
    return (
      <div id="container">
        {this.state.friends.map(friend => {
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
}

function Profile(props) {
  return (
    <div className="profile">
      <img className="avatar" src={props.image} />
      <div className="profile-info">
        <h3 className="name">{props.name}</h3>
        <p className="handle">{props.handle}</p>
      </div>
      <div className="btn-container">
        {/* How do we update the state to remove the friend? */}
        <button className="btn-remove">Remove</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
