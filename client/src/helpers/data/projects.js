import axios from 'axios';

const getProjectSectionsByTitleId = (titleId) => new Promise((resolve, reject) => {
  axios.get(`/project-sections/title/${titleId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getProjectsBySectionId = (sectionId) => new Promise((resolve, reject) => {
  axios.get(`/projects/section/${sectionId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getProjectById = (projectId) => new Promise((resolve, reject) => {
  axios.get(`/projects/project/${projectId}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const addProject = (newProject) => axios.post(`/projects/add`, newProject);

const updateProject = (projectId, updatedProject) => axios.put(`/projects/update/${projectId}`, updatedProject);

const deleteProject = (projectId) => axios.delete(`/projects/delete/${projectId}`);

export { getProjectSectionsByTitleId, getProjectsBySectionId, getProjectById, addProject, updateProject, deleteProject };