import React,{useEffect} from "react";
import { makeStyles,Typography,Container } from "@material-ui/core";
import axios from "axios";
import DisplayClassCards from '../components/DisplayClassCards'

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

  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://aspire-api2021.herokuapp.com/api/v1/tutor_sessions'
    })
    .then(res=>{
      console.log(res) // should be a list of classes
    })
    .catch(err=>console.error(err))
  },[])
  
  return(
    <Container className={classes.firstContainer}>
      <Typography variant='h5'>Upcoming classes:</Typography>
      <DisplayClassCards/>

    </Container>
  );
};

export default Homepage;
