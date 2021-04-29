import React, { Component  } from 'react'
import DisplayNotes from './DisplayNotes'
import Notes from './Notes'
import Userservice from '../services/Userservice';
import theme_getnote from './GetcontextNotes'

const axios_service = new Userservice();


export class NotesandDisplay extends Component {    
   
    constructor(props) {
        super(props)
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
         this.GetNote();
    }

    GetNote = () => {
        const config = {
            body: {},
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('id')
            },
        }
        axios_service.GetNote(config, true).then((result) => {
            console.log(result.data.data.data)
            if (result.status === 200) {
                this.filterData(result.data.data.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    filterData = (data) => {
        let adults = data.filter(note => {
             if ((note.isArchived!==true) && (note.isDeleted!==true)) return note
            } );
        this.setState({
            notes: adults
        })
    }

    render() {
        return (
            <theme_getnote.Provider value={this.GetNote}>
                <Notes />
                <DisplayNotes getnote={this.state.notes}/>
            </theme_getnote.Provider>
        )
    }
}

export default NotesandDisplay
