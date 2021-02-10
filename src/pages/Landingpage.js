import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import howItWorks from "../images/how-it-works.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  marginAutoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  marginAutoItem: {
    margin: "auto",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [popUpTextState, setPopUpTextState] = useState(false);

  return (
    <>
      {/* START JUMBOTRON */}
      <div
        className={classes.marginAutoContainer}
        style={{
          backgroundColor: "#E1EFEE",
          height: "480px",
        }}
      >
        <div className={classes.marginAutoItem}>
          <h1
            style={{
              color: "#0ac5a9",
              padding: "0",
              margin: "0",
              letterSpacing: "0.1em",
              fontSize: "50px",
            }}
          >
            ASPIRE
          </h1>
          <h5
            style={{
              color: "#698480",
              padding: "0",
              margin: "0",
              marginTop: "5px",
              lineHeight: "2",
              fontSize: "20px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Teaching and learning made easier for you.
          </h5>
          <Button
            onClick={() => {
              setPopUpTextState(!popUpTextState);
            }}
            variant="contained"
            style={{
              backgroundColor: "#FA1654",
              color: "white",
              marginTop: "50px",
              borderRadius: "30px",
              padding: "10px",
              width: "12vw",
            }}
          >
            START FREE
          </Button>
          {popUpTextState ? (
            <Typography
              variant="caption"
              style={{ display: "block", marginTop: "10px" }}
            >
              Welcome aboard! Click the register/sign up button at the top to
              get started.
            </Typography>
          ) : null}
        </div>
      </div>
      {/* END JUMBOTRON */}
      {/* START MID SECTION */}
      <div
        className={classes.marginAutoContainer}
        style={{
          backgroundColor: "#fff",
          height: "300px",
        }}
      >
        <div className={classes.marginAutoItem}>
          <h1
            style={{
              color: "black",
              padding: "0",
              margin: "0",
              fontSize: "30px",
              marginBottom: "30px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Learn new skills from qualified home tutors
          </h1>
          <h5
            style={{
              color: "black",
              padding: "0",
              margin: "0",
              fontSize: "18px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            We help you match based on your preferences
          </h5>
          <h5
            style={{
              color: "black",
              padding: "0",
              marginTop: "0",
              fontSize: "18px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Personalized teaching and learning experiences proven effectiveness
          </h5>
        </div>
      </div>
      {/* END MID SECTION */}
      {/* START HOW IT WORKS */}
      <div
        style={{
          backgroundColor: "#E1EFEE",
          height: "400px",
        }}
      >
        <div
          className={classes.marginAutoItem}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "black",
                padding: "0",
                marginLeft: "5vw",
                paddingTop: "50px",
                fontSize: "50px",
              }}
            >
              HOW IT WORKS
            </h1>
            <h3
              style={{
                color: "#0ac5a9",
                padding: "0",
                margin: "0",
                marginLeft: "5vw",
                marginBottom: "25px",
                fontSize: "20px",
              }}
            >
              KNOWLEDGE IS YOUR GREATEST WEAPON.
            </h3>
            <h5
              style={{
                color: "#000",
                padding: "0",
                margin: "0",
                marginLeft: "5vw",
                fontSize: "16px",
                lineHeight: "1.3em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Register for free and start browsing. See what you like? Enroll
              and start learning! It's that simple!
            </h5>
          </div>
          <img
            src={howItWorks}
            alt={howItWorks}
            style={{ height: "400px" }}
          ></img>
        </div>
      </div>
      {/* END HOW IT WORKS */}
    </>
  );
};

export default LandingPage;
