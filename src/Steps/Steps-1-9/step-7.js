// KEY LESSON
//
// How do we pass data to Components? We pass them as "props".
// This is uni-directional data-flow (or 1-way data-flow).
// This makes it much easier to reason about where the data
// is coming from.

import React from 'react'
import ReactDOM from 'react-dom'

function NameComponent(props) {
  return React.createElement('h1', null, props.name)
}

function HandleComponent(props) {
  return React.createElement('h3', null, props.handle)
}

const wrapperElement = React.createElement(
  'div',
  { id: 'container' },
  React.createElement(NameComponent, { name: 'Nick Nish' }),
  React.createElement(HandleComponent, { handle: '@nickjnish' })
)

ReactDOM.render(wrapperElement, document.getElementById('app'))
