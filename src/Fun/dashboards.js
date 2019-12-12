import React from 'react'
import ReactDOM from 'react-dom'
import C3Chart from 'react-c3js'
import _ from 'lodash'
import 'c3/c3.css'

const data = {
  columns: [['data2', 50, 20, 10, 40, 15, 25]]
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
      let { data } = this.state

      data.columns[0].push(_.random(30, 450))
      //   data.columns[1].push(_.random(30, 450))
      this.setState({
        data
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <C3Chart data={this.state.data} />
      </div>
    )
  }
}

ReactDOM.render(<Dashboards />, document.getElementById('app'))
