// logoutApi.js
const API_URL = 'http://127.0.0.1:5000/logout';

const logoutApi = async (userId) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }), // Itt küldd el az azonosítót
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (response.ok) {
      console.log('Logout successful');
      return { success: true };
    } else {
      return { success: false, error: data.error || 'Unknown error' };
    }
  } catch (error) {
    console.error('Hiba a szerverrel való kommunikáció során:', error);
    return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
  }
};

export default logoutApi;
