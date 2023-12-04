import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchEventDetails } from '../api/eventDetails.js';
import { BiPlus, BiMinus } from 'react-icons/bi';
import QRCode from 'qrcode.react';
import purchaseTickets from '../api/buy.js';
import '../styles/Details.css';

const Details = () => {
  const history = useHistory();
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [ticketCount, setTicketCount] = useState(1);
  const [ticketIds, setTicketIds] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);

  const user_id = sessionStorage.getItem('userId');
  const accessToken = sessionStorage.getItem('accessToken');

  useEffect(() => {
    console.log('Fetching data for event ID:', id, accessToken);
    const fetchData = async () => {
      try {
        const result = await fetchEventDetails(id);
        console.log('API Response:', result);

        if (result.success) {
          setEventDetails(result.event);
        } else {
          setError(result.error);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching event details:', error);
        setError('Error communicating with the server');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (isPurchased) {
      const newTicketIds = [];
      for (let i = 0; i < ticketCount; i++) {
        newTicketIds.push(`Ticket${i + 1}-${Math.floor(Math.random() * 10000)}`);
        console.log("newTicketIds:", newTicketIds);
      }
      setTicketIds(newTicketIds);
    }
  }, [isPurchased, ticketCount]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const incrementTicketCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicketCount = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePurchase = async () => {
    const purchaseResults = [];

    for (let i = 0; i < ticketCount; i++) {
      const newTicketIds = [`Ticket${i + 1}-${Math.floor(Math.random() * 10000)}`];
      const purchaseResult = await purchaseTickets(
        eventDetails.id,
        user_id,
        1,
        new Date().toISOString(),
        newTicketIds,
        accessToken
      );

      purchaseResults.push(purchaseResult);
    }

    const success = purchaseResults.every(result => result.success);

    if (success) {
      setIsPurchased(true);
    } else {
      setError("Hiba a jegyek vásárlása során");
    }
  };

  return (
    <div className="valami">
      {eventDetails && (
        <>
          <h1>{eventDetails.name}</h1>
          <p>Dátum: {eventDetails.dateOfEvent}</p>
          <p>Helyszín: {eventDetails.location}</p>
        </>
      )}
      <div className="buying-form">
        {isPurchased ? (
          <div>
            <div className='successful'>Sikeres vásárlás</div>
            {ticketIds.map((ticketId, index) => (
              <div className='asd' key={index}>
                <div className='image'>kép</div>
                <div className='kinfo'>
                  <div>{eventDetails.name}</div>
                  <div>{eventDetails.dateOfEvent}</div>
                </div>
                <QRCode className='qrkod' value={ticketId} />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="db">
              <p>{eventDetails.name}</p>
              <button onClick={decrementTicketCount}>
                <BiMinus />
              </button>
              <span>{ticketCount}</span>
              <button onClick={incrementTicketCount}>
                <BiPlus />
              </button>
            </div>
            <button className="buy-button" onClick={handlePurchase}>
              Vásárlás
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
