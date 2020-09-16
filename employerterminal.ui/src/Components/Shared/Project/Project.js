import React from 'react';
import './Project.scss';

class Project extends React.Component {
  state = {
    hover: false,
  }

  onMouseEnterHandler = () => {
    this.setState({hover:true})
  }
  onMouseLeaveHandler = () => {
    this.setState({hover:false})
  }

  render () {
    const { hover } = this.state;
    const { project } = this.props;
    return (
      <div className="Project" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} >
        <div className="inner">
        {hover ? <div className="para">{project.project_description}</div> : null}
        <img src={`${project.project_image_url}?raw=true`} alt={project.project_name} />
        </div>
      </div>
    );
  }
}

export default Project;