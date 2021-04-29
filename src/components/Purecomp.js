import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
  render() {
      console.log("pure component")
    return (
      <div>
        <h1>pure component  {this.props.fname}</h1>
      </div>
    )
  }
}

export default Purecomp
