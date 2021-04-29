import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../home/Dashboard.scss';
import { Route, useHistory } from "react-router-dom";
import Userservice from '../services/Userservice';
import NotesandDisplay from "./NotesandDisplay";
import Archive from "../home/Archive";
import Trash from "../home/Trash";
import { Switch} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  appBar: {
    backgroundColor: "rgba(255,255,255,1)",
    color: "#5f6368",
    boxShadow: "inset 0 -1px 0 0 #dadce0",
    WebkitBoxShadow: "inset 0 -1px 0 0 #dadce0",
    padding: "0px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    border: "none"
  },
  drawerOpen: {
    width: drawerWidth,
    top: "63px",
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    border: "none",
    overflowX: "hidden",
    top: "63px",
    width: theme.spacing(7) + 1
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  listitem: {
    // backgroundColor:"#feefc3",
    // borderRadius: "0 25px 25px 0",
    // webkitBorderRadius :"0 25px 25px 0",
    // '&:hover': {
    //   backgroundColor:"#feefc3",
    //   borderRadius: "0 25px 25px 0",
    //   webkitBorderRadius :"0 25px 25px 0",
    // },
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  let history = useHistory();
  let displaynoteResult = [];
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Fundo");

  let iconlist = [
    {
      text: "Notes",
      icon: <EmojiObjectsIcon />
    },
    {
      text: "Reminders",
      icon: <NotificationsNoneIcon />
    },
    {
      text: "Edit labels",
      icon: <EditIcon />
    },
    {
      text: "Archive",
      icon: <SystemUpdateAltIcon />
    },
    {
      text: "Trash",
      icon: <DeleteOutlineIcon />
    }
  ]

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const redirect = (event) => {
    const url = event.text.split(" ").join('')
    if (url === "Notes") {
      history.push('/Dashboard');
    } else if (url === "Reminders") {
      history.push('/Dashboard/Remainder');
    } else if (url === "Editlabels") {
      history.push('/Dashboard/Editlabels');
    } else if (url === "Archive") {
      history.push('/Dashboard/Archive');
    } else if (url === "Trash") {
      history.push('/Dashboard/Trash');
    } else {
      history.push('/Dashboard');
    }
    setTitle(url);
  }





  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <div className="headertitle">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" className="keepimg" width="40" height="40" alt="Keep image" />
            <span className="learn keepspan">{title}</span>
          </div>
          <div className="searchheader">
            <div className="headerinput">
              <SearchIcon className="menuicon" />
              <div className="searchinput">
                <input className="inputbox" />
              </div>
              <CloseIcon className="menuicon closebtn" />
            </div>
          </div>

          <div className="hsetting">
              <RefreshIcon className="menuicon" />
              {/* <ViewStreamIcon className="menuicon" /> */}
              <SettingsIcon className="menuicon" />
          </div>
          <div className="account">
              <AppsIcon className="menuicon" />
              <AccountCircleIcon className="menuicon" />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <List>
          {iconlist.map((index) => (
            <ListItem button key={index.text} className={classes.listitem} onClick={() => redirect(index)} >
              <ListItemIcon >
                {index.icon}
              </ListItemIcon>
              <ListItemText primary={index.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/Dashboard/" component={NotesandDisplay}></Route>
            <Route path="/Dashboard/Archive" component={Archive}></Route>
            <Route path="/Dashboard/Trash" component={Trash} ></Route>
          </Switch>
      </main>
    </div>
  );
}
