import React from 'react'
import ReactDOM from 'react-dom'

// Finally, let's clean this up into its own "page" component.
function App() {
  return <ProfilePage />
}

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      friends: [
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
      var handle = '@' + this.state.input
      return {
        // Clear input upon submit
        input: '',
        friends: currentState.friends.concat({
          name: this.state.input,
          handle: handle,
          image: 'https://avatars.io/twitter/' + handle
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
        {/* Let's move this into its own component to clean this up */}
        <ProfileForm
          input={this.state.input}
          onChange={this.handleInput}
          onAddFriend={this.handleAddFriend}
        />

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

function ProfileForm(props) {
  return (
    <div className="form">
      <input
        type="text"
        className="form-input"
        placeholder="Add..."
        value={props.input}
        onChange={props.onChange}
      />
      <button className="form-btn" onClick={props.onAddFriend}>
        Add
      </button>
    </div>
  )
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
