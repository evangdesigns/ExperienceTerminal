import React from 'react';
import ProjectSection from '../../Shared/ProjectSection/ProjectSection';
import { getProjectSectionsByTitleId } from '../../../helpers/data/projects';

class Marketing extends React.Component {
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
    if (projectSections) {
      return (
        projectSections.map(section => <ProjectSection key={section.project_section_id} section={section} sectionId={section.project_section_id}/>)
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

export default Marketing;