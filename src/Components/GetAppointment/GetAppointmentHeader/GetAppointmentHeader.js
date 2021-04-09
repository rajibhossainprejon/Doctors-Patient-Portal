import React from 'react';
import {Row, Col, Container,Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const GetAppointmentHeader = ({handleDateChange}) => {
      
    return (
<div class="p-3 mb-2 bg-secondary text-white">
            <Container>
  
  <Row className="h-25 d-inline-block d-flex justify-content-center ">
  <Col xs={6} md={4} className='p-5'>
      <h4>
        Set Your Appointment
      </h4>
      <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
    </Col>
    <Col xs={12} md={8} >
      
      <Image src={chair} fluid />
    </Col>
   
  </Row>
  </Container>
        </div>
    );
};

export default GetAppointmentHeader;