import React, { Component } from 'react'
import DisplayNotes from '../components/DisplayNotes'
import Headercomponent from '../components/HeaderandNav'
import Notes from '../components/Notes'



export class Home extends Component {
  render() {
    return (
      <div>
        <Headercomponent title="Fundoo"/>
      </div>
    )
  }
}

export default Home
