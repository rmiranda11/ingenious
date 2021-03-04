import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { makeStyles } from '@material-ui/core/styles';

import "../public/CSS/Services.css"

const framing = (
    <div className="framing card">
        <h1 className="card-title">Framing</h1>
        <img src="https://i.ibb.co/VSjPCgh/OLYMPUS-DIGITAL-CAMERA.jpg"className="card-pic"></img>
        <p className="card-txt">Building to last is what we take pride in. We accommodate to a big range of job requirements. You pick the design and we'll execute it for you. Using either balloon or platform styles of framing we will accomplish the task.</p>
    </div>
)
const decks = (
    <div className="decks card">
        <h2>Decks business</h2>
    </div>
)
const porches = (
    <div className="frameCard">
        <h2>Porches business</h2>
    </div>
)
const staircase = (
    <div className="frameCard">
        <h2>Porches business</h2>
    </div>
)
const additions = (
    <div className="frameCard">
        <h2>Porches business</h2>
    </div>
)
const fences = (
    <div className="frameCard">
        <h2>Porches business</h2>
    </div>
)

const Services = () => {

    const [buttons, setButtons] = useState("framing")


    const handleClick = value => {
        setButtons(value)
    };

    const useStyles = {
        
        color:"white",
        fontSize:"0.95rem",
        width:"7em",
        height:"4em",
        fontWeight:700,
    }



    return (
        <div className="custom-container container-md">
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

                    <ButtonGroup className="btn-group" size="large" color="primary">
                        <Button onClick={()=> handleClick("framing")} 
                        style={useStyles}>Framing</Button>

                        <Button onClick={() => handleClick("decks")} 
                        style={useStyles}>Decks</Button>

                        <Button onClick={() => handleClick("porches")} 
                        style={useStyles}>Porches</Button>
                    </ButtonGroup>

                    <ButtonGroup className="btn-group" size="large" color="primary">
                        <Button onClick={()=> handleClick("staircase")} 
                        style={useStyles}>Staircases</Button>

                        <Button onClick={() => handleClick("additions")} 
                        style={useStyles}>Additions</Button>

                        <Button onClick={() => handleClick("fences")} 
                        style={useStyles}>Fences</Button>
                    </ButtonGroup>
               
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="services-main">
                            {buttons === "framing" && framing}
                            {buttons === "decks" && decks}
                            {buttons === "porches" && porches}
                            {buttons === "staircase" && staircase}
                            {buttons === "additions" && additions}
                            {buttons === "fences" && fences}

                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;