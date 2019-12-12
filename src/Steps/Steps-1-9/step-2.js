// KEY LESSON:
//
// The ReactDOM JavaScript library uses the browser DOM to
// render React elements. The main React library is isomorphic,
// meaning it can be used in different "environments", such as a
// browser (ReactDOM) or native app (React Native).

import React from 'react'
import ReactDOM from 'react-dom'

var headerElement = React.createElement('h1', { id: 'title' }, 'Nick Nish')

ReactDOM.render(headerElement, document.getElementById('app'))
