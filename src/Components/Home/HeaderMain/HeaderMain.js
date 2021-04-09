import React from 'react';
import {Row, Col, Container,Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <div>
            <Container>
  
  <Row className="h-25 d-inline-block d-flex justify-content-center ">
  <Col xs={6} md={4} className='p-5'>
      <h1>
          Your New Smile Starts Here
      </h1>
      <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum rerum debitis dolore, quod est asperiores omnis, obcaecati enim perspiciatis, praesentium laudantium expedita porro dicta corrupti nisi et sed voluptas!
      </p>
<Link to='/getappointment'>
<Button variant="primary" size="md">
   Get Appointment
    </Button>
</Link>
    </Col>
    <Col xs={12} md={8} >
      
      <Image src={chair} fluid />
    </Col>
   
  </Row>
  </Container>
        </div>
    );
};

export default HeaderMain;