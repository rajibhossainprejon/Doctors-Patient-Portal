import React from 'react';
import {Table } from 'react-bootstrap';


const AppointmentDataTable = ({appointments}) => {
    return (
        // <table className="table table-borderless">
        //     <thead>
        //         <tr>
        //         <th className="text-secondary text-left" scope="col">Sr No</th>
        //         <th className="text-secondary" scope="col">Name</th>
        //         <th className="text-secondary" scope="col">Gender</th>
        //         <th className="text-secondary" scope="col">Age</th>
        //         <th className="text-secondary" scope="col">Weight</th>
        //         <th className="text-secondary" scope="col">Phone</th>
        //         <th className="text-secondary" scope="col">Email</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //           appointments.map((appointment, index) => 
                        
        //             <tr>
        //                 <td>{index + 1}</td>
        //                 <td>{appointment.name}</td>
        //                 <td>{appointment.gender}</td>
        //                 <td>{appointment.age}</td>
        //                 <td>{appointment.weight}KG</td>
        //                 <td>{appointment.phone}</td>
        //                 <td>{appointment.email}</td>
        //             </tr>
        //             )
        //         }
        //     </tbody>
        // </table>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>First Name</th>
      <th>Phone No.</th>
      <th>E-mail</th>
    </tr>
  </thead>
  <tbody>
  {
             appointments.map((appointment, index) => 
                        
               <tr>
  
      <td>{appointment.name}</td>
      <td>{appointment.phone}</td>
      <td>{appointment.email}</td>
    </tr>
             )}
    
  </tbody>
</Table>
    );
};

export default AppointmentDataTable;