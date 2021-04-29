import react, { useEffect, useState } from 'react';
// import useState from 'react';


 const One =()=>{
const [count,setCount]=useState(0)   
    const king=()=>{
        setCount(count+1)

    }
    useEffect(()=>{
        console.log("vanakkam react ");
    },[])
     return (
         <>
          <h1>murugan</h1>
          <button onClick={king}>click me{count}  </button>
         </>
     )
 }
    //useContext

 //p==>c==>n==>sm=>smsmsms=>


 export default One;
