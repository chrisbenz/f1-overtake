import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          This application uses the Ergast Developer API to pull and
          display data about F1.
        </Typography>
        <Link color="primary" href="https://ergast.com/mrd/">
          https://ergast.com/mrd/
        </Link>
      </main>
    </div>
  );
}