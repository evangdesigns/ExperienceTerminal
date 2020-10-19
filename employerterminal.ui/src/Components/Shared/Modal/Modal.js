import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Document, Page } from 'react-pdf';
import { ReactComponent as URLico} from '../../../images/icons/icon_website.svg';
import { ReactComponent as GITico} from '../../../images/icons/icon_GitHub.svg';
import { getProjectById } from '../../../helpers/data/projects';
import { getImagesByProjectId } from '../../../helpers/data/images';
import './Modal.scss';

class Modal extends React.Component {
  state = {
    project: {},
    images: []
  }

  componentDidMount() {
    const { projectId } = this.props;
    getProjectById(projectId)
      .then(project => this.setState({ project : project }));
    getImagesByProjectId(projectId)
      .then(images => this.setState({ images : images }));
  }

  imageDisplay = () => {
    const { images, project } = this.state;
    if (images.length >= 1) {
      return (
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src={project.project_image_url}
            alt={project.project_name}
            />
          </Carousel.Item>
          {images.map(image => (
            <Carousel.Item key={image.image_id}>
              <img
              className="d-block w-100"
              src={image.image_url}
              alt={image.image_name}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )
    } else {
      return (
        <div className="modalImage">
          <img src={project.project_image_url} alt={project.project_name}/>
        </div>
      )
    }
  }

  render () {
    const { project } = this.state;
    const { toggleModal } = this.props;

    return (
      <div className="ModalBox">
        <div className="Content">
          <h3 className="closer" onClick={toggleModal}>X</h3>
          <h1 className="modalTitle">{project ? project.project_name : 'Modal Title'} </h1>
          {this.imageDisplay()}
          <div className="modalDescription">
            <p>{project.project_description}</p>
          </div>
          <div className="modalLinks">
            {/*if PDF '<a href={require('../Documents/Document.pdf')} target="_blank">Download Pdf</a>'*/}
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