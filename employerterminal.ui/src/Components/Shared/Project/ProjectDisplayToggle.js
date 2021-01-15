import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Project.scss';

class ProjectDisplayToggle extends React.Component {

imageDisplay = () => {
  const { images, project } = this.props;
  let thumb = project.project_image_url.includes('tmb');
  let video = project.project_url.includes('youtube');
  if (thumb && images.length > 1) {
    return (
      <Carousel>
        {images.map(image => (
          <Carousel.Item key={image.image_id}>
            <img
            className="d-block w-100"
            src={`images/projectImages/${image.image_url}`}
            alt={image.image_name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  } else if (!thumb && images.length > 1) {
    return (
      <Carousel>
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={`images/projectImages/${project.project_image_url}`}
          alt={project.project_name}
          />
        </Carousel.Item>
        {images.map(image => (
          <Carousel.Item key={image.image_id}>
            <img
            className="d-block w-100"
            src={`images/projectImages/${image.image_url}`}
            alt={image.image_name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  } else if (thumb && images.length === 1){
    return (
      <div className="projectPdf">
          {images.map(image => <img src={`images/projectImages/${image.image_url}`} alt={images.image_name}/>)}
      </div>
    )
  } else if (video){
    return (
      <div className="projectVideo">
        <iframe title={project.project_name} src={project.project_url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  } else {
    return (
      <div className="projectImage">
        <img src={`images/projectImages/${project.project_image_url}`} alt={project.project_name}/>
      </div>
    )
  }
}

render () {
  const { project, toggleControl } = this.props;
  return (
    <td className="Content" colSpan="3">
      {this.imageDisplay()}
      <div className="projectDescription">
        <p>{project.project_description}</p>
      </div>
      <h4 className="exit text-center" onClick={toggleControl}>CLOSE</h4>
    </td>
  );
}
}

export default ProjectDisplayToggle;