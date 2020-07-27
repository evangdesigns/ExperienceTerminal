import axios from 'axios';
import { baseUrl }from '../keys.json';

const getAllTitles = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/titles/`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitleId = (title) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/titles/title/${title}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitle = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/titles/${id}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllTitles, getTitleId, getTitle };