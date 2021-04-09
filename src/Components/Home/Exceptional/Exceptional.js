import React from 'react';
import Mask from '../../../images/Mask Group 3.png'
import {Row, Col,Container, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Exceptional = () => {
    return (
        <Container >
         <Row className="mh-25 w-auto p-3" style={{ height: '5%'}} >
  <Col xs={12} md={6}>
  <Image style={{ height: '70%', width: '100%'}} src={Mask}  fluid />
      
    </Col>
    <Col xs={12} md={6} className='pt-5' style={{ height: '100%', width: '100%'}}  >
    <h1>
         Exceptional Details, On Your Terms
      </h1>
      <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum rerum debitis dolore, quod est asperiores omnis, obcaecati enim perspiciatis, praesentium laudantium expedita porro dicta corrupti nisi et sed voluptas!
      </p>
     <Link to='/learnmore'>
     <Button variant="primary" size="md">
  Learn More
    </Button>
     </Link>
    </Col>
   
  </Row>
  </Container>
       
    );
};

export default Exceptional;