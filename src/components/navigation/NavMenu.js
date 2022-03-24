import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Divider from '@mui/material/Divider';
import MenuBook from '@mui/icons-material/MenuBook';
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
        <Link style={styles} to="/data">
          <ListItem button key="data">
            <ListItemIcon><EqualizerIcon /></ListItemIcon>
            <ListItemText primary="Data" />
          </ListItem>
        </Link>
        <Link style={styles} to="/glossary">
          <ListItem button key="glossary">
            <ListItemIcon><MenuBook /></ListItemIcon>
            <ListItemText primary="Glossary" />
          </ListItem>
        </Link>
        <Link style={styles} to="/about">
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