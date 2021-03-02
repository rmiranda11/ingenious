import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import "../public/CSS/Services.css"



const Services = () => {

    const [hover, setHover] = useState(false)

    const toggleHover = () => {
        console.log(hover)
        setHover(!hover) 
    }
    const useStyles = {
        
        color:"black",
        fontSize:"0.95rem",
        width:"7em",
        fontWeight:700,
        border:"solid 1px lightSeagreen",
        borderTopStyle:"none",
        borderBottomStyle:"none",
        ":hover": {
            background:"blue",
        }
    

    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="services-container">
                        <h2 className="services-title">Our Services</h2>
                        <p className="services-sub">100% Excellent Customer Satisfaction</p>
                        <p className="services-intro">Establishing strong foundations is key in both our construction and our relationships. We thrive from having good relations with all of our clients from start to finish and beyond. We thank you for offering us your business and in return let us build you amazing homes and trusting alliances.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="services-btn-group">
                    <ButtonGroup variant="text" className="btn-group" size="large" color="primary"  aria-label="large outlined primary button group">
                        <Button 
                        onClick={toggleHover}
                        style={useStyles}>Framing</Button>
                        <Button style={useStyles}>Decks</Button>
                        <Button style={useStyles}>Porches</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" className="btn-group" size="large" color="primary" aria-label="large outlined primary button group">
                        <Button style={useStyles}>Fences</Button>
                        <Button style={useStyles}> Staircase </Button>
                        <Button style={useStyles}>Additions</Button>
                    </ButtonGroup>
                    </div>
                    <div className="services-main">
                        <h2>What we Do</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;