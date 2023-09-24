import React, { useState } from 'react';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('COD');

  const handlePaymentMethodChange = (e) => {
    setSelectedMethod(e.target.id);
  };

  return (
    <div className="hb_payment_mode">
      <h3>Payment Method</h3>
      <ul>
        <li>
          <input
            type="radio"
            id="COD"
            name="selector"
            checked={selectedMethod === 'COD'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="COD">Cash On Delivery</label>
          <div className="check"></div>
        </li>
        <li>
          <input
            type="radio"
            id="CC"
            name="selector"
            checked={selectedMethod === 'CC'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="CC">Credit / Debit Card</label>
          <div className="check"></div>
        </li>
        <li>
          <input
            type="radio"
            id="NB"
            name="selector"
            checked={selectedMethod === 'NB'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="NB">Net Banking</label>
          <div className="check"></div>
        </li>
      </ul>
    </div>
  );
};

export default PaymentMethod;
