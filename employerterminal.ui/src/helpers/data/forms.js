import axios from 'axios';
import { path }from "../../../../server.js";

const submitContactForm = (formData) => new Promise((resolve, reject) => {
  axios.post(`${path}/contact`, formData)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});



export { submitContactForm };