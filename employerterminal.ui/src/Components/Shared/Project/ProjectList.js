import React from 'react';
import ProjectDisplayToggle from './ProjectDisplayToggle';
import { ReactComponent as View } from '../../../images/icons/icon_view.svg';
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
      <tr className="Project">
        <td className="px-4 img-thumbnail" width="100"><img src={`/images/projectImages/${project.project_image_url}`} alt=""/></td>
        <td className="px-4 col-10">{project.project_name}</td>
        <td className="text-right px-4"><div className="clickOverlay" id={project.project_id} onClick={this.toggleControl}><View className="white underlay" id={project.project_id}/></div></td>
      </tr>
      <tr className="ProjectToggle">
        {displayed ? <ProjectDisplayToggle project={project} images={images} toggleControl={this.toggleControl} /> : null }
      </tr>
      </>
    );
  }
}

export default ProjectList;