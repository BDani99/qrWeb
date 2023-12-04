const API_URL = 'http://127.0.0.1:5000/login';

const loginApi = async (email, password) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (response.ok && data.token) {
      console.log('Login successful');
      return { success: true, userId: data.id, accessToken: data.token };
    } else {
      return { success: false, error: data.error || 'Unknown error' };
    }
  } catch (error) {
    return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
  }
};

export default loginApi;