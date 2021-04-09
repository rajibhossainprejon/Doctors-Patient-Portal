import React from 'react';
import Fluoride from '../../../images/floride.png';
import Cavity from '../../../images/cavity.png';
import White from '../../../images/white.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import {Row,Container } from 'react-bootstrap';


const Services = () => {
    const serviceData =[
        {
            name: 'Fluoride Treatment',
            img: Fluoride
        },
        {
            name: 'Cavity Filling',
            img: Cavity
        },
        {
            name: 'Teeth Whitening',
            img: White
        }
    ]
    return (
        <Container className= ' mt-2'>
 <div style={{textAlign: 'center'}}  className= ' m-2 mt-4' >
 <h4 className="text-primary">Our Sevices</h4>
 <h1>Services We Provide</h1>
 </div>
  <Row >
    
   
    {
             serviceData.map(service =>  <ServiceDetails service={service} ></ServiceDetails>  )
        
        }

  </Row>

</Container>
    );
};

export default Services;