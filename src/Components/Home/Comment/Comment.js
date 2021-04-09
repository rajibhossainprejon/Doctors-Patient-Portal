import React from 'react';
import {Card, Image,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Comment = ({client}) => {
    return (
      <Col xs={6} md={4} className='m-0'>
        <Link to='/review'>


        <Card bg='light' style={{  textDecoration: 'none' }} className='shadow mb-2 mt-4 bg-white rounded' >
        
        <Card.Body  >
         
         <div>
         <Card.Text style={{height:'100px', width: '100%', textDecoration: 'none' }}>
           {client.comment}
          </Card.Text>
         </div>
     <div style={{display: 'grid',  gridTemplateColumns: 'auto auto'}} className='p-4 ml-0'>
         
         <div >
         <Image src={client.img} style={{height: '50px', width: '50px'}} roundedCircle />
         </div>
     <div className='ml-2 mb-0 pl-2 text-primary'>
     <h6 className=' mb-0'>{client.name}</h6>
     <small className='text-danger mt-0'>{client.location}</small>
     </div>
     </div>
        </Card.Body>
        
      </Card>
      </Link>
    </Col>
    );
};

export default Comment;