// KEY LESSON:
// What's the difference between a React component and an element?
// A component is a class or function that returns a React element.

import React from 'react'
import ReactDOM from 'react-dom'

var name = 'Nick Nish'
var handle = '@nickjnish'

// var headerElement = React.createElement("h1", { id: "title" }, name);
function NameComponent() {
  return React.createElement('h1', null, name)
}

// var handleElement = React.createElement("h3", {}, handle);
function HandleComponent() {
  return React.createElement('h3', null, handle)
}

const wrapperElement = React.createElement(
  'div',
  { id: 'container' },
  // headerElement,
  React.createElement(NameComponent),
  // handleElement,
  React.createElement(HandleComponent)
)

ReactDOM.render(wrapperElement, document.getElementById('app'))
