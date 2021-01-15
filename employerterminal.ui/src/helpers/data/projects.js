import axios from 'axios';
import { baseUrl }from '../keys.json';

const getProjectSectionsByTitleId = (titleId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/project-sections/title/${titleId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getProjectsBySectionId = (sectionId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects/section/${sectionId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getProjectById = (projectId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects/project/${projectId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const addProject = (newProject) => axios.post(`${baseUrl}/projects/add`, newProject);

const updateProject = (projectId, updatedProject) => axios.put(`${baseUrl}/projects/update/${projectId}`, updatedProject);

const deleteProject = (projectId) => axios.delete(`${baseUrl}/projects/delete/${projectId}`);

export { getProjectSectionsByTitleId, getProjectsBySectionId, getProjectById, addProject, updateProject, deleteProject };