import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import f1Logo from "../images/f1.png";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Divider from '@material-ui/core/Divider';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'black'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function AppContainer() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <img src={f1Logo} alt="F1 Logo" className="logo"/>
              <Typography variant="h6" noWrap>
                Overtake
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          <div className={classes.toolbar} />
            <List>
              <Link style={{textDecoration:'none', color:'grey'}} to="/">
                <ListItem button key="home">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                      </ListItem>
              </Link>
              <Link  style={{textDecoration:'none', color:'grey'}} to="/data">
                <ListItem button key="data">
                  <ListItemIcon><EqualizerIcon /></ListItemIcon>
                    <ListItemText primary="Data" />
                      </ListItem>
              </Link>
              <Link  style={{textDecoration:'none', color:'grey'}} to="/about">
                <ListItem button key="about">
                  <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary="About" />
                      </ListItem>
              </Link>
            </List>
            <Divider />
          </Drawer>
        </div>
      </div>
  );
}