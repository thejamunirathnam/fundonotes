import React, { Component } from 'react'
import UpdatedComponent from "./Higherorder_comp"

 class Hoc_hover extends Component {
  render() {
      const {count, incrementcount} = this.props
    return (
      <div>
        <button onMouseOver = {incrementcount}>Mouse hover {count} tmesssssss</button>
      </div>
    )
  }
}

export default UpdatedComponent(Hoc_hover, 10)
