import axios from 'axios';
import {baseUrl} from '../keys.json';

const getAllSkills = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/skills`)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));
});

export default { getAllSkills };