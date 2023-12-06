import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventDetails } from '../api/eventDetails.js';
import { BiPlus, BiMinus } from 'react-icons/bi';
import purchaseTickets from '../api/buy.js';
import '../styles/Details.css';

const Details = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [ticketCount, setTicketCount] = useState(1);
  const [isPurchased, setIsPurchased] = useState(false);
  // eslint-disable-next-line
  const [ticketIds, setTicketIds] = useState([]);

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
  }, [id, accessToken]);

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
    if (!user_id) {
      setError("User not logged in. Unable to make a purchase.");
      return;
    }

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
          {eventDetails.image && (
            <img
                src={`data:image/png;base64,${eventDetails.image}`}
                alt="Event Cover"
                className="cover-image"
            />
          )}
          <div className='cont'>
            <h1>{eventDetails.name}</h1>
            <p>A koncert dátuma: {eventDetails.dateOfEvent}</p>
            <p>A koncert helyszíne: {eventDetails.location}</p>
            <p className='description'>{eventDetails.description}</p>
          </div>
        </>
      )}
      {isPurchased ? (
        <div className='successful'>Sikeres vásárlás</div>
      ) : (
        <>
          {user_id ? (
            <div>
              <div className="db">
                <p>{eventDetails.name} jegy db:</p>
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
            </div>
          ) : (
            <div className="login-message"> A vásárláshoz jelentkezzen be.</div>
          )}
        </>
      )}
    </div>
  );
};

export default Details;
