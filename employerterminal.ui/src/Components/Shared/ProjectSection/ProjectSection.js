import React from 'react';
import TitleBoard from '../TitleBoard/TitleBoard';
import Bio from '../../Pages/Bio/Bio';
import Projects from '../Project/Project';
import { getProjectsBySectionId } from '../../../helpers/data/projects';

// import './ProjectSection.scss';

class ProjectSection extends React.Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    const { sectionId } = this.props;
    this.getProjects(sectionId)
  }

  componentWillReceiveProps(nextProps) {
    const { sectionId } = this.props;
    if (nextProps.sectionId !== sectionId ) {
      this.getProjectsSections(nextProps.titleId);
      }
    }

  getProjects = (sectionId) => {
    getProjectsBySectionId(sectionId)
    .then(projects => this.setState({ projects : projects }))
  }

  renderProjects = () => {
    const { projects } = this.state;
    const { section } = this.props;
    console.log()
    if (section.project_section_id !== 25) {
      return (
        projects.map(project =><Projects key={project.project_id} project={project} />
      ))
    } else {
      return(<Bio project={projects[0]} />);
    }
  }

  render () {
    const { section } = this.props;
    return (
      <div className="ProjectSection">
        <TitleBoard title={section.project_section_name} />
        <div className="d-flex flex-wrap justify-content-center">
        {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default ProjectSection;