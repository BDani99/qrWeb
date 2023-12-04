const API_URL = 'http://127.0.0.1:5000/register';

const registerApi = async (email, password, name, dateOfBirth, address, placeOfBirth) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name, dateOfBirth, address, placeOfBirth }),
    });

    const data = await response.json();
    console.log('API Response:', data);

    if (response.ok && data.id) {
      console.log('Registration successful');
      return { success: true, userId: data.id };
    } else {
      return { success: false, error: data.error || 'Unknown error' };
    }
  } catch (error) {
    return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
  }
};

export default registerApi;
