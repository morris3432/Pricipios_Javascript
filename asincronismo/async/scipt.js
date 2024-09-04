async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) { // Verifica si la respuesta es correcta
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Propaga el error para que pueda ser manejado en `main`
    }
  }
    
fetchData()