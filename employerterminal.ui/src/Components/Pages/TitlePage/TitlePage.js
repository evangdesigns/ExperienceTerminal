import React from 'react';
import DirectiveSign from '../../Shared/DirectiveSign/DirectiveSign';
import ProjectSection from '../../Shared/ProjectSection/ProjectSection';
import { getProjectSectionsByTitleId } from '../../../helpers/data/projects';

class TitlePage extends React.Component {
  state = {
    projectSections: [],
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getProjectsSections(titleId)
  }

  componentWillReceiveProps(nextProps) {
    const { titleId } = this.props;
    if (nextProps.titleId !== titleId ) {
      this.getProjectsSections(nextProps.titleId);
      }
    }

  getProjectsSections = (titleId) => {
    getProjectSectionsByTitleId(titleId)
    .then(projectSections => this.setState({ projectSections : projectSections }))
  }

  renderProjectSections = () => {
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
    const { selectedTitle, titleId } = this.props;
    const { projectSections } = this.state;
    return (
      <div className="TitlePage">
        <DirectiveSign titleId={titleId} selectedTitle={selectedTitle}/>
          {this.renderProjectSections()}
      </div>
    );
  }
}

export default TitlePage;