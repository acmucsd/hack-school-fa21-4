import React, { Component } from 'react'

class ClassCounter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('Component mounted')
  }

  componentDidUpdate() {
    console.log('component updated')
  }

  render() {

    const decrement = () => {
      this.setState({ count: this.state.count - 1})
    }

    const increment = () => {
      this.setState({ count: this.state.count + 1 })
    }

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={decrement}>{this.props.decrementLabel}</button>
        <button onClick={increment}>{this.props.incrementLabel}</button>
      </div>
    )
  }
}

export default ClassCounter