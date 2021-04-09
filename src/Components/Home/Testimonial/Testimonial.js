import React from 'react';

import Musfiq from '../../../images/musfiq.png';
import Antora from '../../../images/antora2.png';
import Joy from '../../../images/joy2.png';
import Comment from '../Comment/Comment';
import {Row, Col,Container } from 'react-bootstrap';


const Testimonial = () => {
    const clientsData =[
        {
            name: 'Coolboy Musfiq',
            img: Musfiq,
            comment: 'Dr. Rajib is very good. He vanished my Headache just like magic',
            location: 'Barcelona'
        },
        {
            name: 'Sanjida Antora',
            img: Antora,
            comment: 'Dr. Shanto is not a good Doctor.',
            location: 'Krino Sagor'
        },
        {
            name: 'Shaporan Joy',
            img: Joy,
            comment: 'The Female Doctors are very charming.',
            location: 'Vasanchor'
        }
    ]
    return (

        <Container className=  'mt-5'>
 <div  className= ' m-2 mt-4' >
 <h4 className="text-primary">Testimonial</h4>
 <h1>Reviews of the patients</h1>
 </div>
  <Row >
    
   
  {
                clientsData.map(client => <Comment client={client}></Comment> )
            }

  </Row>

</Container>
    
    );
};

export default Testimonial;