
import './App.css';
import React, {useState ,useEffect} from 'react'
import LoadingIndicator from './components/LoadingIndicator'

function App() {
  
  const [ isloading, setIsLoading] = useState(true);

  if(isloading){
    return <LoadingIndicator width="150px" height="150px" color="black" /> 
  }
}


export default App;
