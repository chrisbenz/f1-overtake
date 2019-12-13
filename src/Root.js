import React from "react";
import AppContainer from "./components/AppContainer";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import DataContainer from "./components/DataContainer";
import { makeStyles } from '@material-ui/core/styles';
import Glossary from "./components/Glossary";

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
                        <Route path="/data" component={DataContainer}/>
                        <Route path="/about" component={About}/>
                        <Route path="/glossary" component={Glossary}/>
                    </Switch>
                </div>   
            </div>
        </Router>
    )

}
