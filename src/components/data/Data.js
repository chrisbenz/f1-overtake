import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Data(props) {
  const classes = useStyles();

  const [reportType, setreportType] = React.useState('races');

  const handleChange = event => {
    setreportType(event.target.value);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.data.isLoading ? <CircularProgress color="inherit" />
          : 
          <div>
            <Grid item xs={9}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Reports</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={reportType}
                  onChange={handleChange}
                >
                  <MenuItem value="races">Races</MenuItem>
                  <MenuItem value="drivers">Drivers</MenuItem>
                  <MenuItem value="constructors">Constructors</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
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
                    {props.data.raceInfo.map(row => (
                      <TableRow key={row.round}>
                        <TableCell>{row.round}</TableCell>
                        <TableCell>{row.raceName}</TableCell>
                        <TableCell>{row.Circuit.circuitName}</TableCell>
                        <TableCell>{row.Circuit.Location.locality}, {row.Circuit.Location.country}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </div>
        }
      </main>
    </div>
  );
}
