import React, {useContext} from 'react'
import $ from 'jquery'
import Icons from './Icons';
import Userservice from '../services/Userservice';
import Button from '@material-ui/core/Button';
import theme_getnote from './GetcontextNotes'


const axios_service = new Userservice();

export default function Notes(props) {

    const getNote_context = useContext(theme_getnote);

    const addnote = () => {
        let dataa = {
            "title": $("#notetitle").html(),
            "description": $("#notecont").html()
        };
        const confignote = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('id')
            },
        }
        $(".notes").css('display', 'none');
        $(".notesicon").css('display', 'none');
        axios_service.AddNoteapi(dataa, confignote).then((result) => {
            $("#notetitle").empty();
            $("#notecont").empty();
            getNote_context();
            // props.Getnote();

        }).catch((error) => {
            console.log(error);
        })
    }

    const notes = () => {
        $(".notesicon").removeClass('showicon');
        $(".notes").css('display', 'inline-flex');
        $("#titleid").addClass('showicon')
    }

    return (
        <>
            <div className="mainnote">
                <div className="notetitle editable" id="notetitle" contentEditable="true" data-placeholder="Title" onClick={notes}>
                </div>
                <div className="notes notetitle editable" id="notecont" contentEditable="true" data-placeholder="Take a note...">
                </div>
                <div className="noteiconlist">
                <div className="notesicon" id="titleid" >
                    <Icons />
                    <div className="closeicon">
                        <Button onClick={addnote}>
                            close
                        </Button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
