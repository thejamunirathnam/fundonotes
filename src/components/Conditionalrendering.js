import React, { Component } from 'react'

class Conditionalrendering extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isloggedin:false
    }
  }
  
  render() {

    return (this.state.isloggedin &&  <div>theja sree</div> )
     
    //  return( this.state.isloggedin ? <div>theja sree</div> : <div>bridgelabz</div>)



    //   let message;
    //   if(this.state.isloggedin){
    //     message=<div>theja sree</div>
    //   }else{
    //     message=<div>bridgelabz</div>
    //   }
    // return <div>{message}</div>




    //   if(this.state.isloggedin){
    //     return (
    //         <div>
    //           theja sree
    //         </div>
    //         ) 
    //   }else{
    //     return (
    //         <div>
    //           bridgelabz sree
    //         </div>
    //         ) 
    //   }
    

  }
}

export default Conditionalrendering
