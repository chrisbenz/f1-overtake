import React from "react";
import f1Logo from "../images/f1.png"
import styles from "../styles/style.css"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

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

export default function Header() {

    const classes = useStyles();

    return(
        <div>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <img src={f1Logo} alt="F1 Logo" className="logo" style={styles}/>
              <Typography variant="h5" noWrap>
                Overtake
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
    )
}