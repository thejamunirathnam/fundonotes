import React, { Component } from 'react'

export class Regularcomp extends Component {
  render() {
      console.log("regular compoentn")
    return (
      <div>
        <h1>regular component {this.props.fname}</h1>
      </div>
    )
  }
}

export default Regularcomp
