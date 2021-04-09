import React, { Fragment } from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbox from '../../Shred/Navbox/Navbox';
import './Header.css';

const Header = () => {
    return (
  
        <Fragment >
            
         <div className="header-container">
         <Navbox></Navbox>
         <HeaderMain></HeaderMain>
         <BusinessInfo></BusinessInfo>
         </div>
        </Fragment>
     
      
    );
};

export default Header;