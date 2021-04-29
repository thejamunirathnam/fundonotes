import React, { useEffect, useState, useContext } from 'react';
import '../home/Dashboard.scss';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Userservice from '../services/Userservice';
import Grid from '@material-ui/core/Grid';
import Icons from './Icons';
import $ from 'jquery'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ContentEditable from 'react-contenteditable'
import theme_getnote from './GetcontextNotes'   // importing context

const axios_service = new Userservice();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  grid: {
    width: "270px",
    //  height: "450px",
    minHeight: "60px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    border: "1px solid #e0e0e0",
    boxShadow: "none",
    borderRadius: "8px",
    color: theme.palette.text.secondary,
    '&:hover': {
      boxShadow: "2px 2px 5px 2px #e0e0e0",
    },

  },
}));



export default function DisplayNotes(props) {

  const getNote_context = useContext(theme_getnote);     // calling and displaying notes

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, settitle] = React.useState('');    // updating title
  const [desc, setdesc] = React.useState('');      // updating descriptio
  const [tid, settitleid] = React.useState('');      // updating title id


  const handleClickOpen = (result, index) => {           /// for opening dialog box
    settitle(result.title);
    setdesc(result.description);
    settitleid(result.id);
    setOpen(true);
  };



  const handleClose = () => {              // for closng dialog box 
    updatenote();
    setOpen(false);
  };


  const updatenote = () => {
    const dataa = {
      "title": title,
      "description": desc,
      "noteId": tid
    }
    const confignote = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id')
      },
    }
    axios_service.UpdateNoteapi(dataa, confignote).then((result) => {
      if (result.status === 200) {
        getNote_context();
        // props.GetNote();
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleTitle = (event) => {
    settitle(event.target.value);
  }
  const handleDesc = (event) => {
    setdesc(event.target.value);
  }

  const appendicon = (event) => {
    $(".notes").css('display', 'none');
    $(".notesicon").removeClass('showicon');
    $("#" + event).addClass('showicon')
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        {
          props.getnote.slice(0).reverse().map((result, index) =>
            <Grid xs={12} sm={6} md={3} item className={classes.grid} key={index}>
              <Paper className={classes.paper} style={result.color !== '' ? { 'backgroundColor': result.color } : {}}>
                <div className="hoveringg" onMouseOver={() => appendicon(index)} onClick={() => handleClickOpen(result, index)} >
                  <div className="display displaytitle"> {result.title} </div>
                  <div className="display"> {result.description}</div>
                  <div className="noteiconlist">
                    <div className="notesicon" id={index} >
                      <Icons displayResult={result} />
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          )}

      </Grid>

      {/* model boxx */}
      <Dialog open={open} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <ContentEditable className="dialogdesc" html={title} disabled={false} onChange={handleTitle} />
        </DialogTitle>
        <DialogContent>
          <ContentEditable className="dialogdesc" html={desc} disabled={false} onChange={handleDesc} />
        </DialogContent>
        <DialogActions>

        <div style={{minHeight:"40px"}}>
          <div className="showicon" id="titleid" >
            <Icons />
            <div className="closeicon">
              <Button onClick={handleClose}>
                close
              </Button>
            </div>
          </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
