import './App.css';
import Navbar from './components/Navbar';
import Tutors from './components/Tutors';
import { SignUpForm } from "./components/SignUpForm";




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

export default App;
