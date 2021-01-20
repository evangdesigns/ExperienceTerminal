import axios from 'axios';
import { path }from "../../../../server.js";

const getAllTitles = () => new Promise((resolve, reject) => {
  axios.get(`${path}/titles/`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitleId = (title) => new Promise((resolve, reject) => {
  axios.get(`${path}/titles/title/${title}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getTitle = (id) => new Promise((resolve, reject) => {
  axios.get(`${path}/titles/${id}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllTitles, getTitleId, getTitle };