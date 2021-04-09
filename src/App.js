import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import GetAppointment from './Components/GetAppointment/GetAppointment';
import About from './Components/About/About';
import Review from './Components/Review/Review';
import DentalService from './Components/DentalService/DentalService';
import Blog from './Components/Blog/Blog';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import LearnMore from './Components/LearnMore/LearnMore';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard'
export const UserContext = createContext();


function App() {

  const[loggedInUser, setLoggedInUser] = useState({});

  return (
    <div >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>name: {loggedInUser.name}</p> */}
      <Router>
      

        <Switch>
          
          

          <PrivateRoute path="/getappointment">
           <GetAppointment></GetAppointment>
          
          </PrivateRoute>
          <Route path="/about">
          
          <About></About>
          </Route>
          <Route path="/review">
          <Review></Review>
          
          </Route>
          <Route path="/dentalservice">
          
          <DentalService></DentalService>
          </Route>
          <Route path="/blog">
          
          <Blog></Blog>
          </Route>
          <Route path="/contactus">
          
          <ContactUs></ContactUs>
          </Route>
          <PrivateRoute path="/checkAppointments">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
          
         <Login></Login>
          </Route>
          <Route path="/learnmore">
          
        <LearnMore></LearnMore>
          </Route>

          <Route exact path="/">
           <Home></Home>
          </Route>

        </Switch>

    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
