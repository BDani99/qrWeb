// logout.js

const API_URL = 'http://127.0.0.1:5000';

const logoutUser = async (userId, accessToken) => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        userId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data);
      return { success: true, message: data.message };
    } else {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      return { success: false, error: errorData.message || 'Unknown error' };
    }
  } catch (error) {
    console.error('Communication error with the server:', error);
    return { success: false, error: 'Communication error with the server' };
  }
};

export default logoutUser;
