import React, { Component } from 'react'
import Memocomp from './Memocomp'
import Purecomp from './Purecomp'
import Regularcomp from './Regularcomp'

export class Parentpurecomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"thejaa"
      }
    }

    componentDidMount(){
        setInterval(()=>{
          this.setState({
              name:"thejaa"
          })
        },5000);
    }
    
  render() {
    console.log("$$$$$$parent component$$$$$$$$")
    return (
      <div>
          <h1>parent compoent</h1>
          <Memocomp fname={this.state.name}/>
        {/* <Regularcomp fname={this.state.name}/>
        <Purecomp fname={this.state.name}/> */}
      </div>
    )
  }
}

export default Parentpurecomp
