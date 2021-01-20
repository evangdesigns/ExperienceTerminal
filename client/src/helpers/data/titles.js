import axios from 'axios';

const getAllTitles = () => new Promise((resolve, reject) => {
  axios.get(`/titles/`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitleId = (title) => new Promise((resolve, reject) => {
  axios.get(`/titles/title/${title}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitle = (id) => new Promise((resolve, reject) => {
  axios.get(`/titles/${id}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllTitles, getTitleId, getTitle };