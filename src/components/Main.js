import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count :0
    }
  }
  incrementation(){
    this.setState({
        count:this.state.count+1
    },
        console.log("console value",this.state.count)
  )
    //  this.state.count= this.state.count+1;
    //   console.log(this.state.count);
    // this.setState(()=>({
      
    //     count: prevState.count+1     
    //       }))
   }

  fiveincrementation=()=>{
      this.incrementation();
      this.incrementation();
      this.incrementation();
      this.incrementation();
      this.incrementation();
      this.setState({
        count:this.state.count
      })
  }

  render() {
    return (
    <div>
      <div>
       count {this.state.count}
      </div>
      <button onClick={this.fiveincrementation}> increment the count</button>
    </div>
    )
  }
}



export default Main




//crud or todo
