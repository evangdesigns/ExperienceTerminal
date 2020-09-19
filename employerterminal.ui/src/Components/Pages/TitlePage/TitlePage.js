import React from 'react';
import { Switch, Route } from "react-router-dom";
import DirectiveSign from '../../Shared/DirectiveSign/DirectiveSign';
import Bio from '../Bio/Bio';
import GraphicDesign from '../GraphicDesign/GraphicDesign';

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
//this will be refactored to determine, based on title, what is displayed.
  routePicker() {
    const { titleId } = this.props;
    if (titleId === 1) {
      return (<Route path="/" exact component={Bio}/>)
    } else if (titleId === 3 || titleId === 5) {
      return (<Route path="/graphic-design" exact component={ProjectSection}/>)
    }
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
    const { projectSections } = this.state
    return (
      <div className="TitlePage">
        <DirectiveSign titleId={titleId} selectedTitle={selectedTitle}/>
        <Switch>
          <Route path="/" exact component={GraphicDesign}/>
          <Route path="/graphic-design" exact component={GraphicDesign}/>
          <Route path="/web-design" exact component={Bio}/>
          <Route path="/marketing" exact component={GraphicDesign}/>
          <Route path="/ui-ux-design" exact component={Bio}/>
        </Switch>
      </div>
    );
  }
}

export default TitlePage;