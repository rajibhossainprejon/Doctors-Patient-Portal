import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {Row, Col,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'



const BusinessInfo = () => {

    const infosData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Dhaka, Dhanmondi',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call Us Now',
            description: '01817823638',
            icon: faPhone,
            background: 'primary'
        }
        
    ]


    return (
      
      
       <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row >
    
   
    {
            infosData.map(info => <InfoCard info={info}></InfoCard>    )
        
        }

  </Row>

</Container>
     
    );
};

export default BusinessInfo;