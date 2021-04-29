import React, { Component } from 'react'
import UpdatedComponent from './Higherorder_comp'

 class Hoc_click extends Component {
    
  render() {
      const {count,incrementcount} = this.props
    return (
      <div>
        <button onClick={incrementcount}>clicked {count} times </button>
      </div>
    )
  }
}

export default UpdatedComponent(Hoc_click,5)
