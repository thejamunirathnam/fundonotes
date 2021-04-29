import React, { Component, forwardRef } from 'react'
import Forward_Refcompo from './Forward_Refcompo';

export class Forward_ref_parent extends Component {
    constructor(props) {
      super(props)
      this.refinput= React.createRef();
    }

    inputfocus = () =>{
        this.refinput.current.focus();
    }
    
    render() {
        return (
        <div>
            <Forward_Refcompo ref={this.refinput}/> 
            <button onClick={this.inputfocus}>submit me</button>
        </div>
        )
    }
}

export default Forward_ref_parent
