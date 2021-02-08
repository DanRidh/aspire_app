import React from 'react';
import {injectStripe} from 'react-stripe-elements';

class PaymentRequestForm extends React.Component {
    constructor(props) {
      super(props);
  

      const paymentRequest = props.stripe.paymentRequest({
        country: 'MY',
        currency: 'rm',
        total: {
          label: 'test lesson',
          amount: 5000,
        },
      });
  
      paymentRequest.on('token', ({complete, token, ...data}) => {
        console.log('Received Stripe token: ', token);
        console.log('Received customer information: ', data);
        complete('success');
      });
  
      paymentRequest.canMakePayment().then((result) => {
        this.setState({canMakePayment: !!result});
      });
  
      this.state = {
        canMakePayment: false,
        paymentRequest,
      };
    }
  
    render() {
      return this.state.canMakePayment ? (
        <PaymentRequestButtonElement //use stripebutton here
          paymentRequest={this.state.paymentRequest}
          className="PaymentRequestButton"
          style={{
            paymentRequestButton: {
              theme: 'light',
              height: '64px',
            },
          }}
        />
      ) : null;
    }
  }

  export default injectStripe(PaymentRequestForm);