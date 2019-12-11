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
