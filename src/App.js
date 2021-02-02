import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Tutors from './components/Tutors';


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
      <br/>
      <div>
      <Tutors/>
      </div>
      <TutorProfilePage/>
      
    </>
  );
}



export default App;
