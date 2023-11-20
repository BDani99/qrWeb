import React, { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import QRCode from 'qrcode.react';
import '../styles/Buying.css';

const Buying = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketIds, setTicketIds] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);

  const incrementTicketCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicketCount = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePurchase = () => {
    const newTicketIds = [];
    for (let i = 0; i < ticketCount; i++) {
      newTicketIds.push(`Ticket${i + 1}-${Math.floor(Math.random() * 10000)}`);
    }
    setTicketIds(newTicketIds);
    setIsPurchased(true);
  };

  return (
    <div className="buying-form">
      {isPurchased ? (
        <div>
          {ticketIds.map((ticketId, index) => (
            <div key={index}>
              <p>QR Code {index + 1}:</p>
              <QRCode value={ticketId} />
            </div>
          ))}
        </div>
      ) : (
        <>
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
            <p>*** koncert db</p>
            <button onClick={decrementTicketCount}>
              <BiMinus />
            </button>
            <span>{ticketCount}</span>
            <button onClick={incrementTicketCount}>
              <BiPlus />
            </button>
          </div>
          <div>
            <button className="buy-button" onClick={handlePurchase}>
              Vásárlás
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Buying;
