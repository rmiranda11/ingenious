import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import DraftsIcon from '@material-ui/icons/Drafts';
import Link from "@material-ui/core/Link"

import "../public/CSS/Home.css"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
    backgroundColor:"rgb(42, 54, 65)",

  },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
  title: {
    flexGrow: 1,
  },

});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem>
            <HomeIcon fontSize="large"/>
            <Link clasName="nav-link" href="./" >
                Home
            </Link>
          </ListItem>
          <ListItem>
            <WorkIcon fontSize="large" />
            <Link clasName="nav-link" href="./services" >
                Services
            </Link>      
            </ListItem>
          <ListItem>
            <DraftsIcon fontSize="large"/>
            <Link clasName="nav-link" href="./contact" >
                Contact
            </Link>      
            </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
    <AppBar position="static">
        <Toolbar style={{background:" rgb(42, 54, 65)"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon  />
          </IconButton>
          <p className="ingenious">INGENIOUS CONSTRUCTION</p>
          <Button onClick={toggleDrawer(anchor, true)}></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Toolbar>
      </AppBar>
        </React.Fragment>
      ))}
    </div>
  );
}
