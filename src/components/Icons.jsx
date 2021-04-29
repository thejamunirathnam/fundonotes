import React, { Fragment, useContext } from 'react'
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PaletteIcon from '@material-ui/icons/Palette';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Userservice from '../services/Userservice';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import theme_getnote from './GetcontextNotes'   // importing context

const axios_service = new Userservice();

const useStyles = makeStyles(() => ({
    menuitems: {
        width: "41px",
        height: "39px",
        padding: "3px",
        display: "inline-flex"
    }
  }));

const options = [
    'Delete Note',
    'Add label',
    'Add Drawing',
    'Make a copy',
    'Show checkboxes',
    'Copy to fundoo',
];
const colorpalete = [
        '#ffffff',
        '#f28b82',
        '#fbbc04',
        '#fff475',
        '#ccff90',
        '#cbf0f8',
        '#a7ffeb',
        '#aecbfa',
        '#d7aefb',
        '#fdcfe8',
        '#e6c9a8',
        '#e8eaed'
];

// color code array , map

const ITEM_HEIGHT = 48;

export default function Icons(props) {
    const classes = useStyles();
    const getNote_context = useContext(theme_getnote);     // calling and displaying notes

    const [anchorEl, setAnchorEl] = React.useState(null);   // more items opening 
    const [anchorPl, setAnchorPl] = React.useState(null);   //palette coloring

   
    //  opening more items 
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        event.stopPropagation();
        deleteNote();
        setAnchorEl(null);
    };

    // for opening palete
    const openpalete = Boolean(anchorPl);
    const handleClickpalete = (event) => {
        event.stopPropagation();
        setAnchorPl(event.currentTarget);
    };
    const handleClosepalete = (event) => {
        event.stopPropagation();
        colorNote(rgbToHex(event.target.style.backgroundColor));  //changing rgb to hexa value
        setAnchorPl(null);
    };

    const deleteNote = () => {
        let dataa = {
            "isDeleted": true,
            "noteIdList": [props.displayResult.id]
        };
        axios_service.DeleteNoteapi(dataa).then((result) => {
            console.log(result)
            if (result.status === 200) {
                getNote_context();
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const rgbToHex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
  

    const colorNote = (colorcode) => {
        let dataa = {
            "color": colorcode,
            "noteIdList": [props.displayResult.id]
        };
        axios_service.ColorNoteapi(dataa).then((result) => {
            console.log(result)
            if (result.status === 200) {
                getNote_context();
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleArchive = (event) => {
        event.stopPropagation();
        let dataa = {
            "isArchived": true,
            "noteIdList": [props.displayResult.id]
        };
        axios_service.ArchiveNoteapi(dataa).then((result) => {
            console.log(result)
            if (result.status === 200) {
                getNote_context();
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Fragment>
            <div className="iconlist" >
                <AddAlertIcon className="nicon " />
                <PersonAddIcon className="nicon" />
                <PaletteIcon className="nicon" onClick={handleClickpalete} />
                <Menu
                    id="long-menu"
                    anchorEl={anchorPl}
                    keepMounted
                    open={openpalete}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 5.5,
                            width: '22ch',
                        },
                    }}
                >
                    {colorpalete.map((option, index) => (
                        <MenuItem onClick={handleClosepalete} key={index} className={classes.menuitems}>
                            <div className="applycolor" style={{'backgroundColor': option}}></div>
                        </MenuItem>
                    ))}
                </Menu>
                <InsertPhotoIcon className="nicon" />
                <SystemUpdateAltIcon className="nicon" onClick={handleArchive} />
                <MoreVertIcon className="nicon" onClick={handleClick} />
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    // onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 5.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </Fragment>
    )
}
