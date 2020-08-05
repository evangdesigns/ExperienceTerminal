import React from 'react';
// import './Project.scss';

class Project extends React.Component {

  render () {
    const { project } = this.props;
    return (
      <div className="Project">
        <h1>{project.project_name}</h1>
        <img src={`${project.project_image_url}?raw=true`} alt={project.project_name} />
        <p>{project.project_description}</p>
      </div>
    );
  }
}

export default Project;