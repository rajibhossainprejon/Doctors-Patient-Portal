import React, { Fragment } from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbox from '../Navbox/Navbox';
import './Header.css';

const Header = () => {
    return (
  
        <Fragment >
            
         <div className="header-container">
         <Navbox></Navbox>
         <HeaderMain></HeaderMain>
         </div>
        </Fragment>
     
      
    );
};

export default Header;