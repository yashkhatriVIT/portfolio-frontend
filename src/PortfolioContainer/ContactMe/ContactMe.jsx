import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './ContactMe.css'
function ContactMe() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [btnText, setBtnText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formDetails);
        setBtnText("Sending...")
        let response = await fetch("https://mail-service-zvfh.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setBtnText("Send");
        let result = await response.json();
        console.log(result);
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({success: true, message: 'Message Sent Successfully'})
        }
        else{
            setStatus({success: false, message: 'Something went wrong please try again later'})
        }
    }
  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src="/images/contact-img.svg" alt="Contact Us" />
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder = 'First Name' onChange = {(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder = 'Last Name' onChange = {(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder = 'Email' onChange = {(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder = 'Phone' onChange = {(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col>
                                <textarea rows={6} value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type='Submit'><span>{btnText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ContactMe