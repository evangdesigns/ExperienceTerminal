import axios from 'axios';
import { baseUrl }from '../keys.json';

const getProjectSectionsByTitleId = (titleId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/project-section/title/${titleId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getProjectsBySectionId = (sectionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects/section/${sectionId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

export { getProjectSectionsByTitleId, getProjectsBySectionId };