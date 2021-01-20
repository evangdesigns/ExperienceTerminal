import axios from 'axios';
import { path }from "../../../../server.js";

const getAllImages = () => new Promise((resolve, reject) => {
  axios.get(`${path}/images`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getImagesByProjectId = (projectId) => new Promise((resolve, reject) => {
  axios.get(`${path}/images/project/${projectId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllImages, getImagesByProjectId };