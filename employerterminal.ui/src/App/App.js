import React from 'react';
import { getAllTitles } from '../helpers/data/titles';
import { getAllSkills, getSkillsByTitle } from '../helpers/data/skills';
import DepartureBoard from '../Components/DepartureBoard/DepartureBoard';
import { ReactComponent as Arrow } from '../images/icons/icon_arrow.svg';

import TitleSelector from '../Components/TitleSelector/TitleSelector';
import SkillBox from '../Components/Skills/SkillBox';

import './App.scss';

class App extends React.PureComponent {

  state = {
    selectedTitle:'Jack of All Trades',
    titles: [],
    skills: [],
    projectSection: {},
    projects: []
  }

  componentDidMount() {
    getAllTitles()
    .then(titles => this.setState({ titles : titles }))
    getAllSkills()
    .then(skills => this.setState({ skills : skills }))
  }

  skillsChange() {
    const { selectedTitle, titles } = this.state;
    const title = titles.filter(title => title.title_Name === selectedTitle);
    if (title[0].title_Id === 1){
      getAllSkills()
      .then(skills => this.setState({skills:skills}))
    } else {
      getSkillsByTitle(title[0].title_Id)
      .then(skills => this.setState({skills:skills}))
    }
  }

  titleChange = (newTitle) => {

    this.setState({selectedTitle : newTitle })
    this.skillsChange();
  }

  render () {
    const { titles, skills, selectedTitle } = this.state;
    // const printSkills = skills.map((skill) => <SkillBox key={skill.skill_id} skill={skill} />);
    return (
      <div className="App">
        <div className="enchelada">
          <div className="head-board">
            <div className="board-header d-flex justify-content-between">
              <div className="inline">
                <Arrow className="arrow"/><h1>Arrivals</h1>
              </div>
              <div className="inline">
                <h1>Employer Terminal</h1>
              </div>
            </div>
            <DepartureBoard
              letterCount={20}
              messages={['Evan Grabenstein', selectedTitle ]}
            />
            <TitleSelector titles={titles} selectedTitle={selectedTitle} titleChange={this.titleChange}/>
          </div>
          <div className="d-flex wrap-flex flex-wrap justify-content-center">
          {skills.map((skill) => <SkillBox key={skill.skill_id} skill={skill} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
