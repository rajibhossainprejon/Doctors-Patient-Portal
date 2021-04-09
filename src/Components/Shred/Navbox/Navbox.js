import React, { useContext } from 'react';
import {Navbar, Button, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { UserContext } from '../../../App'

const Navbox = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
          <Navbar bg="primary" variant="dark" >

    <Navbar.Brand as={Link} to="/" className='mr-4'> Appers Care </Navbar.Brand>
 
    <Nav className="ml-auto">
     
      <Nav.Link  as={Link} to="/about" className='mr-5  '>About</Nav.Link>
      <Nav.Link  as={Link} to="/dentalservice" className='mr-5 ' >Dental Service</Nav.Link>
      <Nav.Link  as={Link} to="/review" className='mr-5 text-white' >Review</Nav.Link>
      
      <Nav.Link  as={Link} to="/checkAppointments" className='mr-5 text-white' >Check Appointments</Nav.Link>
      <Nav.Link  as={Link} to="/contactus" className='mr-5 text-white' >Contact Us</Nav.Link>
    </Nav>
    
  
    <Link to='/login' >
    {!loggedInUser.name && <Button variant="light" className='p-2' > Sign In </Button>}
    </Link>
    {loggedInUser.name && <Button variant="light" className='p-2' > {loggedInUser.name} </Button>}
    {loggedInUser.name && <Button onClick={() => setLoggedInUser({}) } variant="danger" style={{margin: '10px 40px'}} > Sign Out </Button>}
    
  </Navbar>
      
    );
};

export default Navbox;