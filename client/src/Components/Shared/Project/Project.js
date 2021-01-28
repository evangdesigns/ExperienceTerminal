import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as URLico} from '../../../images/icons/icon_website.svg';
import { ReactComponent as GITico} from '../../../images/icons/icon_GitHub.svg';
import { getImagesByProjectId } from '../../../helpers/data/images';
import './Project.scss';
import { Row, Col } from 'react-bootstrap';

class Project extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    const { project } = this.props;
    getImagesByProjectId(project.project_id)
      .then(images => this.setState({ images : images }));
  }

  sliderRender = () => {
    const { images } = this.state;
    const { project } = this.props;
    if (images.length !== 0 && project.project_image_url) {
      return (
        <Carousel>
          <Carousel.Item>
            <img
            className="carouselImage"
            src={`images/projectImages/${project.project_image_url}`}
            alt={project.project_name}
            />
          </Carousel.Item>
          {images.map(image => (
            <Carousel.Item key={image.image_id}>
              <img
              className="carouselImage"
              src={`images/projectImages/${image.image_url}`}
              alt={image.image_name}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )
    } else if (images.length === 0 && project.project_image_url){
      return (
        <img
          className="projectImage"
          src={`images/projectImages/${project.project_image_url}`}
          alt={project.project_name}
          />
      );
    }
  }

  render () {
    const { project } = this.props;
    return (
      <>
      <Row className="Project">
       <Col>
       {this.sliderRender()}
        </Col>
      </Row>
      <Row className="Project">
      <Col>
          <div className="projectDescription">
            <p>{project.project_description}</p>
          </div>
          <div className="projectLinks">
            {project.project_url ? <a href={project.project_url} rel="noopener noreferrer" target="_blank"><URLico className="icon white" /></a> : null}
            {project.project_git_url ? <a href={project.project_git_url} rel="noopener noreferrer" target="_blank"><GITico className="icon white" /></a> : null}
          </div>
         </Col>
      </Row>
      </>
    );
  }
}

export default Project;