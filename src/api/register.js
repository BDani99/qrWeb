const API_URL = 'http://127.0.0.1:5000';

const api = {
  register: async (formData) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const data = await response.json();
        return { error: data.error || 'Ismeretlen hiba' };
      }
    } catch (error) {
      console.error('API hiba:', error);
      return { error: 'Hiba a szerverrel való kommunikáció során' };
    }
  },
};

export default api;
