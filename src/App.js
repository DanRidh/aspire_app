import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Tutors from "./components/Tutors";

import { Redirect, Route } from "react-router-dom";
import TutorProfilePage from "./pages/TutorProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/Landingpage";

function App() {
  // loggedIn state
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );

  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
