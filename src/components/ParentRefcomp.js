import React, { Component } from 'react'
import Refcomponent from './Refcomponent'

class ParentRefcomp extends Component {

    constructor(props) {
      super(props)
    
      this.ComponentRef= React.createRef();
    }
    

    focushandler=() =>{
        console.log(this.ComponentRef)
       this.ComponentRef.current.inputfocus();
    }

    render() {
        return (
        <div>
            <Refcomponent ref={this.ComponentRef}/>
            <button onClick={this.focushandler}>focus the input </button>
        </div>
        )
    }
}

export default ParentRefcomp
