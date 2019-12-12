// KEY LESSON:
//
// We can compose elements and components with React.createElement.
// Composition of elements and components is a PILLAR of React.

import React from 'react'
import ReactDOM from 'react-dom'

var name = 'Nick Nish'
var handle = '@nickjnish'

var headerElement = React.createElement('h1', { id: 'title' }, name)
var handleElement = React.createElement('h3', {}, handle)

// Create a wrapper element!
const wrapperElement = React.createElement(
  'div',
  { id: 'container' },
  headerElement,
  handleElement
)

ReactDOM.render(wrapperElement, document.getElementById('app'))
