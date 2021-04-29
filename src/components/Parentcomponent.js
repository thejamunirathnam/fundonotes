import React, { Component } from 'react'
import Childcomponent from './Childcomponent';
import './styles.css'
import style from "./styleapp.module.css"

class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         greeting: "thejaa "
      }
      this.greeting=this.greeting.bind(this);            ///rainaaaa doubt
    }

    greeting(childval){
        alert(`welcome ${this.state.greeting} from ${childval}`);
    }
    
    render() {
        return (
        <div>
            {/* <p className="error">eroorrrr</p>
            <p className={style.success}>sucesss</p> */}
            <Childcomponent greehandler={this.greeting}/>
        </div>
        )
    }
}

export default Parentcomponent
