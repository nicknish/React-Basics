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

    this.handleAddFriend = this.handleAddFriend.bind(this)
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
  }

  handleAddFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.concat({
          name: name,
          handle: '@' + name,
          image: 'https://source.unsplash.com/random'
        })
      }
    })
  }

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
        <div className="form">
          <input type="text" className="form-input" placeholder="Add..." />
          {/* What do we use for our input? */}
          <button className="form-btn" onClick={() => this.handleAddFriend()}>
            Add
          </button>
        </div>

        {this.state.friends.map(friend => {
          return (
            <Profile
              name={friend.name}
              handle={friend.handle}
              image={friend.image}
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
        <button className="btn-remove" onClick={props.onRemoveFriend}>
          Remove
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
