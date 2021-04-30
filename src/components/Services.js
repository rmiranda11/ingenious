import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { makeStyles } from '@material-ui/core/styles';

import "../public/CSS/Services.css"

const single = (
    <div className="single card">
        <h1 className="card-title">Single</h1>
        <img src="https://www.homestratosphere.com/wp-content/uploads/2018/02/single-family-detached-home.jpg"className="card-pic"></img>
        <p className="card-txt">Single Family (Detached) Homes are by far the most popular. Around 70% of families in the US live in Single Family Homes. We will build your single family home exactly the way you want it. </p>
    </div>
)
const townhome = (
    <div className="townhome card">
        <h1 className="card-title">Townhome</h1>
        <img src="https://www.homestratosphere.com/wp-content/uploads/2018/02/townhome-row-nyc-hs.jpg"className="card-pic"></img>
        <p className="card-txt">Townhomes typically share 1 or 2 walls and can rise up to 2-3 stories high. They are popular in urban areas where large property sizes can cost a fortune. They are a single family home except they are attached to another.</p>    </div>
)
const bungalow = (
    <div className="porches card">
        <h1 className="card-title">Bungalow</h1>
        <img src="https://assets.agentfire3.com/uploads/sites/43/2019/05/2019-05-07-Chicago-Bungalow.jpg"className="card-pic"></img>
        <p className="card-txt">The word Bungalow is derived from the Indian term "Bengali House". They are smaller cozier homes with large porches desgined to keep property costs down. They are great investments and popular in large cities. </p>    </div>
)
const ranch = (
    <div className="stairs card">
        <h1 className="card-title">Ranch Style</h1>
        <img src="https://www.homestratosphere.com/wp-content/uploads/2018/02/ranch-style-home-hs.jpg"className="card-pic"></img>
        <p className="card-txt">A ranch style home is a large single-story home with a wide rectangular design. They are based from Spanish haciendas. They are very popular in open areas with big lots of land. </p>    </div>
)
const multi = (
    <div className="multi card">
        <h1 className="card-title">Multi-Family Home</h1>
        <img src="https://www.homestratosphere.com/wp-content/uploads/2018/02/multi-family-house-hs.jpg"className="card-pic"></img>
        <p className="card-txt">Multi-family homes have two or more housing units. It's detached from any other properties and are a great investments because of its inventive use of space.</p>    </div>
)
const mansion = (
    <div className="fences card">
        <h1 className="card-title">Mansion</h1>
        <img src="https://www.homestratosphere.com/wp-content/uploads/2018/02/mansion-mill-neck-manor.jpg"className="card-pic"></img>
        <p className="card-txt">Mansions are typically no less than 12,500 sq ft in size but can range to incredible sizes. They are typically built on large lots in suburban areas.  Build your dream house with us!</p></div>
)

const Services = () => {

    const [buttons, setButtons] = useState("single")


    const handleClick = value => {
        setButtons(value)
    };


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
                <div className="col-sm-12 btn-group-bg">
                    <div className="services-btn-group">

                    <ButtonGroup className="btn-group" size="lg" color="primary">
                        <Button className="service-btn" variant="light" onClick={()=> handleClick("single")} size="lg"
                        >Single</Button>

                        <Button className="service-btn" variant="light" onClick={() => handleClick("townhome")} size="lg"
                        >Townhome</Button>

                        <Button className="service-btn" variant="light" onClick={() => handleClick("bungalow")} size="lg"
                        >Bungalow</Button>
                    </ButtonGroup>

                    <ButtonGroup className="btn-group" size="large" color="primary">
                        <Button className="service-btn" variant="light" onClick={()=> handleClick("ranch")} size="lg"
                        >Ranch</Button>

                        <Button className="service-btn" variant="light" onClick={() => handleClick("multi")} size="lg" 
                        >Multi</Button>
                        
                        <Button className="service-btn" variant="light" onClick={() => handleClick("mansion")} size="lg"
                        >Mansion</Button>
                    </ButtonGroup>
                    </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700" className="services-main">
                            {buttons === "single" && single}
                            {buttons === "townhome" && townhome}
                            {buttons === "bungalow" && bungalow}
                            {buttons === "ranch" && ranch}
                            {buttons === "multi" && multi}
                            {buttons === "mansion" && mansion}
                        </div>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Services;