// KEY LESSON:
//
// The most basic building-block of React is the React element.
// We create objects with `React.createElement()`.
// A React element is an *object* representation of a DOM element.

import React from 'react'

var headerElement = React.createElement('h1', { id: 'title' }, 'Nick Nish')

// But how do we render the element?
