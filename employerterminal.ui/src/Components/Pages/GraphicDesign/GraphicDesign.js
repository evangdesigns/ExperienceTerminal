import React from 'react';
import ProjectSection from '../../Shared/ProjectSection/ProjectSection';
import { getProjectSectionsByTitleId } from '../../../helpers/data/projects';

class GraphicDesign extends React.Component {
  state = {
    projectSections: [],
  }

  getProjectsSections = (titleId) => {
    getProjectSectionsByTitleId(titleId)
    .then(projectSections => this.setState({ projectSections : projectSections }))
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getProjectsSections(titleId)
  }

  componentDidUpdate(prevProps) {
    const { titleId } = this.props;
    if (prevProps.titleId !== titleId ) {
      this.getProjectsSections(titleId);
    }
  }
  renderProjectTable = () => {
    const { projectSections } = this.state;
    const { popModal, toggleModal } = this.props;
    if (projectSections) {
      return (
        projectSections.map(section => <ProjectSection key={section.project_section_id} section={section} sectionId={section.project_section_id} popModal={popModal} toggleModal={toggleModal} />)
      )
    } else {
      return(null);
    }
  }

  render () {
    return (
      <div>
        {this.renderProjectTable()}
      </div>
    );
  }
}

export default GraphicDesign;