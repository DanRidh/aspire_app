import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Tutors from './components/Tutors';
import { SignUpForm } from "./components/SignUpForm";


import {Redirect, Route} from 'react-router-dom'
import TutorProfilePage from './pages/TutorProfilePage'

function App() {
  return (
    <>
      <Navbar/>
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
