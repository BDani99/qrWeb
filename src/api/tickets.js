const API_URL = 'http://127.0.0.1:5000';

const getTicketsApi = async (accessToken, userId) => {
  try {
    const response = await fetch(`${API_URL}/tickets?UserId=${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },      
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (response.ok) {
      return { success: true, tickets: data.tickets };
    } else {
      return { success: false, error: data.error || 'Unknown error' };
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return { success: false, error: 'Error communicating with the server' };
  }
};

export default getTicketsApi;
