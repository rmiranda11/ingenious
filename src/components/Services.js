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
        <h1 className="card-title">Decks</h1>
        <img src="https://i.pinimg.com/originals/1d/34/2b/1d342bd44c30a84078c9db032dce6126.jpg"className="card-pic"></img>
        <p className="card-txt">Harvest the warm season with barbeques on your own deck. Custom built decks designed precisely to fit your space.  </p>    </div>
)
const porches = (
    <div className="porches card">
        <h1 className="card-title">Porches</h1>
        <img src="https://www.beracahhomes.com/sites/default/files/Wraparound2.jpg"className="card-pic"></img>
        <p className="card-txt">Wrap-around porches are in right now. The best long lasting porches are made with oak or cedar. Call us to design your porch today! </p>    </div>
)
const staircase = (
    <div className="stairs card">
        <h1 className="card-title">Staircase</h1>
        <img src="https://cdn.nar.realtor/sites/default/files/styles/inline_paragraph_image/public/blog_migration_files/2/2018/11/LJS-Pic-Circular-1.jpg?itok=lnPNcTu3"className="card-pic"></img>
        <p className="card-txt">We build beautiful staircases anywhere in the house in any style. Outdoors or indoors, we will build you the stairway to heaven.</p>    </div>
)
const additions = (
    <div className="additions card">
        <h1 className="card-title">Additions</h1>
        <img src="https://images.ctfassets.net/79nimht05j33/6lOnGRf7aWzOYtcOC5jKOc/c0cbc1127bf87d5ef4ca6c86a0fe9623/homeadditions.jpg?w=1500&q=70"className="card-pic"></img>
        <p className="card-txt">Enhance your home into the dream house you've always wanted with an amazing addition. Expand your property and raise the value all at once. </p>    </div>
)
const fences = (
    <div className="fences card">
        <h1 className="card-title">Fences</h1>
        <img src="https://www.prolinefencecompany.com/wp-content/uploads/2016/04/fence.jpg"className="card-pic"></img>
        <p className="card-txt">Encapsulate your backyard for privacy. Aesthetically designed fences will surround your property to make it feel more intimate.</p></div>
)

const Services = () => {

    const [buttons, setButtons] = useState("framing")


    const handleClick = value => {
        setButtons(value)
    };

    const useStyles = {
        
        // color:"black",
        // fontSize:"1.3rem",
        // width:"6em",
        // height:"3em",
        // fontWeight:700,
        // backgroundColor:"whitesmoke",
        // textAlign:"center",
        // verticalAlign: "middle",

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
                <div className="col-sm-12 btn-group-bg">
                    <div className="services-btn-group">

                    <ButtonGroup className="btn-group" size="lg" color="primary">
                        <Button className="service-btn" variant="light" onClick={()=> handleClick("framing")} size="lg"
                        >Framing</Button>

                        <Button className="service-btn" variant="light" onClick={() => handleClick("decks")} size="lg"
                        >Decks</Button>

                        <Button className="service-btn" variant="light" onClick={() => handleClick("porches")} size="lg"
                        >Porches</Button>
                    </ButtonGroup>

                    <ButtonGroup className="btn-group" size="large" color="primary">
                        <Button className="service-btn" variant="dark" onClick={()=> handleClick("staircase")} size="lg"
                        >Staircase</Button>

                        <Button className="service-btn" variant="dark" onClick={() => handleClick("fences")} size="lg" 
                        >Fences</Button>
                        
                        <Button className="service-btn" variant="dark" onClick={() => handleClick("additions")} size="lg"
                        >Additions</Button>
                    </ButtonGroup>
                    </div>

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
    );
};

export default Services;