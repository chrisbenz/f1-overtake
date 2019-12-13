import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Link } from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Divider from '@material-ui/core/Divider';
import { styles } from "./styles"

export default function NavMenu() {
    return (
        <div>
            <List>
              <Link style={styles} to="/">
                <ListItem button key="home">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link  style={styles} to="/data">
                <ListItem button key="data">
                  <ListItemIcon><EqualizerIcon /></ListItemIcon>
                    <ListItemText primary="Data" />
                </ListItem>
              </Link>
              <Link  style={styles} to="/about">
                <ListItem button key="about">
                  <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
              </Link>
            </List>
            <Divider />
        </div>
    )
}