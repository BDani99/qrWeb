
const API_URL = 'http://127.0.0.1:5000';

const purchaseTickets = async (event_id, user_id, numberofTickets, dateOfBuyig, qrcode, accessToken) => {
    try {
      const response = await fetch(`${API_URL}/buying`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          event_id,
          user_id,
          numberofTickets,
          dateOfBuyig,
          qrcode: qrcode.join(','),
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        return { success: true, purchaseData: data };
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        return { success: false, error: errorData.message || 'Ismeretlen hiba' };
      }
    } catch (error) {
      console.error('Hiba a szerverrel való kommunikáció során:', error);
      return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
    }
  };
  

export default purchaseTickets;
