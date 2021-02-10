import "./App.css";
import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Tutors from "./components/Tutors";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';

import Homepage from "./pages/Homepage";
import LandingPage from "./pages/Landingpage";
import MyProfilePage from "./pages/MyProfilePage";
import TutorProfilePage from "./pages/TutorProfilePage";
import StudentProfilePage from "./pages/StudentProfilePage";
import TutorSessionsPage from "./pages/ViewTutorSessionPage";
import ViewTutorSessionPage from "./pages/ViewTutorSessionPage";
import CreateNewTutorSessionPage from "./pages/CreateNewTutorSessionPage";

function App() {
  // loggedIn state
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") !== null
  );

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <ToastContainer/>

      <Route exact path="/" component={LandingPage} />

      <Route exact path="/home">
        {!loggedIn ? <Redirect to="/" /> : <Homepage />}
      </Route>

      <Route exact path="/profile">
        {!loggedIn ? <Redirect to="/" /> : <MyProfilePage />}
      </Route>
      <Route path="/tutor/:id" component={TutorProfilePage} />
      <Route path="/student/:id" component={StudentProfilePage} />

      <Route
        path="/create-new-class"
        component={CreateNewTutorSessionPage}
      ></Route>

      {/* <ViewTutorSessionPage tutorSessionId="Pass in tutor session id here"></ViewTutorSessionPage> */}

      {/* <TutorProfilePage></TutorProfilePage> */}
      <Footer></Footer>
    </>
  );
}

export default App;
