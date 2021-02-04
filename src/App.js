import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Tutors from "./components/Tutors";

import { Redirect, Route } from "react-router-dom";
import TutorProfilePage from "./pages/TutorProfilePage";
import MyProfilePage from "./pages/MyProfilePage";
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/Landingpage";
import StudentProfilePage from "./pages/StudentProfilePage";
import Footer from "./components/Footer";

function App() {
  // loggedIn state
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );

  return (
    <>
      <Navbar></Navbar>
      <LandingPage></LandingPage>

      {/* <Navbar loggedIn={loggedIn} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/profile">
        {!loggedIn ? <Redirect to="/" /> : <MyProfilePage />}
      </Route>
      <Route path="/tutor/:id" component={TutorProfilePage} />
      <Route path="student/:id" component={StudentProfilePage} /> */}
      <Footer></Footer>
    </>
  );
}

export default App;
