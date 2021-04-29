import React from 'react'

function Memocomp(props) {
    console.log("memo ocmponetn")
  return (
    <div>
      <h1>Memo component {props.fname}</h1>
    </div>
  )
}

export default React.memo(Memocomp)
