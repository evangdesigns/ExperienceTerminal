import axios from 'axios';

const getAllImages = () => new Promise((resolve, reject) => {
  axios.get(`/api/images`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getImagesByProjectId = (projectId) => new Promise((resolve, reject) => {
  axios.get(`/api/images/project/${projectId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});


export { getAllImages, getImagesByProjectId };