import React, { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import '../styles/Buying.css';

const Buying = () => {
  const [ticketCount, setTicketCount] = useState(0);

  const incrementTicketCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicketCount = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="buying-form">
      <div className="textfield">
        <input type="text" placeholder="Név" />
      </div>
      <div className="textfield">
        <input type="text" placeholder="Születési hely" />
      </div>
      <div className="textfield">
        <input type="text" placeholder="Születési dátum" />
      </div>
      <div className="textfield">
        <input type="text" placeholder="Lakcím" />
      </div>
      <div className="db">
        <p>Azahria Aréna koncert db</p>
        <button onClick={decrementTicketCount}>
          <BiMinus />
        </button>
        <span>{ticketCount}</span>
        <button onClick={incrementTicketCount}>
          <BiPlus />
        </button>
      </div>
      <div>
        <button  className="buy-button">Vásárlás</button>
      </div>
    </div>
  );
};

export default Buying;
