import React from 'react';
import { useState } from 'react';
import {Card, Col, Button } from 'react-bootstrap';
import AppointmentForm from '../AppointmentForm/AppointmentForm'

const BookingCard = ({booking, date}) => {
  const [modalIsOpen,setIsOpen] = React.useState(false) ;
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
       
        <Col xs={6} md={4}>
            <Card
    bg='primary'
    text='white'
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header >{booking.subject}</Card.Header>
    <Card.Body>
      <Card.Title>{booking.visitingHour}</Card.Title>
      <Card.Text>
        {booking.totalSpace} Bookings Left
      </Card.Text>
    </Card.Body>
    <Button onClick={openModal} variant="success" className='p-2 m-3'>Book now</Button>
 <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
    </Card>
  </Col>
    );
};

export default BookingCard;