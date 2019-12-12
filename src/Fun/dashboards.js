// We can use 3rd party libraries with React.
//
// Google "react X" and you'll often find dozens
// of open-source solutions to help you solve common
// problems like Forms, Datepickers,

import React from 'react'
import ReactDOM from 'react-dom'
import C3Chart from 'react-c3js'
import _ from 'lodash'
import 'c3/c3.css'

const data = {
  columns: [['data2', 50, 20, 10, 40, 15, 25]],
  friends: []
}

class Dashboards extends React.Component {
  constructor() {
    super()

    this.state = {
      data
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(currentState => ({
        data: {
          ...currentState.data,
          columns: [currentState.data.columns[0].concat(_.random(30, 450))]
        }
      }))
    }, 1000)
  }

  render() {
    return <C3Chart data={this.state.data} />
  }
}

ReactDOM.render(<Dashboards />, document.getElementById('app'))
