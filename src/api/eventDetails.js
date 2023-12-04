const API_URL = 'http://127.0.0.1:5000';

export const fetchEventDetails = async (eventId, accessToken) => {
  try {
    
    const response = await fetch(`${API_URL}/events/${eventId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });

    if (response.ok) {
      const data = await response.json();
      return { success: true, event: data.event };
    } else {
      const errorData = await response.json();
      console.error('Error fetching event details:', errorData);
      return { success: false, error: errorData.message || 'Unknown error' };
    }
  } catch (error) {
    console.error('Error fetching event details:', error);
    return { success: false, error: 'Error communicating with the server' };
  }
};
