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

  // Add a method to remove the friend to our class
  // But this doens't work yet...
  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend.name !== name)
      }
    })
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
              // Pass our method as props.
              // We're calling our method inside an anonymous function
              // so we can pass in the correct data.
              onRemoveFriend={() => this.handleRemoveFriend(friend.name)}
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
        {/* Use the onRemoveFriend prop */}
        <button className="btn-remove" onClick={props.onRemoveFriend}>
          Remove
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
