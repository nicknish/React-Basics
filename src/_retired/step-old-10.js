import React from 'react'
import ReactDOM from 'react-dom'

// In this example, we have a few things going on.
// They're annotated below to see each step.
//
// 1. Add a new method `handleRemoveFriend` on <App />
//    This runs setState and filters the friend name
//    that's passed.
// 2. Bind the `handleRemoveFriend` method to the <App />
//    Otherwise when we call `this` the reference will point
//    to the component that calls it.
// 3. Pass `handleRemoveFriend` as a prop
// 4. Run `handleRemoveFriend` when button is clicked.

function FriendsList(props) {
  return (
    <ul>
      {props.list.map(name => (
        <li key={name}>
          <span>{name}</span>
          {/* 4. Run `handleRemoveFriend` */}
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
      friends: ['Jordan', 'Mckenzie', 'Jake']
    }

    // 2. Bind the new handleRemoveFriend method to <App />
    this.handleRemoveFriend = this.handleRemoveFriend.bind(this)
  }

  // 1. Add handleRemoveFriend
  handleRemoveFriend(name) {
    // If you pass setState a function, the returned
    // object will be merged with the current state
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      }
    })
  }

  render() {
    return (
      <FriendsList
        list={this.state.friends}
        // 3. Pass handleRemoveFriend as a prop
        onRemoveFriend={this.handleRemoveFriend}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
