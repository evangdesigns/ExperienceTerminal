import axios from 'axios';

const submitContactForm = (formData) => new Promise((resolve, reject) => {
  axios.post(`/api/contact`, formData)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});



export { submitContactForm };