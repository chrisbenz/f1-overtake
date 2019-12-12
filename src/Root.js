import React from "react";
import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import Data from "./components/Data";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import f1Logo from "./images/f1.png";
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

export default function Root() {

    const classes = useStyles();

    return (
        <Router>
            <div>
                <div className={classes.root}>
                    <AppContainer/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/data" component={Data}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>   
            </div>
        </Router>
    )

}
