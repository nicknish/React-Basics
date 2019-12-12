import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
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

    this.handleInput = this.handleInput.bind(this)
    this.handleAddFriend = this.handleAddFriend.bind(this)
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
  }

  handleInput(event) {
    this.setState({ input: event.target.value })
  }

  handleAddFriend() {
    this.setState(currentState => {
      return {
        friends: currentState.friends.concat({
          name: this.state.input,
          handle: '@' + this.state.input,
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
          {/* We have to "control" our input */}
          <input
            type="text"
            className="form-input"
            placeholder="Add..."
            value={this.state.input}
            onChange={this.handleInput}
          />
          <button className="form-btn" onClick={this.handleAddFriend}>
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
