import React from 'react';
import Projects from '../Project/Project';
import Skill from '../Skills/Skill';
import { getProjectsBySectionId } from '../../../helpers/data/projects';
import { getSkillsByProjectSection } from '../../../helpers/data/skills';
import { Table } from 'react-bootstrap';

import './ProjectSection.scss';

class ProjectSection extends React.Component {
  state = {
    projects: [],
    projectSkills: []
  }

  componentDidMount() {
    const { sectionId } = this.props;
    this.getProjects(sectionId)
    this.getProjectSkills(sectionId)
  }

  componentDidUpdate(prevProps) {
    const { sectionId } = this.props;
    if (prevProps.sectionId !== sectionId ) {
      this.getProjectsSections(sectionId);
      this.getProjectSkills(sectionId)
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

  renderProjects = () => {
    const { projects } = this.state;
    const { popModal, toggleModal } = this.props;
      return (projects.map(project => <Projects key={project.project_id} project={project} popModal={popModal} toggleModal={toggleModal} />))
  }

  render () {
    const { section } = this.props;
    const { projectSkills } = this.state;
    return (
      <div className="ProjectSection">
        <Table striped size="sm" className="ProjectSection" variant="dark">
          <thead>
            <tr>
              <th colSpan={2} className="align-middle p-3"><h2>{section.project_section_name}</h2></th>
              <th className="align-middle text-right p-3 float-right">
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
    );
  }
}

export default ProjectSection;
