import React from 'react';
import Services from '../Home/Services/Services';
import Navbox from '../Shred/Navbox/Navbox';

const DentalService = () => {
    return (
        <div className='bg-dark mt-0' style={{ height: '1200px', width: '100%'}} >
            <Navbox></Navbox>
    <Services></Services>
        </div>
    );
};

export default DentalService;