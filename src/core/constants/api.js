import axios from 'axios';

// Exemple d'implémentation pour une requête POST
export const postData = async (url = '', donnees = {}) => {
  try {
    const {data} = await axios.post(url, donnees, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('Error in postData:', error);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    throw error; // Rethrow the error to maintain the error chain.
  }
};
