import React, { Component } from 'react'

class MountinglifeB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"sreee"
    }
    console.log("Life cyle BB Construr")
  }

  static getDerivedStateFromProps(){
   console.log("Life cyle BB  getDerivedStateFromProps")
   return null;
  }


  componentDidMount(){
      console.log("Life cyle BB compount didmount")
  }
  

  render() {

    console.log("Life cyle BB  render")
    return (
      <div>
        life cycle B
      </div>
    )
  }
}

export default MountinglifeB
