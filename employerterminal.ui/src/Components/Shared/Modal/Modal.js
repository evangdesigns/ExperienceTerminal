import React from 'react';
import { ReactComponent as URLico} from '../../../images/icons/icon_website.svg';
import { ReactComponent as GITico} from '../../../images/icons/icon_GitHub.svg';
import { getProjectById } from '../../../helpers/data/projects';
import './Modal.scss';

class Modal extends React.Component {
state = {
  project: {},
}

componentDidMount() {
  const { projectId } = this.props;
  getProjectById(projectId)
    .then(project => this.setState({ project : project }));
}

  render () {
    const { project } = this.state;
    const { toggleModal } = this.props;
    return (
      <div className="ModalBox">
        <div className="Content">
          <h3 className="closer" onClick={toggleModal}>X</h3>
          <h1 className="modalTitle">{project ? project.project_name : 'Modal Title'} </h1>
          <div className="modalImage">
            <img src={project.project_image_url} alt={project.project_name}/>
          </div>
          <div className="modalDescription">
            <p>{project.project_description}</p>
          </div>
          <div className="modalLinks">
            {project.project_url ? <a href={project.project_url} rel="noopener noreferrer" target="_blank"><URLico/></a> : null}
            {project.project_git_url ? <a href={project.project_git_url} rel="noopener noreferrer" target="_blank"><GITico/></a> : null}
          </div>
          <h4 className="exit text-center" onClick={toggleModal}>CLOSE</h4>
        </div>
      </div>
    );
  }
}

export default Modal;