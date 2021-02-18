import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "../public/CSS/Home.css"

const Nav = () => {
    return (
        <div>
            <AppBar position="static" style={{backgroundColor:"black"}}>
            <Toolbar >
                <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                {/* <img src=""></img> */}
                </Typography>
            </Toolbar>
            </AppBar>
            <div>
                {/* <a className="phone" href="tel:773-576-3223">Call Us: (773)576-3223</a> */}
            </div>
        </div>
    );
};

export default Nav;

