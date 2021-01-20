import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { getProjectSectionsByTitleId, addProject } from '../../helpers/data/projects';

import './ProjectForm.scss';

class ProjectForm extends React.Component {
  state = {
    title: 2,
    section: '',
    projectName: '',
    projectDescription:'',
    projectImage:'',
    projectLink:'',
    projectGit:'',
    sections: []
  }

  getSectionsWithTitle = () => {
    const { title } = this.state;
    getProjectSectionsByTitleId(title)
    .then(sections => this.setState({ sections : sections}))
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
    this.getSectionsWithTitle();
  }

  sectionChange = (e) => {
    e.preventDefault();
    this.setState({section: e.target.value });
  }

  projectNameChange = (e) => {
    e.preventDefault();
    this.setState({ projectName: e.target.value });
  }

  projectDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({ projectDescription: e.target.value });
  }

  projectImageChange = (e) => {
    e.preventDefault();
    this.setState({ projectImage: e.target.value });
  }

  projectLinkChange = (e) => {
    e.preventDefault();
    this.setState({ projectLink: e.target.value });
  }

  projectGitChange = (e) => {
    e.preventDefault();
    this.setState({ projectGit: e.target.value });
  }

  addProjectEvent = (e) => {
    e.preventDefault();
    const { section, projectName, projectDescription, projectImage, projectGit, projectLink } = this.state
    const newProject = {
      project_section_id: section,
      project_name: projectName,
      project_description: projectDescription,
      project_image_url: projectImage,
      project_url: projectLink,
      project_git_url: projectGit
    };
    addProject(newProject)
    .then(() => console.log('Project Added!'))
    .catch((errFromAddingProject) => console.error(errFromAddingProject));
  }

  componentDidMount() {
    this.getSectionsWithTitle();
  }

  // updateProfileEvent = (e) => {
  //   e.preventDefault();
  //   const { profileId } = this.state
  //   const updatedProfile = {
  //     firstName: this.state.profileFName,
  //     lastName: this.state.profileLName,
  //     imageUrl: this.state.profileImage,
  //     uid: authData.getUid(),
  //   };
  //   profileData.updateProfile(profileId, updatedProfile)
  //   .then(() => this.props.routerMaker())
  //   .catch((errFromUpdateProfile) => console.error(errFromUpdateProfile));
  // }

  render() {
    const { title, section, projectName, projectDescription, projectImage, projectGit, projectLink, sections} = this.state;
    return (
      <Form className="form-form">
        <Form.Group>

          <Form.Label>Title</Form.Label>
          <Form.Control as="select" name="title" value={title} onChange={this.titleChange}>
            <option value="2">Graphic Designer</option>
            <option value="3">Web Developer</option>
            <option value="4">Marketeer</option>
            <option value="5">UX UI Designer</option>
          </Form.Control>

          <Form.Label>Section</Form.Label>
          <Form.Control as="select" name="section" value={section} onChange={this.sectionChange}>
            {sections.map(section => (<option value={section.project_section_id}>{section.project_section_name}</option>))}
          </Form.Control>

        </Form.Group>
        <Form.Group>

          <Form.Label>Project Name</Form.Label>
          <Form.Control type="text" value={projectName} onChange={this.projectNameChange}/>

          <Form.Label>Project Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={projectDescription} onChange={this.projectDescriptionChange}/>

          <Form.Label>Project Image</Form.Label>
          <Form.Control type="text" value={projectImage} onChange={this.projectImageChange}/>

          <Form.Label>Project Link</Form.Label>
          <Form.Control type="text" value={projectLink} onChange={this.projectLinkChange}/>

          <Form.Label>Project Git</Form.Label>
          <Form.Control type="text" value={projectGit} onChange={this.projectGitChange}/>

        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">
            Add That Shit You
          </Button>
        </Form.Group>

      </Form>
    );
  }
}

export default ProjectForm;