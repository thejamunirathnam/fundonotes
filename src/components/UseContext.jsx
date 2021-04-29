import React, { createContext, useContext } from 'react'

let array={
        name:"theja sree",
        age:"56" 
}
const mycontext = createContext();
export default function UseContext( ) {
    
    return (
        <mycontext.Provider value={array}>
            <div>
             <Child1/>
            </div>
        </mycontext.Provider>
    )
}


 function Child1() {
  return (
    <div>
      <Child2/>
    </div>
  )
}

function Child2() {
    const dumarray=useContext(mycontext);
    console.log(dumarray);
  return (
    
    <div>
      <h1>hello context {dumarray.name}</h1>
    </div>
  )
}


