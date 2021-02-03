import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';


import {Redirect, Route} from 'react-router-dom'
import TutorProfilePage from './pages/TutorProfilePage'
import MyProfilePage from './pages/MyProfilePage'
import Homepage from './pages/Homepage'
import StudentProfilePage from './pages/StudentProfilePage';

function App() {
    // loggedIn state
    const [loggedIn,setLoggedIn]=useState(
      localStorage.getItem("jwt") !== null
    )
  
  return (
    <>
      <Navbar loggedIn={loggedIn}/>
      <Route exact path ="/" component={Homepage} />
      <Route exact path="/profile">
        {!loggedIn? <Redirect to ="/" /> : <MyProfilePage />}
      </Route>
      <Route path="/tutor/:id" component ={TutorProfilePage}/>
      <Route path="student/:id" component = {StudentProfilePage} />
    </>
  );
}



export default App;
