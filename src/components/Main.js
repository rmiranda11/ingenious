import { Button } from '@material-ui/core';
import React from 'react';
import "../public/CSS/Home.css"

import PhoneIcon from '@material-ui/icons/Phone';


const Main = () => {
    return (
        <div>
            <div className="row row-main">
                <div className="main-img col-sm-12">
                    <h1 className="home-title">Dream Ingeniously.</h1>
                    <p className="home-subtitle">With the most reliable framing contractor in the entire Chicagoland Area.</p>
                    <Button
                        href="tel:123-456-7890"
                        variant="contained"
                        color="primary"
                        startIcon={<PhoneIcon />}
                        className="cta-btn">Call for a Quote</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="main-intro">
                        <p className="intro-txt">Planning, Building, Succeeding </p>
                        <p className="into-text-2">With over 25 years of experience our carpenters offer an elevated quality of work that is built to last. Using traditional practices that have been proven to work, Ingenious Construction executes the biggest projects efficiently in a timely manner.</p>
                        {/* <p className="home-intro-text">Chicagoland's <h3> #1</h3> Carpentry Contractor</p> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p className="home-second"></p>
                </div>
            </div>
        </div>
    );
};

export default Main;