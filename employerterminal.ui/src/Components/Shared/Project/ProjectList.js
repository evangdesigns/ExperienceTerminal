import React from 'react';
import { ReactComponent as View } from '../../../images/icons/icon_view.svg';
import './Project.scss';

class ProjectList extends React.Component {

  modalEvent = (e) => {
    e.preventDefault()
    const projectId = e.target.id;
    this.props.popModal(projectId);
  }

  render () {
    const { project } = this.props;
    return (
      <tr className="Project">
        <td className="px-4 img-thumbnail" width="100"><img src={`/images/projectImages/${project.project_image_url}`} alt=""/></td>
        <td className="px-4 col-10">{project.project_name}</td>
        <td className="text-right px-4"><div className="clickOverlay" id={project.project_id} onClick={this.modalEvent}><View className="white underlay" id={project.project_id}/></div></td>
      </tr>
    );
  }
}

export default ProjectList;