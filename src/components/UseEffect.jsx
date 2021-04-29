import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    let [count,setcount]= useState(0);


    const increment = () => {
        setcount(count+1);
    }

    useEffect(()=>{
        console.log("useefect called")
    },[])

  return (
    <div>
      <h4>use effect concept {count}</h4>

      <button onClick={increment}>increment</button>
    </div>
  )
}
