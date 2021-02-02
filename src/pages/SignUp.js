import React from 'react'
import { SignUpForm } from "./components/SignUpForm";

const SignUp=()=>{


    return(
        <div className="SignUpForm">
        <SignUpForm
          formName="Welcome! "
          formDescription="Sign Up to continue."
        />
      </div>
    )
}

export default SignUp