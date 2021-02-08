import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Container} from '@material-ui/core'

const Homepage = () => {
  const useStyles = makeStyles(() => ({
    marginAutoContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    firstContainer:{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      marginTop:"100px"
    },
    marginAutoItem: {
      margin: "auto",
    },
  }));
  const classes = useStyles();

  
  return(
    <Container className={classes.firstContainer}>
      <h1>
        This is a homepage
      </h1>
    </Container>
  );
};

export default Homepage;
