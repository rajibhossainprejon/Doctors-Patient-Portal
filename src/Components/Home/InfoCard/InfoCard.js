import React from 'react';
import {Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const InfoCard = ({info}) => {
    return (
        <Col xs={6} md={4}>
             <Card bg={info.background}  text='light' className='m-2 mt-4'  >

    <Card.Body style={{display: 'grid',  gridTemplateColumns: 'auto auto', gridGap: '1px'}}>
        <div>
        <FontAwesomeIcon className="display-4" icon={info.icon} />
        </div>
   <div>
   <Card.Title>{info.title} </Card.Title>
      <Card.Text>
       {info.description}
      </Card.Text>
   </div>
    </Card.Body>
  </Card>
  </Col>
    );
};

export default InfoCard;