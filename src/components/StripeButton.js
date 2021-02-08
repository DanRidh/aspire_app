import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = () => {

  const onToken = (token) => {
    console.log(token);
  }

  return (
    <>
      <StripeCheckout
        token={this.onToken}
        name="Test Lesson"
        description="lesson description"
        amount={5000} //cents
        currency="RM"
        allowRememberMe
        stripeKey="pk_test_51IIPpEDb9urO8ySSNFVPAxyXayE8NPrjmkrBckdIrw51XYDdh8qFas3GDuZ4wS7rHm54LK77wRihFtZxluveAZyS00Ddoaf1Gv"
      />
    </>
  );
};

export default StripeButton