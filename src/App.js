import './App.css';
import React, {useState ,useEffect} from 'react'
import LoadingIndicator from './components/LoadingIndicator'
import Navbar from './components/Navbar';
import Tutors from './components/Tutors';
import { SignUpForm } from "./components/SignUpForm";
import Navbar from './components/Navbar';

function App() {
  
  const [ isloading, setIsLoading] = useState(true);

  /** 
  if(isloading){
    return <LoadingIndicator width="150px" height="150px" color="black" /> 
  }
  */ //is broken, perma loading if running


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
      
    </>
  );
}
}



export default App;
