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

    return { success: response.ok, data: data };
  } catch (error) {
    return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
  }
};

export default loginApi;