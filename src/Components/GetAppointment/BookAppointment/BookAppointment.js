import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import {Container, Row, Col } from 'react-bootstrap';

const bookAppointmentData= [
    {
id:1,
subject:'Dentist',
visitingHour:'6.00 pm - 9.00 pm',
totalSpace:60
    },
    {   
        id:2,
        subject:'Teeth Cleaning',
        visitingHour:'5.00pm - 8.00pm',
        totalSpace: 60
        

    },
    {
        id:3,
        subject:'Cosmetic Teeth',
        visitingHour:'4.00pm - 10.00pm',
        totalSpace:60
        
    }
];

const BookAppointment = ({date}) => {
    console.log(date);
    return (
      <div className="mt-4" >
            <h1 className="text-center text-success" >Available Appointments on {date.toDateString()}</h1>
            <Container>
  
<Row   className="m-4">
    
     {
         bookAppointmentData.map(booking => <BookingCard booking={booking} key={booking.id} date={date}  ></BookingCard>)
     }
   
  </Row>

 
</Container>
        </div>
    );
};

export default BookAppointment;