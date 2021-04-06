import { Button } from '@material-ui/core';
import React from 'react';
import "../public/CSS/Home.css"
import "../public/images/trio.png"

import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts'


const Main = () => {
    return (
        <div>
            <div className="row row-main">
                <div className="main-img col-sm-12">
                    <h1 className="home-title">Dream Ingeniously.</h1>
                    <p className="home-subtitle">With the most reliable framing contractor in the entire Chicagoland Area.</p>
                    <Button
                        href="tel:773-576-3223"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<PhoneIcon />}
                        className="cta-btn">Call for a Quote</Button> <br />
                         <Button
                        href="./contact"                        
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<DraftsIcon />}
                        className="cta-btn">Message Us</Button>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-12">
                    <div className="main-intro">
                        <p className="intro-txt">Planning, Building, & Succeeding </p><span className="accent-bar-2"></span>
                        <img className="intro-trio" src="https://i.ibb.co/phHBp03/main-img.png" ></img>
                        <p className="intro-txt-2">With over 25 years of experience our carpenters offer an elevated quality of work that is built to last. Using traditional practices that have been proven to work, Ingenious Construction executes the biggest projects efficiently in a timely manner.</p>
                    </div>
                </div>
            </div>
            <div className="main-gradient"></div>
            <div className="row">
                <div className="main-content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200">
                    <img className="col-lg-6 main-second" src="https://i.ibb.co/LJSGGzc/men2.png"></img>
                    <div className="col-lg-6 main-second-over">
                        <p className="main-second-txt"><a>Precision</a></p><span className="accent-bar"></span>
                        <p className="main-second-txt2">We aim for perfect and precise measurements and consistency to match exactly what's on the blueprint. Our team leaders constantly audit measurements and will approve the best absolute work. Our crew never takes shortcuts.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="main-content reverse" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <img className="col-lg-6 main-third" src="https://i.ibb.co/mGqTYxB/woman.png"></img>
                
                    <div className="col-lg-6 main-third-over">
                        <p className="main-third-title"><a>Reliability</a></p><span className="accent-bar accent-bar-mastery"></span>
                        <p className="main-third-txt">Our goal is to deliver fast and clean work. We ensure to stay on track with our deadlines and will keep you updated along the way. Always aiming for the exact target date and time. </p>
                    </div>
                </div>  
            </div>
            <div className="row">
                <div className="main-content" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <img className="col-lg-6 main-fourth" src="https://i.ibb.co/kqKP6yj/man.png"></img>
                
                    <div className="col-lg-6 main-fourth-over">
                        <p className="main-fourth-title"><a>Experience</a></p><span className="accent-bar"></span>
                        <p className="main-fourth-txt">With hundreds of framing projects under our belts we know all the tricks of the trade. We want you to feel at ease knowing your project is in good hands.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="main-content reverse" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                <img className="col-lg-6 main-fifth" src="https://i.ibb.co/dp5CLpj/man2.png"></img>
                

                <div className="col-sm-12">
                    <div className="main-fifth-over" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                        <p className="main-fifth-title"><a>Mastery</a></p><span className="accent-bar accent-bar-mastery accent-bar-mastery-pad"></span>
                        <p className="main-fifth-txt">Our biggest core belief is delivering the absolute best quality. Not only do we acheive that but we supersede all of your expectations.</p>
                    </div>
                </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-sm-12">
                    
                </div>
            </div> */}
        </div>
    );
};

export default Main;