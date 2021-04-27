import React from 'react';

import axios from 'axios';

import "../public/CSS/Contact.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";

import { faUser, faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';


library.add(faUser, faPhone, faEnvelope, faMapMarker);

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "ingeniouscarpentry.com/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                console.log(response)
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: "", phone: "", email: "", message: "" })
    }

    render() {
        return (
            <div className="container">
                <h1 className="contact-header">CONTACT US</h1>
                <span className="accent"></span>
                <h5 className="contact-txt">Leave us a message and we will get back to you as soon as we can!</h5>
                <div className="row">
                <div className="col-sm-6 col-lg-6">
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" className="form-control" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" name="message" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <Button type="submit" name="submit" size="lg" className="btn btn-primary">Submit</Button>
                    </form>
                </div>
                <div className="col-sm-6 col-lg-6">
                    <ul className="contact-list">

                        <li className="list-item"><i><span className="contact-text place">
                            <FontAwesomeIcon icon="map-marker" className="icon" />Chicago, IL</span></i></li>

                        <li className="list-item"><i><span className="contact-text phone"><a href="tel:1-773-576-3223" title="Give me a call">
                            <FontAwesomeIcon icon="phone" className="icon" />(773)576-3223 </a></span></i></li>

                        <li className="list-item"><i><span className="contact-text contact-email gmail"><a href="mailto:pedrozavala2005@yahoo.com" title="Send me an email">
                            <FontAwesomeIcon icon="envelope" className="icon" />
                 pedrozavala2005@yahoo.com</a></span></i></li>
                    </ul>
                    <img className="logo" src="https://i.ibb.co/0D06zWB/Ingenious-Logo.jpg" ></img>
                </div>
                </div>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default Contact;