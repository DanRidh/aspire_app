import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Tutors from './components/Tutors';
import { SignUpForm } from "./components/SignUpForm";


import {Redirect, Route} from 'react-router-dom'
import TutorProfilePage from './pages/TutorProfilePage'

function App() {
    // loggedIn state
    const [loggedIn,setLoggedIn]=useState(
      localStorage.getItem("jwt") !== null
    )
  
  return (
    <>
      <Navbar loggedIn={loggedIn}/>
      <div className="SignUpForm">
        <SignUpForm
          formName="Welcome! "
          formDescription="Sign Up to continue."
        />
      </div>
      <br/>
      <div>
      <Tutors/>
      </div>
      <TutorProfilePage/>
      
    </>
  );
}



export default App;
