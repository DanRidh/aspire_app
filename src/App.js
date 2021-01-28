import './App.css';
import Navbar from './components/Navbar';
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
    </>
  );
}

export default App;
