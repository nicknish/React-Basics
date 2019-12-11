import React from 'react'
import ReactDOM from 'react-dom'

var name = 'Nick Nish'
var handle = '@nickjnish'

var headerElement = React.createElement('h1', { id: 'title' }, name)
// How do we add a second element?
var handleElement = React.createElement('h3', {}, handle)

ReactDOM.render(headerElement, document.getElementById('app'))
