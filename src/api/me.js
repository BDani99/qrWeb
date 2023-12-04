// me.js

const API_URL = 'http://127.0.0.1:5000';

const getCurrentUser = async (accessToken) => {
  try {
    const response = await fetch(`${API_URL}/@me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return { success: true, user: data };
    } else {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      return { success: false, error: errorData.error || 'Unknown error' };
    }
  } catch (error) {
    console.error('Communication error with the server:', error);
    return { success: false, error: 'Communication error with the server' };
  }
};

export default { getCurrentUser };
