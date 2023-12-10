// api.js

const BASE_URL = 'http://127.0.0.1:5000';

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};

const updateUserData = async (accessToken, userId, newData) => {
  try {
    const response = await fetch(`${BASE_URL}/profil`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken,
        'User-Id': userId,
      },
      body: JSON.stringify(newData),
    });

    return handleResponse(response);
  } catch (error) {
    throw new Error(`Error updating user data: ${error.message}`);
  }
};

export default updateUserData;
