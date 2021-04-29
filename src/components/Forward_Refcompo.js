import React from 'react'


const Forward_Refcompo = React.forwardRef((props,ref) => {
    return (
      <div>
         <input type="text" ref={ref}/>
      </div>
    )
  }
  ) 

export default Forward_Refcompo;