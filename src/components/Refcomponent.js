import React, { Component } from 'react'

export class Refcomponent extends Component {
    constructor(props) {
      super(props)

      this.inputref=React.createRef();    // 1st method 

    // 2 method calback
    //  this.cbref=null;
    //  this.cbrefmethod = (element) =>{
    //      this.cbref=element
    //  }

    }

    inputfocus=()=>{
         this.inputref.current.focus();
    }

    componentDidMount(){ 
    //  if(this.cbref){
    //     this.cbref.focus();
    //  }
    //  this.inputref.current.focus()   //1 st method
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputref}/>
        {/* <input type="text" ref={this.cbrefmethod}/> */}
      </div>
    )
  }
}

export default Refcomponent
