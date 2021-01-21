import axios from 'axios';

const getAllSkills = () => new Promise((resolve, reject) => {
  axios.get(`*/api/skills`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getSkillsByTitle = (titleId) => new Promise((resolve, reject) => {
  axios.get(`/api/skills/title/${titleId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getSkillsByProjectSection = (projectSectionId) => new Promise((resolve, reject) => {
  axios.get(`/api/skills/project/${projectSectionId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

export { getAllSkills, getSkillsByTitle, getSkillsByProjectSection };