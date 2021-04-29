import React, { Component } from 'react'
import Userservice from '../services/Userservice';
import DisplayNotes from '../components/DisplayNotes'
import theme_getnote from '../components/GetcontextNotes'

const axios_service = new Userservice();

export class Trash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.GetTrashNote();
  }

  GetTrashNote = () => {
    const config = {
      body: {},
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('id')
      },
    }
    axios_service.GetTrashNoteapi(config,true).then((result) => {
      console.log(result.data.data.data)
      if (result.status === 200) {
        this.setState({
          notes: result.data.data.data
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <theme_getnote.Provider value={this.GetTrashNote}>
        <DisplayNotes getnote={this.state.notes}/>     
      </theme_getnote.Provider>
    )
  }
}

export default Trash
