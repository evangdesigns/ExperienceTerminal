import axios from 'axios';
import { baseUrl }from '../keys.json';

const getAllImages = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/images`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getImagesByProjectId = (projectId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/images/project/${projectId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllImages, getImagesByProjectId };