import React from 'react';
import Doctor from '../../../images/5790-removebg.png';
import {Row, Col,Container, Image, Button } from 'react-bootstrap';
import './Appointment.css';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <Container className="appointment-container">
        <Row className="mh-25 w-auto p-3" style={{ height: '5%'}} >
 <Col xs={12} md={6}>
 <Image style={{ height: '100%', width: '100%'}} src={Doctor}  fluid />
     
   </Col>
   <Col xs={12} md={6} className='pt-5 text-light' style={{ height: '100%', width: '100%'}}  >
   <h2 className='text-warning' >Appointment</h2>
   <h1 >
      Make Your Appointment
     </h1>
     <p >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum rerum debitis dolore, quod est asperiores omnis, obcaecati enim perspiciatis, praesentium laudantium expedita porro dicta corrupti nisi et sed voluptas!
     </p>
    <Link to='/learnmore'>
    <Button variant="warning" size="md">
 Learn More
   </Button>
    </Link>
   </Col>
  
 </Row>
 </Container>
    );
};

export default Appointment;