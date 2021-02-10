import {
  Container,
  Typography,
  makeStyles,
  Avatar,
  Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ClassCard from "../containers/ClassCard";

const StudentProfilePage = () => {
  const useStyles = makeStyles(() => ({
    firstContainer: {
      marginTop: "80px",
      width: "100vw",
    },
    avatar: {
      height: "200px",
      width: "200px",
    },
    profile: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "30%",
    },
    classSection: {
      width: "70%",
      marginLeft: "20px",
    },
    classList: {
      padding: "20px",
    },
  }));
  const classes = useStyles();

  let student_id = useParams().id;

  //useStates
  const [age, updateAge] = useState(0);
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [isFemale, updateIsFemale] = useState(false);
  const [profilePhoto, updateProfilePhoto] = useState("");
  const [rating, updateRating] = useState("5.0");
  const [username, updateUsername] = useState("");

  // const [classList, updateClassList] = useState([]);

  // retrieve student info
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://aspire-api2021.herokuapp.com/api/v1/students/${student_id}`,
    })
      .then((res) => {
        console.log(res);
        updateAge(res.data.age);
        updateFirstName(res.data.first_name);
        updateLastName(res.data.last_name);
        updateIsFemale(res.data.is_female);
        updateProfilePhoto(res.data.profile_image);
        updateRating(parseFloat(res.data.rating).toFixed(1));
        updateUsername(res.data.username);
      })
      .catch((err) => {
        console.error(err);
      });

    // retrieve student's classes
    // axios
  }, [student_id]);

  return (
    <Box display="flex" className={classes.firstContainer}>
      <Box className={classes.profile}>
        <Avatar
          className={classes.avatar}
          alt={`${firstName} ${lastName}`}
          src={profilePhoto}
        />
        <Typography variant="h4">
          {firstName} {lastName}
        </Typography>
        <Typography>Student</Typography>
        <Typography component="legend">{rating}/5.0</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography>Age : {age} </Typography>
        <Typography>Gender : {isFemale ? "Female" : "Male"}</Typography>

        <Typography>@{username}</Typography>
      </Box>
      <Box className={classes.classSection}>
        <Typography variant="h4" fontStyle="fontWeightMedium">
          {firstName}'s upcoming classes:
        </Typography>

        <Container className={classes.classList}>
          {/* For each class in tutor_session, display:*/}
          {/* class placeholder image */}
          {/* class title, links to viewClass page*/}
          {/* class subject, optional: link to search page for this subject */}
          {/* tutor profile pic */}
          {/* tutor full name, linke to tutor profile page */}
          {/* date */}
          {/* number of seats left */}
          {/* join button */}
          {/* share button, links to viewClass page */}

          {/* WIP */}
          <ClassCard username={username} profilePhoto={profilePhoto} />
          {/* End loop */}
        </Container>
      </Box>
    </Box>
  );
};

export default StudentProfilePage;
