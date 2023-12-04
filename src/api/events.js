
const API_URL = 'http://127.0.0.1:5000';

const fetchEvents = async () => {
  try {
    const response = await fetch(`${API_URL}/events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return { success: true, events: data.events };
    } else {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      return { success: false, error: errorData.error || 'Ismeretlen hiba' };
    }
  } catch (error) {
    console.error('Hiba a szerverrel való kommunikáció során:', error);
    return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
  }
};

export default fetchEvents;
