import React from 'react';
import Testimonial from '../Home/Testimonial/Testimonial';
import Navbox from '../Shred/Navbox/Navbox';

const Review = () => {
    return (
        <div  className='bg-dark mt-0' style={{ height: '1200px', width: '100%'}} >
            <Navbox></Navbox>
        <Testimonial></Testimonial>
        </div>
    );
};

export default Review;