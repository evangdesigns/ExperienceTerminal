import axios from 'axios';

const getAllTitles = () => new Promise((resolve, reject) => {
  axios.get(`/api/titles/`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitleId = (title) => new Promise((resolve, reject) => {
  axios.get(`/api/titles/title/${title}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitle = (id) => new Promise((resolve, reject) => {
  axios.get(`/api/titles/${id}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllTitles, getTitleId, getTitle };