
import axios from 'axios';

async function randomWord() {
  try {
    const response = await axios.get('https://random-word-api.herokuapp.com/word?length=6');
    return response.data[0];
  } catch (error) {
    console.error('Error fetching a random word:', error);
    return 'error';
  }
}

export { randomWord };