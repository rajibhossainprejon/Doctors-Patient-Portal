import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbox from '../../Shred/Navbox/Navbox';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])
console.log(appointments);
    return (
        <section>
            <Navbox></Navbox>
            <div style={containerStyle} className="container-fluid row">
            
                <div className="col-md-6 d-flex justify-content-center mt-5" style={{ marginLeft: '25%' }}  >
                <Calendar
                
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-6 mt-5" style={{ marginLeft: '26%' }}>
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;