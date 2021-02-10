import axios from "axios";
import React,{useEffect, useState} from "react";
import { makeStyles,Typography,Container } from "@material-ui/core";
import { toast } from 'react-toastify';

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

  const[enrollStatus,setEnrollStatus]=useState(null)
  const[paymentStatus,setPaymentStatus]=useState(null)


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

  useEffect(()=>{
  // toast messages for enrollment
    if (enrollStatus){
      toast.success(`Successfully enrolled!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if(enrollStatus===false){
      // error messages not working
      toast.error(`Unable to enroll, please try again.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  },[enrollStatus])

  // toast messages for payment
  useEffect(()=>{
    if (paymentStatus){
      toast.success(`Payment received successfully.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if(paymentStatus===false){
      // error messages not working
      toast.error(`Unable to process payment, please try again.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  },[paymentStatus])
  
  return(
    <>
      <Container className={classes.firstContainer}>
        <Typography variant='h5'>Upcoming classes:</Typography>
        <LoadingIndicator loadStatus={loadStatus} width='100' height='100' color='teal'/>
        <DisplayClassCards setEnrollStatus={setEnrollStatus} setPaymentStatus={setPaymentStatus} paymentStatus={paymentStatus}/>
      </Container>
    </>
  );
};

export default Homepage;
