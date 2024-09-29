import './App.css';
import { useState } from 'react';
import RadioGroup from './components/RadioGroup';

const App = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit_card');
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const plans = [
    { label: 'Basic Plan - $5/month', value: 'basic' },
    { label: 'Standard Plan - $10/month', value: 'standard' },
    { label: 'Premium Plan - $20/month', value: 'premium' },
  ];

  const paymentMethods = [
    { label: 'Credit Card', value: 'credit_card' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Bank Transfer', value: 'bank_transfer' },
  ];

  return (
    <div className="App">
      <h2>Select Payment Method</h2>
      <RadioGroup 
        options={paymentMethods}
        name={'payment'}
        selectedValue={selectedPayment}
        onChange={setSelectedPayment}
        direction='horizontal'
        color='#222'
        fontSize='18px'
        radioColor='#ff5733'
        radioSize='20px'
      />

      <h2 style={{ marginTop: '32px' }}>Select Subscription Plan</h2>
      <RadioGroup 
        options={plans}
        name={'subscription'}
        selectedValue={selectedPlan}
        onChange={setSelectedPlan}
        color='#000'
      />
    </div>
  );
};

export default App;
