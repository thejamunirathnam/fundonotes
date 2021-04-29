import React from 'react'

export default function Childcomponent(props) {
  return (
    <div>
      {/* <p className="error">eroorrrrchild</p>
      <p className="success">sucesss child</p> */}
      <button onClick={()=>props.greehandler("sree")}>click me </button>
    </div>
  )
}
