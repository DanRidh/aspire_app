import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CategoryIcon from "@material-ui/icons/Category";
import GroupIcon from "@material-ui/icons/Group";
import EventIcon from "@material-ui/icons/Event";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import image from "../images/8600.jpg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    color: "black",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
  },
  tutor: {
    display: "flex",
    padding: theme.spacing(3),
    alignContent: "center",
    justifyContent: "start",
    alignItems: "center",
    fontFamily: "'Montserrat', sans-serif",
  },
}));

const ViewTutorSessionPage = ({ id }) => {
  const classes = useStyles();
  const tutorSessionId = id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [rating, setRating] = useState(5);
  const [isFemale, setIsFemale] = useState(false);
  const [price, setPrice] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://aspire-api2021.herokuapp.com/api/v1/tutor_sessions/${tutorSessionId}`
      )
      .then((res) => {
        console.log(res);
      });

    // Hard coded to test display
    // Fetch data from databse and setState to all
    setTitle("English Level 1");
    setDescription("Some descripiton about the class here");
    setFirstName("Firstname");
    setLastName("Lastname");
    setIsFemale(true);
    setAge("36");
    setRating(4.5);
    setPrice("80");
    console.log(price);
    const image_path = "tutor/mrslockheart1/profile-pic/amongus.jpg";
    setProfilePhoto(
      `https://aspire-app2021.s3-ap-southeast-1.amazonaws.com/${image_path}`
    );
  }, [tutorSessionId]);

  return (
    <>
      <div
        style={{
          marginTop: "15vh",
          marginLeft: "5vw",
          marginRight: "5vw",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.7em" }}
        >
          {title}
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <div className={classes.tutor}>
                <Avatar alt={`${firstName} ${lastName}`} src={profilePhoto} />
                <Box
                  fontSize="h6.fontSize"
                  ml={3}
                  style={{ fontWeight: "bold" }}
                >
                  {firstName} {lastName}
                </Box>
                <Box
                  component="fieldset"
                  m={0}
                  p={0}
                  ml={3}
                  mr={1}
                  borderColor="transparent"
                >
                  <Rating
                    name="read-only"
                    precision={0.1}
                    value={parseFloat(rating)}
                    readOnly
                  />
                </Box>
                <Box ml={1} mr={2}>
                  Age : {age}{" "}
                </Box>
                <Box>Gender : {isFemale ? "Female" : "Male"}</Box>
              </div>
              <img
                alt={image}
                src={image}
                style={{ height: "50vh", width: "80%", objectFit: "contain" }}
              ></img>
              <div style={{ textAlign: "left", marginLeft: "2vw" }}>
                <h1>Class Info</h1>
                <h3>{description}</h3>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#D9E4EC" }}
            >
              <Box
                fontSize="h6.fontSize"
                ml={2}
                mb={4}
                style={{ fontWeight: "bold" }}
              >
                {title}
              </Box>
              <div style={{ display: "flex", marginLeft: "2vw" }}>
                <CategoryIcon></CategoryIcon>
                <Box fontSize="h6.fontSize" ml={3} mb={2}>
                  {/* Category */}
                  Language
                </Box>
              </div>
              <div style={{ display: "flex", marginLeft: "2vw" }}>
                <EventIcon></EventIcon>
                <Box fontSize="h6.fontSize" ml={3} mb={2}>
                  {/* Date */}
                  32 February 2021
                </Box>
              </div>
              <div style={{ display: "flex", marginLeft: "2vw" }}>
                <AccessTimeIcon></AccessTimeIcon>
                <Box fontSize="h6.fontSize" ml={3} mb={2}>
                  {/* Start Time */}
                  10:00 am
                </Box>
              </div>
              <div style={{ display: "flex", marginLeft: "2vw" }}>
                <HourglassEmptyIcon></HourglassEmptyIcon>
                <Box fontSize="h6.fontSize" ml={3} mb={2}>
                  {/* Duration */}2 hours
                </Box>
              </div>
              <div style={{ display: "flex", marginLeft: "2vw" }}>
                <AttachMoneyIcon></AttachMoneyIcon>
                <Box fontSize="h6.fontSize" ml={3} mb={2}>
                  {/* Price */}
                  RM80 per hour
                </Box>
              </div>
              <div style={{ display: "flex", marginLeft: "2vw" }}>
                <GroupIcon></GroupIcon>
                <Box fontSize="h6.fontSize" ml={3} mb={4}>
                  Max Student Capacity : 5
                </Box>
              </div>
              <Button
                onClick={() => {
                  alert("clicked");
                }}
                variant="contained"
                style={{
                  backgroundColor: "#4dabf5",
                  color: "black",
                  marginTop: "15px",
                  borderRadius: "30px",
                  padding: "10px",
                  width: "12vw",
                }}
              >
                ENROLL
              </Button>
            </Paper>
            <div style={{ height: "5vh" }}></div>
            <Paper
              className={classes.paper}
              style={{ backgroundColor: "#D9E4EC" }}
            >
              <Box fontSize="h6.fontSize" ml={3} style={{ fontWeight: "bold" }}>
                Special Requirements?
              </Box>
              <Button
                onClick={() => {
                  alert("clicked");
                }}
                variant="contained"
                style={{
                  backgroundColor: "#4dabf5",
                  color: "black",
                  marginTop: "15px",
                  borderRadius: "30px",
                  padding: "10px",
                  width: "12vw",
                }}
              >
                CONTACT TUTOR
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ViewTutorSessionPage;
