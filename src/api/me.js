// getCurrentUser.js

const API_URL = 'http://127.0.0.1:5000';

const getCurrentUser = async (accessToken, userId) => {
  try {
    const response = await fetch(`${API_URL}/@me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'User-Id': userId // Új fejléc hozzáadása
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("tokenAPI: " + accessToken);
      console.log('API Response:', data);
      return { success: true, user: data };
    } else {
      const errorData = await response.json();
      console.log("tokenAPI: " + accessToken);
      console.error('API Error:', errorData);
      return { success: false, error: errorData.message || 'Unknown error' };
    }
  } catch (error) {
    console.error('Communication error with the server:', error);
    return { success: false, error: 'Communication error with the server' };
  }
};

export default getCurrentUser;
