import React from 'react';
import Skill from './Skill';
import { getAllSkills, getSkillsByTitle } from '../../../helpers/data/skills';
import './SkillBox.scss';
import { Container, Row, Col } from 'react-bootstrap';

class SkillBox extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getSkills(titleId);
  }

  componentDidUpdate(prevProps) {
    const { titleId } = this.props;
    if (prevProps.titleId !== titleId ) {
      this.getSkills(titleId);
      }
    }

  getSkills = (titleId) => {
    if (titleId === 1){
      getAllSkills()
      .then(skills => this.setState({skills:skills}))
    } else {
      getSkillsByTitle(titleId)
      .then(skills => this.setState({skills:skills}))
    }
  }

  renderSkills = () => {
    const { skills } = this.state;
    if (skills) {
      return(skills.map(skill => <Skill key={skill.skill_id} skill={skill}/>))
    } else {
      return (<h2>Jack of All Trades Master of None</h2>)
    }
  }

  render () {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} className="px-0">
            <div className="skill-box d-flex flex-wrap justify-content-center">
              {this.renderSkills()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SkillBox;