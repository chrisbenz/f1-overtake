import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

export default function Data(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Typography component="h2" variant="h6" color="inherit" gutterBottom>
            Seasonal Data
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Round</TableCell>
                <TableCell>Race Name</TableCell>
                <TableCell>Circuit</TableCell>
                <TableCell>Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map(row => (
                <TableRow key={row.round}>
                  <TableCell>{row.round}</TableCell>
                  <TableCell>{row.raceName}</TableCell>
                  <TableCell>{row.Circuit.circuitName}</TableCell>
                  <TableCell>{row.Circuit.Location.locality}, {row.Circuit.Location.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    
      </main>
    </div>
  );
}