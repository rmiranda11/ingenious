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
                        <img className="intro-trio" src="https://i.ibb.co/Xs7Jt1r/Trio.png"></img>
                        <p className="intro-txt">Planning Building Succeeding </p>
                        <p className="intro-txt-2">With over 25 years of experience our carpenters offer an elevated quality of work that is built to last. Using traditional practices that have been proven to work, Ingenious Construction executes the biggest projects efficiently in a timely manner.</p>
                    </div>
                </div>
            </div>
            <div className="main-gradient"></div>
            <div className="row">
                <div className="col-sm-12">
                    <img className=" main-second" src="https://i.ibb.co/LJSGGzc/men2.png"></img>
                    <div className="main-second-over">
                        <p className="main-second-txt"><u>Precision</u></p>
                        <p className="main-second-txt2">We aim for perfect measurements. You will get exactly what's on the blueprint. Our crew never takes shortcuts.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <img className="main-third" src="https://i.ibb.co/mGqTYxB/woman.png"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="main-third-over">
                        <p className="main-third-title"><u>Reliability</u></p>
                        <p className="main-third-txt">Our team works swiftly and safely. We make sure our work is complete at the exact target date and time.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <img className="main-fourth" src="https://i.ibb.co/kqKP6yj/man.png"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="main-fourth-over">
                        <p className="main-fourth-title"><u>Experience</u></p>
                        <p className="main-fourth-txt">With hundreds of framing projects under our belts we know all the tricks of the trade. We want you to feel at ease knowing your project is in good hands.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <img className="main-fifth" src="https://i.ibb.co/dp5CLpj/man2.png"></img>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="main-fifth-over">
                        <p className="main-fifth-title"><u>Mastery</u></p>
                        <p className="main-fifth-txt">Our biggest core belief is delivering the absolute best quality. Not only do we acheive that but we supersede all of your expectations.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    
                </div>
            </div>
        </div>
    );
};

export default Main;