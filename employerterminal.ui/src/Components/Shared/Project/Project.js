import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getImagesByProjectId } from '../../../helpers/data/images';
import './Project.scss';

class Project extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    const { projectId } = this.props;
    getImagesByProjectId(projectId)
      .then(images => this.setState({ images : images }));
  }

  render () {
    const { project } = this.props;
    const { images } = this.state;
    return (
      <tr className="Project">
       <td colSpan="3">
         {project.project_image_url !== ""?
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
         : null}
          <div>
            {project.project_description}
          </div>
         </td>
      </tr>
    );
  }
}

export default Project;