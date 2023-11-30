
const fetchData = async () => {
    try {
      const response = await fetch("http://34.116.183.174:5000/api/certificates", {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP hiba! Kód: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Hiba történt az API hívás során:", error.message);
      throw error;
    }
  };
  
  export default fetchData;
  