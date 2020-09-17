import axios from 'axios';
import { baseUrl }from '../keys.json';

const getAllSkills = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/skills/`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getSkillsByTitle = (titleId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/skills/title/${titleId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getSkillsByProjectSection = (projectSectionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/skills/project/${projectSectionId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

export { getAllSkills, getSkillsByTitle, getSkillsByProjectSection };