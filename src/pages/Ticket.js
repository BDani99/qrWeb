
import React from 'react';
import QRCode from 'react-qr-code';
import getTicketApi from '../api/ticket.js';
import '../styles/Ticket.css';

const TicketDetails = ({ id }) => {
  const [ticketData, setTicketData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchTicketData = async () => {
      try {
        if (!id) {
          console.error('Ticket ID is missing');
          return;
        }

        const accessToken = sessionStorage.getItem('accessToken');
        const result = await getTicketApi(id, accessToken);

        if (result.success) {
          console.log('Ticket Data:', result.ticketData);
          setTicketData(result.ticketData);
        } else {
          console.error('Error fetching ticket data:', result.error);
          setError(result.error);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
        setError('Error communicating with the server');
        setLoading(false);
      }
    };

    fetchTicketData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='ticket-content'>
      {ticketData.event_image && (
        <img
          src={`data:image/png;base64,${ticketData.event_image}`}
          alt="Esemény"
          className="event-image"
        />
      )}
      <h1>{ticketData.name}</h1>
      <p>A koncert időpontja: {ticketData.event_date}</p>
      <p>A koncert helyszíne: {ticketData.event_location}</p>
      <p>Ár: {ticketData.event_price} Ft</p>
      <p>Vásárló neve: {ticketData.user_name}</p>
      <div className="ticket-qr">
        <QRCode
          value={ticketData.qrcode}
          style={{ width: '20%' }}
        />
      </div>
    </div>
  );
};

export default TicketDetails;
