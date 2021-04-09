import React, { useContext, useState  } from 'react';
import {Form, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './firebase.login';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';





const Login = () => {

  const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
  const location = useLocation();

  

  const { from } = location.state || { from: { pathname: "/" } };


  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

  }
const handleGoogleSignIn= () =>{
  console.log('clicked');
   const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
    const credential = result.credential;

     const token = credential.accessToken;
    
    const {displayName, email} = result.user;
    
    const signedInUser = {name: displayName, email}
    setLoggedInUser(signedInUser);
    
    storeAuthToken();
        history.replace(from)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
    .then(function (idToken) {
     
   sessionStorage.setitem('token', idToken);
    }).catch(function (error) {
      // Handle error
    });

  }


}
    return (
    <div className='align-middle ml-5 pl-5 mt-5' >
<Button onClick={handleGoogleSignIn} variant="warning" size="lg">
            Sign in with Google 
  </Button>
  <br/>
  <Link to="/">
           <Button variant="danger" size="lg" className='mt-2'>
     Back to Home Page
  </Button>
  </Link>
        </div>
    );
};

export default Login;