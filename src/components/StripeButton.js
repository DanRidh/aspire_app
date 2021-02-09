import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from '@material-ui/core';
import axios from "axios";

const StripeButton = ({c}) => {

  const onToken = (token) => {
    console.log(token);
    console.log("payment success")

    // create instance in student_tutor_session
    axios({
      method:'POST',
      url:'https://aspire-api2021.herokuapp.com/api/v1/student_tutor_sessions/enroll',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      data:{
        tutor_session_id: `${c.id}`
      }
    })
    .then(res=>{
      console.log('student_tutor_session instance created')
      console.log(res)

      // write code here to get student_tutor_session id
      // pending update to api for the id

      // const stsID = res.data.id
    })
    .catch(err=>console.error(err))

    // create instance in payment table
    axios({
      method: 'POST',
      url: 'https://aspire-api2021.herokuapp.com/api/v1/payments/new',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      data: {
        // student_tutor_session: `${stsID}`
      } 
    })
    .then((res) => {
      console.log('payment instance created')
      console.log(res);
    }, (err) => {
      console.log(err);
    }); 
  };


  return (
    <>
      <StripeCheckout
        token={onToken}
        name={c.title}
        description={c.description}
        amount={c.price * 100} //cents
        currency="MYR"
        allowRememberMe
        stripeKey="pk_test_51IIPpEDb9urO8ySSNFVPAxyXayE8NPrjmkrBckdIrw51XYDdh8qFas3GDuZ4wS7rHm54LK77wRihFtZxluveAZyS00Ddoaf1Gv"
      >
        <Button variant="contained" color="secondary">Make Payment</Button>
      </StripeCheckout>
    </>
  );
};

export default StripeButton