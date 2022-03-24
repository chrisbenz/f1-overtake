import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import Header from "./Header";
import NavMenu from "./navigation/NavMenu";

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
          <Header />
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{paper: classes.drawerPaper,}}
          >
          <div className={classes.toolbar} />
          <NavMenu />
          </Drawer>
        </div>
      </div>
  );
}