import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';


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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Welcome to the F1 Overtake app! Here you can find updated stats, news, and info on all 
          things Formula 1!
        </Typography>
      </main>
    </div>
  );
}