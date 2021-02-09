import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from '@material-ui/core';
import axios from "axios";

const StripeButton = ({c}) => {

  const onToken = (token) => {
    console.log(token);
    console.log("payment success")
    axios({
      method: 'POST',
      url: 'https://aspire-api2021.herokuapp.com/api/v1/payments/update',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      },
      data: {
        payment_id: `${token.id}`
      } 
    })
    .then((res) => {
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