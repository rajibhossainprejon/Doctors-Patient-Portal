import React from 'react';
import {Navbar, Button, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const Navbox = () => {
    return (
        
           

          <Navbar  >

    <Navbar.Brand as={Link} to="/" className='mr-4'> Appers Care </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link  as={Link} to="/shop" className='mr-5' >Home</Nav.Link>
      <Nav.Link  as={Link} to="/review" className='mr-5  '>About</Nav.Link>
      <Nav.Link  as={Link} to="/inventory" className='mr-5 ' >Dental Service</Nav.Link>
      <Nav.Link  as={Link} to="/login" className='mr-5 text-white' >Review</Nav.Link>
      <Nav.Link  as={Link} to="/login" className='mr-5 text-white' >Blog</Nav.Link>
      <Nav.Link  as={Link} to="/login" className='mr-5 text-white' >Contact Us</Nav.Link>
    </Nav>
    
  
    <Button variant="light" className='p-2' > Sign Out </Button>
  </Navbar>
      
    );
};

export default Navbox;