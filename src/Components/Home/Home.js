import React, { Fragment } from 'react';
import Appointment from './Appointment/Appointment';
import Exceptional from './Exceptional/Exceptional';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
       <Fragment className='mb-5' >
           
           <Header></Header>
   <Services></Services>
   <Exceptional></Exceptional>
   <Appointment></Appointment>
   <Testimonial></Testimonial>
       </Fragment>
    );
};

export default Home;