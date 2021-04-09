import React from 'react';
import {Card, Col } from 'react-bootstrap';


const ServiceDetails = ({service}) => {
    return (
        <Col xs={6} md={4}>
             <Card bg='white'  text='dark' className= ' m-2 mt-4 ' style={{textAlign: 'center' , border: 'none'}}  >

    <Card.Body style={{display: 'grid'}}  >
        <div  className= ' m-2 '>
        <img src={service.img} alt=""/>
        </div>
   <div>
   <Card.Title>{service.name} </Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident dicta dolores eum nemo magni quod soluta recusandae debitis deleniti!
      </Card.Text>
   </div>
    </Card.Body>
  </Card>
  </Col>
    );
};

export default ServiceDetails;