// TicketDetails.js
import React from 'react';
import QRCode from 'react-qr-code';
import getTicketApi from '../api/ticket.js';
import '../styles/Tickets.css';

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
    <div>
      <h1>{ticketData.name}</h1>
      <p>{ticketData.event_date} - {ticketData.event_location}</p>
      <p>Event Image: {ticketData.event_image}</p>
      <p>Event Price: {ticketData.event_price}</p>
      <p>User Name: {ticketData.user_name}</p>
      <p>Date of Buying: {ticketData.dateOfBuyig}</p>
      <p>User Name: {ticketData.user_name}</p>
      <div className="qr-code">
            <QRCode
                value={ticketData.qrcode}
                style={{ width: '65%', height: '65%' }}
            />
      </div>
    </div>
  );
};

export default TicketDetails;
