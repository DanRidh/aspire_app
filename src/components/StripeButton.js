import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({c}) => {

  const onToken = (token) => {
    console.log(token);
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
      />
    </>
  );
};

export default StripeButton