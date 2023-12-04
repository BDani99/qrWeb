const API_URL = 'http://127.0.0.1:5000/ticket';

const getTicketApi = async (ticketId, accessToken) => {
  try {
    const response = await fetch(`${API_URL}/${ticketId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);

      if (data.ticket) {
        return { success: true, ticketData: data.ticket };
      } else {
        return { success: false, error: 'Ticket data not found' };
      }
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.message || 'Unknown error' };
    }
  } catch (error) {
    return { success: false, error: 'Error during communication with the server' };
  }
};

export default getTicketApi;
