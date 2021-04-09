import React from 'react';
import Navbox from '../Shred/Navbox/Navbox';


const ContactUs = () => {
    return (
        <div className=' bg-dark' style={{ height: '1000px'}} >
        <Navbox></Navbox>
        <form id="contact-form" className='m-5 p-5 text-white' method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    );
};

export default ContactUs;