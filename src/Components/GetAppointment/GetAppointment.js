import React, { useState } from 'react';
import Appointment from '../Home/Appointment/Appointment';
import Navbox from '../Shred/Navbox/Navbox';
import BookAppointment from './BookAppointment/BookAppointment';
import GetAppointmentHeader from './GetAppointmentHeader/GetAppointmentHeader';

const GetAppointment = () => {
    const [selectedDate, setSelectedDate ] = useState(new Date());

    const handleDateChange = date =>{
       setSelectedDate(date);
    }
    return (
        <div>
<section>
<Navbox></Navbox>
<GetAppointmentHeader handleDateChange={handleDateChange}></GetAppointmentHeader>
</section>
<section className='mb-5 pb-5' >
<BookAppointment date={selectedDate}></BookAppointment>
</section>
<section className='mt-5 pt-5'>
<Appointment></Appointment>
</section>
        </div>
    );
};

export default GetAppointment;