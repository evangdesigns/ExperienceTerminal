import React from 'react';
import ProjectDisplayToggle from './ProjectDisplayToggle';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as View } from '../../../images/icons/icon_plus.svg';
import { getImagesByProjectId } from '../../../helpers/data/images';
import './Project.scss';

class ProjectList extends React.Component {
  state = {
    images: [],
    displayed: false,
  }

  componentDidMount() {
    const { project } = this.props;
    getImagesByProjectId(project.project_id)
      .then(images => this.setState({ images : images }));
  }

  toggleEvent = (e) => {
    e.preventDefault()
    const { project, toggleProjects, toggledProject } = this.props;
    toggleProjects(project.project_id)
    if (toggledProject === project.project_id) {
      this.setState({ displayed: true });
    } else {
      this.setState({displayed: false})
    }
  }

  toggleControl = () => {
    const { displayed } = this.state;
    if (displayed === true) {
      this.setState({displayed: false})
    } else if (displayed === false) {
      this.setState({displayed: true})
    }
  }

  render () {
    const { project } = this.props;
    const { images, displayed } = this.state;
    return (
      <>
      <Row className="Project py-1">
        <Col xs={2} className="img-thumbnail align-middle "><img src={`/images/projectImages/${project.project_image_url}`} alt=""/></Col>
        <Col><h3 className="project-name align-middle">{project.project_name}</h3></Col>
        <Col xs="auto" className="text-right align-middle ps-0 py-0"><div className="clickOverlay" id={project.project_id} onClick={this.toggleControl}><View className="icon white underlay" id={project.project_id}/></div></Col>
        {displayed ? <ProjectDisplayToggle project={project} images={images} toggleControl={this.toggleControl} /> : null }
      </Row>
      </>
    );
  }
}

export default ProjectList;