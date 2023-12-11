import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import getTicketsApi from '../api/tickets';
import TicketDetails from '../pages/Ticket';
import '../styles/Tickets.css';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    const userId = sessionStorage.getItem('userId');

    if (!accessToken || !userId) {
      setError('Access token or user ID not found');
      setLoading(false);
      return;
    }

    const fetchTickets = async () => {
      try {
        const result = await getTicketsApi(accessToken, userId);

        if (result.success) {
          setTickets(result.tickets);
        } else {
          setError(result.error);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setError('Error communicating with the server');
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleTicketClick = (ticketId) => {
    console.log("ticketid: " + ticketId)
    setSelectedTicket(ticketId);
  };

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="title">Saját Jegyek</h1>
      <div className="ticket-container">
        {selectedTicket ? (
          <TicketDetails id={selectedTicket} />
        ) : (
          <ul>
            {tickets.map((ticket) => (
              <div
                key={ticket.ticket_id}
                className="ticket-rectangle"
                onClick={() => handleTicketClick(ticket.ticket_id)}
              >
                <div className="ticket-text">
                  <p>{ticket.event_name}</p>
                  <p>{ticket.event_date} - {ticket.event_location}</p>
                  <div className="qr-code">
                    <QRCode
                      value={ticket.qrcode}
                      style={{ width: '65%', height: '65%' }}
                    />
                  </div>
                  {ticket.event_image && (
                    <img
                      src={`data:image/png;base64,${ticket.event_image}`}
                      alt="Event"
                      className="ticket-image"
                    />
                  )}
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tickets;
