import React from 'react'
import ReactDOM from 'react-dom'

// Add functionality to add a new friend.
// 1. Manage input state with "controlled" input
// 2. Add button to handle adding friend

function FriendsList(props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}>
          <span>{name}</span>
          <button onClick={() => props.onRemoveFriend(name)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      friends: ['Jordan', 'Mckenzie', 'Jake']
    }

    // 1. Bind handleChangeInput like always
    this.handleChangeInput = this.handleChangeInput.bind(this)
    // 2. Bind handleAddFriend like always
    this.handleAddFriend = this.handleAddFriend.bind(this)
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
  }

  // 1. Update input state using the inputs internal value
  handleChangeInput(event) {
    this.setState({ input: event.target.value })
  }

  // 2. Add the input value to the friends list
  handleAddFriend() {
    if (!this.state.input) {
      return
    }

    this.setState(currentState => {
      return {
        friends: [...currentState.friends, currentState.input],
        input: ''
      }
    })
  }

  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      }
    })
  }

  render() {
    return (
      <div>
        {/* 
          1. Add new input and manage its state by setting its `value`
             and change its value using `handleChangeInput`.
        */}
        <input
          type="text"
          placeholder="new friend"
          value={this.state.input}
          onChange={this.handleChangeInput}
        />
        <button onClick={this.handleAddFriend}>Add</button>
        <FriendsList
          list={this.state.friends}
          onRemoveFriend={this.handleRemoveFriend}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
