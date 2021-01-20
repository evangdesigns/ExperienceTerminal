import React from 'react';
import ProjectList from '../Project/ProjectList';
import Project from '../Project/Project';
import Skill from '../Skills/Skill';
import { CSSTransitionGroup } from 'react-transition-group'
import { getProjectsBySectionId } from '../../../helpers/data/projects';
import { getSkillsByProjectSection } from '../../../helpers/data/skills';
import { Table } from 'react-bootstrap';

import './ProjectSection.scss';

class ProjectSection extends React.Component {
  state = {
    projects: [],
    projectSkills: [],
    toggledProject: 0,
  }

  // resetState = () => {
  //   this.setState({ projects : []})
  //   this.setState({ projectSkills : [] })
  // }

  componentDidMount() {
    const { sectionId } = this.props;
    this.getProjects(sectionId)
    this.getProjectSkills(sectionId)
  }

  componentDidUpdate(prevProps) {
    const { sectionId } = this.props;
    if (prevProps.sectionId !== sectionId ) {
      this.getProjectsSections(sectionId);
      this.getProjectSkills(sectionId);
    }
  }

  getProjects = (sectionId) => {
    getProjectsBySectionId(sectionId)
    .then(projects => this.setState({ projects : projects }))
  }

  getProjectSkills = (sectionId) => {
    getSkillsByProjectSection(sectionId)
    .then(skills => this.setState({ projectSkills : skills }))
  }

  toggleProjects = (id) => {
    this.setState({ toggledProject: id })
  }

  renderProjects = () => {
    const { projects, toggledProject } = this.state;
    const { titleId, popModal, toggleModal } = this.props;
    if (titleId === 2 || titleId === 4) {
      return (projects.map(project => <ProjectList key={project.project_id} project={project} toggledProject={toggledProject} toggleProjects={this.toggleProjects} popModal={popModal} toggleModal={toggleModal} />))
    } else if (titleId === 3 || titleId === 5)
     return (projects.map(project => <Project key={project.project_id} project={project} />)
     )
  }

  render () {
    const { section } = this.props;
    const { projectSkills } = this.state;
    return (
      <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={100}>
      <div className="ProjectSection">
        <Table striped size="sm" className="ProjectSection" variant="dark">
          <thead>
            <tr>
              <th colSpan={2} className="align-middle py-1 px-3"><h2>{section.project_section_name}</h2></th>
              <th className="align-middle text-right py-1 px-3 float-right">
                <div className="d-flex align-content-end">
                  {projectSkills.map(skill => <Skill key={skill.skill_id} skill={skill}/>)}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderProjects()}
          </tbody>
        </Table>
      </div>
      </CSSTransitionGroup>
    );
  }
}

export default ProjectSection;
