import React from 'react';
import { ReactComponent as View } from '../../../images/icons/icon_view.svg';
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
      <tr>
        <td className="px-4" width="100"><img src={project.project_image_url} alt=""/></td>
        <td className="px-4">{project.project_name}</td>
        <td className="text-right px-4"><a href="#" ><View className="white"/></a></td>
      </tr>
    );
  }
}

export default Project;