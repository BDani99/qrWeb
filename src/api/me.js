const API_URL = 'http://127.0.0.1:5000';

const api = {
  getMe: async () => {
    try {
      const userId = sessionStorage.getItem('userId');
      console.log("userId: " + userId);

      const response = await fetch(`${API_URL}/@me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userId}`, // Hozzáadva az Authorization fejléc
        },
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, user: data };
      } else {
        const data = await response.json();
        return { success: false, error: data.error || 'Ismeretlen hiba' };
      }
    } catch (error) {
      console.error('API hiba:', error);
      return { success: false, error: 'Hiba a szerverrel való kommunikáció során' };
    }
  },
};

export default api;
