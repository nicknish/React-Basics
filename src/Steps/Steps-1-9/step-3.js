import React from 'react'
import ReactDOM from 'react-dom'

// Use dynamic data -- imagine this came from the server!
var name = 'Nick Nish'

var headerElement = React.createElement('h1', { id: 'title' }, name)

ReactDOM.render(headerElement, document.getElementById('app'))
