import React from "react";
import { SignUpForm } from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          minHeight: "59vh",
          paddingLeft: "2vw",
          paddingRight: "2vw",
        }}
      >
        <h1>Sign Up</h1>
        <SignUpForm></SignUpForm>
      </div>
    </>
  );
};

export default SignUpPage;
