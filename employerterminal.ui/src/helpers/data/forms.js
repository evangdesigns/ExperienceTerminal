import axios from 'axios';
import { baseUrl }from '../keys.json';

const submitContactForm = (formData) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/contact`, formData)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});



export { submitContactForm };