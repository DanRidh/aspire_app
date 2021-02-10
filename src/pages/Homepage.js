import axios from "axios";
import React,{useEffect, useState} from "react";
import { makeStyles,Typography,Container } from "@material-ui/core";

import LoadingIndicator from '../components/LoadingIndicator'
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

  const [loadStatus,setLoadStatus]=useState(true)


  useEffect(()=>{
    axios({
      method:'GET',
      url:'https://aspire-api2021.herokuapp.com/api/v1/tutor_sessions'
    })
    .then(res=>{
      console.log(res) // returns list of classes
      setLoadStatus(false) // disable loading indicator
    })
    .catch(err=>console.error(err))
  },[])
  
  return(
    <>
      <Container className={classes.firstContainer}>
        <Typography variant='h5'>Upcoming classes:</Typography>
        <LoadingIndicator loadStatus={loadStatus} width='100' height='100' color='teal'/>
        <DisplayClassCards/>
      </Container>
    </>
  );
};

export default Homepage;
