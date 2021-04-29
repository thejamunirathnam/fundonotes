import React, { Component } from 'react'
import MountinglifeB from './MountinglifeB'

class MountinglifeA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"thejaa"
    }
    console.log("Life cyle AA Construr")
  }

  static getDerivedStateFromProps(){
   console.log("Life cyle AA  getDerivedStateFromProps")
   return null;
  }


  componentDidMount(){
      console.log("Life cyle AA compount didmount")
  }
  

  render() {

    console.log("Life cyle AA  render")
    return (
      <div>
        life cycle A
        <MountinglifeB/>
      </div>
    )
  }
}

export default MountinglifeA
