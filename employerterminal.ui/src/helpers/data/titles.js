import axios from 'axios';
import { baseUrl }from '../keys.json';

const getTitle = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/title/${id}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getTitle };